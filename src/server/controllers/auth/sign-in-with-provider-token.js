import uuid from 'node-uuid';
import async from 'async';
import request from 'request';
import Client from '../../models/client';
import AccessToken from '../../models/accesstoken';
import userController from '../user';

export default (req, res) => {

  let {
    tokenProvider, clientSecret, accessToken
  } = req.body;

  let client;

  async.waterfall([
    (done) => {
      // find client
      if(!clientSecret) return done(new Error('Client not found'));

      Client.findOne({ secret: clientSecret })
        .exec((error, c) => {
          if (error) {
            console.error(error);
            return done(error);
          }
          if(!c) return done(new Error('Invalid Client'));
          client = c;
          done(null);
        });
    },

    (done) => {
      // get provider identity
      getProviderIdentity(tokenProvider, accessToken, (error, identity) => {
        if(error) return done(error);
        done(null, identity);
      });
    },

    (profile, done) => {
      // find or create user
      userController.findOrUpsertUser(req, accessToken, null, profile, (error, user) => {
        if(error) return done(error);
        if(!user) return done(new Error('No user returned'));
        done(null, user);
      })
    },

    (user, done) => {
      // find or create access toke
      AccessToken.findOne({
        client: client._id,
        provider: tokenProvider,
        user: user._id
      })
      .exec((error, appToken) => {
        if (error) return done(error);

        if (appToken) {
          // refresh token
          appToken.secret = accessToken;
        } else {
          // create new token
          appToken = new AccessToken({
              secret: accessToken, //crypto.randomBytes(64).toString('hex'),
              provider: tokenProvider,
              client: client._id,
              user: user._id
          });
        }

        // save and return
        appToken.save((err) => {
          done(err, user, appToken);
        });
      });
    }

  ], (error, user, token)=>{
    if (error) {
      console.log(error);
      res.status(401).send(error.toString());
      return;
    }

    // response with user and token
    res.json({
      token,
      user
    });
  });
}

// Gets the identity of our user and by extension checks if
// our access token is valid.
const getProviderIdentity = (provider, accessToken, done) => {
  if (provider === 'facebook') {
    return getFacebookIdentity(accessToken, done);
  }
}

// Gets the identity of our user and by extension checks if
// our access token is valid.
const getFacebookIdentity = (accessToken, done) => {

    var fields = [
      'id', 'email', 'name', 'first_name',
      'last_name', 'name_format', 'picture',
      'gender', 'location', 'birthday'].join();

    request.get('https://graph.facebook.com/me?fields='+fields+'&access_token='+accessToken, (err, response, body) => {

      if (err || response.statusCode !== 200) {
        done(new Error("Failed to fetch identity from Facebook."), false);
      }

      var raw = JSON.parse(body);
      // console.log(raw);

      // map to passport identity
      var identity = {
          id: raw.id,
          provider: 'facebook',
          displayName: raw.name,
          emails:[{value:raw.email}],
          photos: [{value: raw.picture.data.url}],
          gender: raw.gender,
          birthday: raw.birthday,
          name: {
            givenName: raw.first_name,
            familyName: raw.last_name
          }
      };

      done(null, identity);
    });

};

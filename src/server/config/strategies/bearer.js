var mongoose = require('mongoose');
var BearerStrategy = require('passport-http-bearer').Strategy;
var AccessToken = require('../../models/accesstoken');
var User = require('../../models/user');

export default () => new BearerStrategy((accessToken, done) => {
  AccessToken.findOne({secret:accessToken}, function(err, token) {
    if (err) return done(err);
    if (!token) return done('Invalid Token', false);

    User.findById(token.user, (err, user) => {
      if (err) return done(err);
      if (!user) return done('User not found', fase);

      var info = { scope: '*' }
        done(null, user, info);
    });
  });
});

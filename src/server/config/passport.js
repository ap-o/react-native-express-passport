import User from '../models/user';
import passport from 'passport';
import local from './strategies/local';
import facebook from './strategies/facebook';
import bearer from './strategies/bearer';
import userController from '../controllers/user';

export default (app) => {

  passport.serializeUser((user, done) => {
      done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
          done(err, user);
      });
  });

  const oAuthCallback = (req, accessToken, refreshToken, profile, done) => {
    if( !req.user ){
      userController.findOrUpsertUser(req, accessToken, refreshToken, profile, done);
    }else{
      userController.LinkSocialProvider(req, accessToken, refreshToken, profile, done)
    }
  }

  // passport.use(local());
  passport.use(bearer());
  // passport.use(facebook(oAuthCallback));
  // passport.use(google(oAuthCallback));
};





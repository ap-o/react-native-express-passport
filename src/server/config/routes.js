import passport from 'passport';

import authController from '../controllers/auth';
import userController from '../controllers/user';

import { ensureAuthenticated } from '../middleware/auth';

export default (app) => {

  app.get('/api/user', ensureAuthenticated, userController.getSessionUser);
  app.get('/api/user/remove-provider/facebook', ensureAuthenticated, userController.removeFacebook);
  app.get('/api/user/remove-provider/google', ensureAuthenticated, userController.removeGoogle);

  // app.post('/api/login', authController.login);
  // app.post('/api/signup', authController.signUp);
  // app.post('/api/logout', authController.logout);

  app.post('/api/signin-with-provider-token', authController.signInWithProviderToken);

  /**
   *
   * Passport Authenticate callbacks
   *
  **/
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: [ "email" ]
  }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  app.get('/auth/google', passport.authenticate('google', {
    scope: [ 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email' ]
  }));

  app.get('/auth/google/callback', passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/'
  }));

};

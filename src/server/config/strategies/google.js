import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import config from '../';

export default (callback) => new FacebookStrategy({
  clientID: config.auth.facebook.clientID,
  clientSecret: config.auth.facebook.clientSecret,
  callbackURL: config.auth.facebook.callbackURL,
  passReqToCallback: true,
  enableProof: true,
  profileFields: ['id', 'emails', 'name', 'gender', 'birthday', 'displayName', 'photos']
}, callback);





export default (callback) => new GoogleStrategy({
  clientID: config.auth.google.clientID,
  clientSecret: config.auth.google.clientSecret,
  callbackURL: config.auth.google.callbackURL,
  passReqToCallback: true
}, callback);

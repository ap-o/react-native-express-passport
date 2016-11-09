import { Strategy as FacebookStrategy } from 'passport-facebook';
import config from '../';

export default (callback) => new FacebookStrategy({
  clientID: config.auth.facebook.clientID,
  clientSecret: config.auth.facebook.clientSecret,
  callbackURL: config.auth.facebook.callbackURL,
  passReqToCallback: true,
  enableProof: true,
  profileFields: ['id', 'emails', 'name', 'gender', 'birthday', 'displayName', 'photos']
}, callback);

import User from '../../models/user';
import { waterfall } from '../../utils';

/**
 * Link to Passport Profile
 */
export const LinkSocialProvider = (req, accessToken, refreshToken, profile, done) => {
  // make query
  let findByProviderQuery = {};
  findByProviderQuery[profile.provider+'.id'] = profile.id;
  // search for user by profider
  return User.findOne(findByProviderQuery, (err, user) => {
    // if user found
    if (user && user.id !== req.user.id) {
      req.flash('authFlash', 'There is already an account with this provider id. Sign in to that account and link it with Google manually from Account Settings.');
      return done(null, false);
    }
    return User.findById(req.user.id, (err, user) => {
      user.firstName = profile.name.givenName,
      user.lastName = profile.name.familyName,
      user.displayName = profile.name.givenName + ' ' + profile.name.familyName.substring(0,1) + '.';
      user[profile.provider] = {
          id: profile.id,
          token: accessToken
      };
      user.save((err) => {
        done(err, user, { message: 'Google account has been linked.' });
      });
    });
  });
};

export default LinkSocialProvider;

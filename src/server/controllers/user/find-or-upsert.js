import User from '../../models/user';
import { waterfall } from '../../utils';
import { encryptPassword } from '../../utils';

/**
 * Get Or Create User
 */
export const findOrUpsertUser = (req, accessToken, refreshToken, profile, done) => {

  let findByProviderQuery = {};
  findByProviderQuery[profile.provider+'.id'] = profile.id;

  return User.findOne(findByProviderQuery, (error, user) => {
    if (error) return done(error);

    if (user) return done(null, user);

    return User.findOne({ email: profile.emails[0].value }, (error, user) => {
      if(error) return done(error);

      if (user) {
        let errMsg = 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.';
        req.flash('authFlash', errMsg);
        let err = new Error(errMsg);
        return done(err, false);
      }

      user =  user || new User();
      user.email = profile.emails[0].value
      user.firstName = profile.name.givenName,
      user.lastName = profile.name.familyName,
      user.displayName = profile.name.givenName + ' ' + profile.name.familyName.substring(0,1) + '.';
      user[profile.provider] = {
          id: profile.id,
          token: accessToken
      };

      return user.save((error) => {
        done(error, user);
      });

    });
  });
};

export default findOrUpsertUser;

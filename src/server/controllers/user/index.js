import findOrUpsertUser from './find-or-upsert';
import LinkSocialProvider from './link-social-provider-to-profile';

/**
 * POST /get session user
 */
export function getSessionUser(req, res) {
  if(req.user){
      res.json(req.user.toJSON() );
  }else{
      res.sendStatus(404);
  }
};


/**
 * Remove Facebook
 */
export function removeFacebook (req, res) {
    return removeProvider(req, res, 'facebook');
};


/**
 * Remove Google
 */
export function removeGoogle () {
  return (req, res) => {
      removeProvider(req, res, 'google');
  };
};


/**
 * Remove Provider
 */
const removeProvider = (req, res, provider) => {
  req.user[provider] = undefined;

  req.user.save((err) => {
    if(err){
      res.status(400);
      res.end();
    }else{
      res.end();
    }
  });
}

export default {
  getSessionUser,
  removeFacebook,
  removeGoogle,
  findOrUpsertUser,
  LinkSocialProvider
}

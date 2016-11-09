import passport from 'passport';

export const bearer = (req, res, next) => {
  if(!req.isAuthenticated || !req.isAuthenticated()){
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
      if(err) return next(err);
      if(!user) return next();
      req.logIn(user, { session: false }, (err) => {
        if (err) {
          return done( new Error('Error signing in user from bearer token') );
        }
        next();
      });
    })(req, res, next);
  }else{
    next();
  }
};

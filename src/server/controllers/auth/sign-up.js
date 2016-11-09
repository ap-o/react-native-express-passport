import User from '../../models/user';

/**
 * POST /signup
 */
export default (req, res, next) => {

  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {

    if (existingUser) {
      return res.status(409).json({ message: 'Account with this email address already exists!' });
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return req.logIn(user, (loginErr) => {

        if (loginErr) return res.status(401).json({ message: loginErr });

        return res.status(200).json({
          message: 'You have been successfully registered.'
        });
      });
    });
  });
}

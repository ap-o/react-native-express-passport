export function encryptPassword (password) {
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return done(saltErr);
    return bcrypt.hash(password, salt, null, (hashErr, hash) => {
      if (hashErr) return done(hashErr);
      return done(hash);
    });
  });
}

export function comparePassword (password, candidatePassword, done) {
  bcrypt.compare(candidatePassword, password, function(err, isMatch) {
    if (err) return done(err);
    done(null, isMatch);
  });
}

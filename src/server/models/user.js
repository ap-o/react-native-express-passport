import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

/**
 * Schema
 */
const schema = new mongoose.Schema({

  email: {
    type: String,
    unique: true,
    lowercase: true
  },

  password: {
    type: String
  },

  lastLogin: {
    type: Date,
    default: new Date()
  },

  createdAt: {
    type: Date,
    default: new Date()
  },

  displayName: {
    type: String,
    default: ''
  },

  firstName: {
    type: String,
    default: ''
  },

  lastName: {
    type: String,
    default: ''
  },

  gender: {
    type: String,
    default: ''
  },

  location: {
    type: String,
    default: ''
  },

  avatar: {
    type: String,
    default: ''
  },

  google: {
    id: {
      type: String,
      sparse: true,
      unique: true
    },
    token: {
      type: String
    }
  },

  facebook: {
    id: {
      type: String,
      sparse: true,
      unique: true
    },
    token: {
      type: String
    }
  }

},{
  versionKey: false
});

/**
 * Password hash middleware.
 */
function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * On Pre save
 */
schema.pre('save', encryptPassword);

/*
 * Compare Password
 */
schema.methods = {
  comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

export default mongoose.model('User', schema);

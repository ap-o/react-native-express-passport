/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _http = __webpack_require__(3);

	var _http2 = _interopRequireDefault(_http);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	var _mongo = __webpack_require__(5);

	var _mongo2 = _interopRequireDefault(_mongo);

	var _passport = __webpack_require__(8);

	var _passport2 = _interopRequireDefault(_passport);

	var _express3 = __webpack_require__(27);

	var _express4 = _interopRequireDefault(_express3);

	var _pages = __webpack_require__(45);

	var _pages2 = _interopRequireDefault(_pages);

	var _routes = __webpack_require__(46);

	var _routes2 = _interopRequireDefault(_routes);

	var _http3 = __webpack_require__(54);

	var _http4 = _interopRequireDefault(_http3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(56);

	console.log(`===> Initializing Env : ${ _config2.default.env }`);

	const app = (0, _express2.default)();

	(0, _mongo2.default)(() => {

	  (0, _express4.default)(app);
	  (0, _passport2.default)(app);
	  (0, _routes2.default)(app);
	  (0, _pages2.default)(app);

	  (0, _http4.default)(app);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function configExport() {}

	//EAAUMo9TlhP0BAEEU7BYAYACrJ1MqTjy3t4GNZBB5whLhKbepYDsa3xGuHfeGZBr1rWzLfxK26uOZBClCsWLUkOkk0Uovd85WvVhNRPndtL4fruWHZBIsVZAWahShSLf28u0kY0wPNsqQzTAgl6fSEbTRC937bHor2r16CjXFQDwZDZD

	// root
	configExport.env = process.env.NODE_ENV || 'development';
	configExport.port = process.env.PORT || 8000;

	configExport.appName = 'unbroken';
	configExport.appVersion = '0.1';
	configExport.staticUrl = process.env.STATIC_URL;
	configExport.appUrl = process.env.APP_URL;
	configExport.apiUrl = process.env.API_URL;

	configExport.clients = {
	  ios: {
	    secret: process.env.IOS_CLIENT_SECRET
	  },
	  android: {
	    secret: process.env.ANDROID_CLIENT_SECRET
	  }
	};

	// mongo
	configExport.mongo = {
	  uri: process.env.MONGO_URI,
	  port: process.env.PORT,
	  options: {
	    server: {
	      socketOptions: {
	        keepAlive: 1
	      }
	    },
	    replset: {
	      socketOptions: {
	        keepAlive: 1
	      }
	    }
	  }
	};

	//session
	configExport.session = {
	  secret: process.env.SESSION_SECRET
	};

	configExport.auth = {
	  facebook: {
	    clientID: '1421272674567421',
	    clientSecret: 'd97f5c5bd159ab6cbb5a7a889e30a6a8',
	    callbackURL: configExport.appUrl + 'auth/facebook/callback'
	  }
	};

	exports.default = configExport;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(6);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _q = __webpack_require__(7);

	var _ = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = done => {
	  const connect = () => {
	    _mongoose2.default.Promise = _q.Promise;
	    _mongoose2.default.connect(_.mongo.uri, _.mongo.options, err => {
	      if (err) {
	        console.log(`===>  Error connecting to mongo db`);
	        console.log(`Reason: ${ err }`);
	      } else {
	        console.log(`===>  😊  Succeeded in connecting to mongo db`);
	        done();
	      }
	    });
	  };
	  connect();

	  _mongoose2.default.connection.on('error', console.log);
	  _mongoose2.default.connection.on('disconnected', connect);
	};

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("q");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	var _passport = __webpack_require__(11);

	var _passport2 = _interopRequireDefault(_passport);

	var _local = __webpack_require__(12);

	var _local2 = _interopRequireDefault(_local);

	var _facebook = __webpack_require__(14);

	var _facebook2 = _interopRequireDefault(_facebook);

	var _bearer = __webpack_require__(16);

	var _bearer2 = _interopRequireDefault(_bearer);

	var _user3 = __webpack_require__(20);

	var _user4 = _interopRequireDefault(_user3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = app => {

	  _passport2.default.serializeUser((user, done) => {
	    done(null, user.id);
	  });

	  _passport2.default.deserializeUser((id, done) => {
	    _user2.default.findById(id, (err, user) => {
	      done(err, user);
	    });
	  });

	  const oAuthCallback = (req, accessToken, refreshToken, profile, done) => {
	    if (!req.user) {
	      _user4.default.findOrUpsertUser(req, accessToken, refreshToken, profile, done);
	    } else {
	      _user4.default.LinkSocialProvider(req, accessToken, refreshToken, profile, done);
	    }
	  };

	  // passport.use(local());
	  _passport2.default.use((0, _bearer2.default)());
	  // passport.use(facebook(oAuthCallback));
	  // passport.use(google(oAuthCallback));
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bcryptNodejs = __webpack_require__(10);

	var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

	var _mongoose = __webpack_require__(6);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Schema
	 */
	const schema = new _mongoose2.default.Schema({

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

	}, {
	  versionKey: false
	});

	/**
	 * Password hash middleware.
	 */
	function encryptPassword(next) {
	  const user = this;
	  if (!user.isModified('password')) return next();
	  return _bcryptNodejs2.default.genSalt(5, (saltErr, salt) => {
	    if (saltErr) return next(saltErr);
	    return _bcryptNodejs2.default.hash(user.password, salt, null, (hashErr, hash) => {
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
	    _bcryptNodejs2.default.compare(candidatePassword, this.password, (err, isMatch) => {
	      if (err) return cb(err);
	      return cb(null, isMatch);
	    });
	  }
	};

	exports.default = _mongoose2.default.model('User', schema);
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("bcrypt-nodejs");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _passportLocal = __webpack_require__(13);

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = () => {
	  return new _passportLocal.Strategy({
	    usernameField: 'email',
	    passwordField: 'password'
	  }, (email, password, done) => {
	    _user2.default.findOne({ email }, (findErr, user) => {
	      if (!user) return done(null, false, { message: `There is no record of the email ${ email }.` });
	      return user.comparePassword(password, (passErr, isMatch) => {
	        if (isMatch) {
	          return done(null, user);
	        }
	        return done(null, false, { message: 'Your email or password combination is not correct.' });
	      });
	    });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _passportFacebook = __webpack_require__(15);

	var _ = __webpack_require__(4);

	var _2 = _interopRequireDefault(_);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = callback => new _passportFacebook.Strategy({
	  clientID: _2.default.auth.facebook.clientID,
	  clientSecret: _2.default.auth.facebook.clientSecret,
	  callbackURL: _2.default.auth.facebook.callbackURL,
	  passReqToCallback: true,
	  enableProof: true,
	  profileFields: ['id', 'emails', 'name', 'gender', 'birthday', 'displayName', 'photos']
	}, callback);

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("passport-facebook");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mongoose = __webpack_require__(6);
	var BearerStrategy = __webpack_require__(17).Strategy;
	var AccessToken = __webpack_require__(18);
	var User = __webpack_require__(9);

	exports.default = () => new BearerStrategy((accessToken, done) => {
	  AccessToken.findOne({ secret: accessToken }, function (err, token) {
	    if (err) return done(err);
	    if (!token) return done('Invalid Token', false);

	    User.findById(token.user, (err, user) => {
	      if (err) return done(err);
	      if (!user) return done('User not found', fase);

	      var info = { scope: '*' };
	      done(null, user, info);
	    });
	  });
	});

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("passport-http-bearer");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(6);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _client = __webpack_require__(19);

	var _client2 = _interopRequireDefault(_client);

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schema = new _mongoose2.default.Schema({
	  secret: {
	    type: String,
	    index: true
	  },
	  client: {
	    type: _mongoose2.default.Schema.Types.ObjectId,
	    ref: 'Client',
	    index: true
	  },
	  provider: {
	    type: String,
	    index: true
	  },
	  user: {
	    type: _mongoose2.default.Schema.Types.ObjectId,
	    ref: 'User',
	    index: true
	  }
	}, {
	  versionKey: false
	});

	exports.default = _mongoose2.default.model('AccessToken', schema);
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mongoose = __webpack_require__(6);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schema = new _mongoose2.default.Schema({

	    secret: {
	        type: String,
	        required: true
	    },

	    description: {
	        type: String,
	        required: true
	    }
	}, {
	    versionKey: false
	});

	exports.default = _mongoose2.default.model('Client', schema);
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSessionUser = getSessionUser;
	exports.removeFacebook = removeFacebook;
	exports.removeGoogle = removeGoogle;

	var _findOrUpsert = __webpack_require__(21);

	var _findOrUpsert2 = _interopRequireDefault(_findOrUpsert);

	var _linkSocialProviderToProfile = __webpack_require__(26);

	var _linkSocialProviderToProfile2 = _interopRequireDefault(_linkSocialProviderToProfile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * POST /get session user
	 */
	function getSessionUser(req, res) {
	  if (req.user) {
	    res.json(req.user.toJSON());
	  } else {
	    res.sendStatus(404);
	  }
	};

	/**
	 * Remove Facebook
	 */
	function removeFacebook(req, res) {
	  return removeProvider(req, res, 'facebook');
	};

	/**
	 * Remove Google
	 */
	function removeGoogle() {
	  return (req, res) => {
	    removeProvider(req, res, 'google');
	  };
	};

	/**
	 * Remove Provider
	 */
	const removeProvider = (req, res, provider) => {
	  req.user[provider] = undefined;

	  req.user.save(err => {
	    if (err) {
	      res.status(400);
	      res.end();
	    } else {
	      res.end();
	    }
	  });
	};

	exports.default = {
	  getSessionUser,
	  removeFacebook,
	  removeGoogle,
	  findOrUpsertUser: _findOrUpsert2.default,
	  LinkSocialProvider: _linkSocialProviderToProfile2.default
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findOrUpsertUser = undefined;

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	var _utils = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get Or Create User
	 */
	const findOrUpsertUser = exports.findOrUpsertUser = (req, accessToken, refreshToken, profile, done) => {

	  let findByProviderQuery = {};
	  findByProviderQuery[profile.provider + '.id'] = profile.id;

	  return _user2.default.findOne(findByProviderQuery, (error, user) => {
	    if (error) return done(error);

	    if (user) return done(null, user);

	    return _user2.default.findOne({ email: profile.emails[0].value }, (error, user) => {
	      if (error) return done(error);

	      if (user) {
	        let errMsg = 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.';
	        req.flash('authFlash', errMsg);
	        let err = new Error(errMsg);
	        return done(err, false);
	      }

	      user = user || new _user2.default();
	      user.email = profile.emails[0].value;
	      user.firstName = profile.name.givenName, user.lastName = profile.name.familyName, user.displayName = profile.name.givenName + ' ' + profile.name.familyName.substring(0, 1) + '.';
	      user[profile.provider] = {
	        id: profile.id,
	        token: accessToken
	      };

	      return user.save(error => {
	        done(error, user);
	      });
	    });
	  });
	};

	exports.default = findOrUpsertUser;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _password = __webpack_require__(23);

	var passwordUtils = _interopRequireWildcard(_password);

	var _async = __webpack_require__(24);

	var asyncUtils = _interopRequireWildcard(_async);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = _extends({}, asyncUtils, passwordUtils);
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.encryptPassword = encryptPassword;
	exports.comparePassword = comparePassword;
	function encryptPassword(password) {
	  return bcrypt.genSalt(5, (saltErr, salt) => {
	    if (saltErr) return done(saltErr);
	    return bcrypt.hash(password, salt, null, (hashErr, hash) => {
	      if (hashErr) return done(hashErr);
	      return done(hash);
	    });
	  });
	}

	function comparePassword(password, candidatePassword, done) {
	  bcrypt.compare(candidatePassword, password, function (err, isMatch) {
	    if (err) return done(err);
	    done(null, isMatch);
	  });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.breakWaterfall = breakWaterfall;

	var _async = __webpack_require__(25);

	var _async2 = _interopRequireDefault(_async);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function breakWaterfall(tasks, callback) {
	  _async2.default.waterfall(tasks, function () {
	    if (arguments[0] === 'break') {
	      arguments[0] = null;
	    }
	    callback.apply(null, arguments);
	  });
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LinkSocialProvider = undefined;

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	var _utils = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Link to Passport Profile
	 */
	const LinkSocialProvider = exports.LinkSocialProvider = (req, accessToken, refreshToken, profile, done) => {
	  // make query
	  let findByProviderQuery = {};
	  findByProviderQuery[profile.provider + '.id'] = profile.id;
	  // search for user by profider
	  return _user2.default.findOne(findByProviderQuery, (err, user) => {
	    // if user found
	    if (user && user.id !== req.user.id) {
	      req.flash('authFlash', 'There is already an account with this provider id. Sign in to that account and link it with Google manually from Account Settings.');
	      return done(null, false);
	    }
	    return _user2.default.findById(req.user.id, (err, user) => {
	      user.firstName = profile.name.givenName, user.lastName = profile.name.familyName, user.displayName = profile.name.givenName + ' ' + profile.name.familyName.substring(0, 1) + '.';
	      user[profile.provider] = {
	        id: profile.id,
	        token: accessToken
	      };
	      user.save(err => {
	        done(err, user, { message: 'Google account has been linked.' });
	      });
	    });
	  });
	};

	exports.default = LinkSocialProvider;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(28);

	var _path2 = _interopRequireDefault(_path);

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _connectFlash = __webpack_require__(29);

	var _connectFlash2 = _interopRequireDefault(_connectFlash);

	var _passport = __webpack_require__(11);

	var _passport2 = _interopRequireDefault(_passport);

	var _expressSession = __webpack_require__(30);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _morgan = __webpack_require__(31);

	var _morgan2 = _interopRequireDefault(_morgan);

	var _cookieParser = __webpack_require__(32);

	var _cookieParser2 = _interopRequireDefault(_cookieParser);

	var _bodyParser = __webpack_require__(33);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _methodOverride = __webpack_require__(34);

	var _methodOverride2 = _interopRequireDefault(_methodOverride);

	var _expressUseragent = __webpack_require__(35);

	var _expressUseragent2 = _interopRequireDefault(_expressUseragent);

	var _compression = __webpack_require__(36);

	var _compression2 = _interopRequireDefault(_compression);

	var _nunjucks = __webpack_require__(37);

	var _nunjucks2 = _interopRequireDefault(_nunjucks);

	var _session = __webpack_require__(38);

	var _session2 = _interopRequireDefault(_session);

	var _ = __webpack_require__(4);

	var _2 = _interopRequireDefault(_);

	var _middleware = __webpack_require__(40);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const isProduction = _2.default.env === 'production';

	exports.default = app => {

	  // nunjucks
	  _nunjucks2.default.configure(_path2.default.join(__dirname, '../', 'templates'), { express: app });

	  // Set Nunjucks as rendering engine for pages with .html suffix
	  app.engine('njk', _nunjucks2.default.render);
	  app.set('view engine', 'njk');

	  // session
	  let sessionStore = (0, _session2.default)();
	  let sessionOptions = {
	    resave: true,
	    saveUninitialized: true,
	    secret: _2.default.session.secret,
	    proxy: true,
	    name: 'sessionId',
	    cookie: {
	      httpOnly: true,
	      secure: false
	    },
	    store: sessionStore
	  };

	  //configure express app
	  if (isProduction) {
	    app.use((0, _compression2.default)());
	    // sessionOptions.cookie.secure = true;
	  }

	  app.set('port', _2.default.port);
	  app.set('view cache', false);
	  app.disable('x-powered-by');
	  app.enable('trust proxy');

	  app.use((0, _morgan2.default)('dev'));
	  app.use((0, _cookieParser2.default)());
	  app.use(_bodyParser2.default.json({ limit: '50mb' }));
	  app.use(_bodyParser2.default.urlencoded({
	    extended: true,
	    limit: '50mb' }));
	  app.use((0, _methodOverride2.default)());

	  app.use((0, _connectFlash2.default)());
	  app.use(_expressUseragent2.default.express());
	  app.use('/static', _express2.default.static(__dirname + '/public'));

	  app.use(_middleware2.default.accessControl);
	  app.use(_middleware2.default.bearer);

	  app.use((0, _expressSession2.default)(sessionOptions));
	  app.use(_passport2.default.initialize());
	  app.use(_passport2.default.session());
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("connect-flash");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("method-override");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("express-useragent");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("nunjucks");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _expressSession = __webpack_require__(30);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _connectMongo = __webpack_require__(39);

	var _connectMongo2 = _interopRequireDefault(_connectMongo);

	var _ = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

	exports.default = () => new MongoStore({
	  url: _.mongo.uri,
	  autoReconnect: true
	});

	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _req = __webpack_require__(41);

	var req = _interopRequireWildcard(_req);

	var _auth = __webpack_require__(42);

	var auth = _interopRequireWildcard(_auth);

	var _headers = __webpack_require__(43);

	var headers = _interopRequireWildcard(_headers);

	var _bearer = __webpack_require__(44);

	var bearer = _interopRequireWildcard(_bearer);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = _extends({}, req, auth, headers, bearer);
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const reqNoSlash = exports.reqNoSlash = (req, res, next) => {
	  if (req.url.substr(-1) == '/' && req.url.length > 1) {
	    res.redirect(301, req.url.slice(0, -1));
	  } else {
	    next();
	  }
	};

	const reqtoLowerCase = exports.reqtoLowerCase = (req, res, next) => {
	  if (/[A-Z]/.test(req.url)) {
	    res.redirect(301, req.url.toLowerCase());
	  } else {
	    next();
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const ensureAuthenticated = exports.ensureAuthenticated = (req, res, next) => {
	  if (!req.user) {
	    return res.sendStatus(401);
	  } else {
	    next();
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const accessControl = exports.accessControl = (req, res, next) => {
	  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
	  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
	  res.setHeader('Access-Control-Allow-Credentials', true);
	  next();
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bearer = undefined;

	var _passport = __webpack_require__(11);

	var _passport2 = _interopRequireDefault(_passport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const bearer = exports.bearer = (req, res, next) => {
	  if (!req.isAuthenticated || !req.isAuthenticated()) {
	    _passport2.default.authenticate('bearer', { session: false }, (err, user, info) => {
	      if (err) return next(err);
	      if (!user) return next();
	      req.logIn(user, { session: false }, err => {
	        if (err) {
	          return done(new Error('Error signing in user from bearer token'));
	        }
	        next();
	      });
	    })(req, res, next);
	  } else {
	    next();
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = __webpack_require__(4);
	var utils = __webpack_require__(22);

	exports.default = app => {
	  app.get('/robots.txt', (req, res) => {
	    res.type('text/plain');
	    if (config.env === 'production') {
	      res.sendStatus("User-agent: *\nAllow: /");
	    } else {
	      res.sendStatus("User-agent: *\nDisallow: /");
	    }
	  });

	  app.get('*', (req, res) => {
	    res.render('./templates/html.njk', {
	      staticUrl: config.staticUrl,
	      authFlash: req.flash('authFlash')
	    });
	  });
	};

	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _passport = __webpack_require__(11);

	var _passport2 = _interopRequireDefault(_passport);

	var _auth = __webpack_require__(47);

	var _auth2 = _interopRequireDefault(_auth);

	var _user = __webpack_require__(20);

	var _user2 = _interopRequireDefault(_user);

	var _auth3 = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = app => {

	  app.get('/api/user', _auth3.ensureAuthenticated, _user2.default.getSessionUser);
	  app.get('/api/user/remove-provider/facebook', _auth3.ensureAuthenticated, _user2.default.removeFacebook);
	  app.get('/api/user/remove-provider/google', _auth3.ensureAuthenticated, _user2.default.removeGoogle);

	  // app.post('/api/login', authController.login);
	  // app.post('/api/signup', authController.signUp);
	  // app.post('/api/logout', authController.logout);

	  app.post('/api/signin-with-provider-token', _auth2.default.signInWithProviderToken);

	  /**
	   *
	   * Passport Authenticate callbacks
	   *
	  **/
	  app.get('/auth/facebook', _passport2.default.authenticate('facebook', {
	    scope: ["email"]
	  }));

	  app.get('/auth/facebook/callback', _passport2.default.authenticate('facebook', {
	    successRedirect: '/',
	    failureRedirect: '/'
	  }));

	  app.get('/auth/google', _passport2.default.authenticate('google', {
	    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
	  }));

	  app.get('/auth/google/callback', _passport2.default.authenticate('google', {
	    successRedirect: '/',
	    failureRedirect: '/'
	  }));
	};

	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _signUp = __webpack_require__(48);

	var _signUp2 = _interopRequireDefault(_signUp);

	var _login = __webpack_require__(49);

	var _login2 = _interopRequireDefault(_login);

	var _logout = __webpack_require__(50);

	var _logout2 = _interopRequireDefault(_logout);

	var _signInWithProviderToken = __webpack_require__(51);

	var _signInWithProviderToken2 = _interopRequireDefault(_signInWithProviderToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  signup: _signUp2.default,
	  login: _login2.default,
	  logout: _logout2.default,
	  signInWithProviderToken: _signInWithProviderToken2.default
	};
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * POST /signup
	 */
	exports.default = (req, res, next) => {

	  console.log(req.user);

	  const user = new _user2.default({
	    email: req.body.email,
	    password: req.body.password
	  });

	  _user2.default.findOne({ email: req.body.email }, (findErr, existingUser) => {

	    if (existingUser) {
	      return res.status(409).json({ message: 'Account with this email address already exists!' });
	    }

	    return user.save(saveErr => {
	      if (saveErr) return next(saveErr);
	      return req.logIn(user, loginErr => {

	        if (loginErr) return res.status(401).json({ message: loginErr });

	        return res.status(200).json({
	          message: 'You have been successfully registered.'
	        });
	      });
	    });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _passport = __webpack_require__(11);

	var _passport2 = _interopRequireDefault(_passport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * POST /login
	 */
	exports.default = (req, res, next) => {
	  // Do email and password validation for the server
	  _passport2.default.authenticate('local', (authErr, user, info) => {
	    if (authErr) return next(authErr);
	    if (!user) return res.status(401).json({ message: info.message });

	    return req.logIn(user, loginErr => {
	      if (loginErr) return res.status(401).json({ message: loginErr });
	      return res.status(200).json({
	        message: 'You have been successfully logged in.'
	      });
	    });
	  })(req, res, next);
	};

	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * POST /logout
	 */
	exports.default = (req, res) => {
	  req.logout();
	  res.redirect('/');
	};

	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nodeUuid = __webpack_require__(52);

	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

	var _async = __webpack_require__(25);

	var _async2 = _interopRequireDefault(_async);

	var _request = __webpack_require__(53);

	var _request2 = _interopRequireDefault(_request);

	var _client = __webpack_require__(19);

	var _client2 = _interopRequireDefault(_client);

	var _accesstoken = __webpack_require__(18);

	var _accesstoken2 = _interopRequireDefault(_accesstoken);

	var _user = __webpack_require__(20);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (req, res) => {

	  let {
	    tokenProvider, clientSecret, accessToken
	  } = req.body;

	  let client;

	  _async2.default.waterfall([done => {
	    // find client
	    if (!clientSecret) return done(new Error('Client not found'));

	    _client2.default.findOne({ secret: clientSecret }).exec((error, c) => {
	      if (error) {
	        console.error(error);
	        return done(error);
	      }
	      if (!c) return done(new Error('Invalid Client'));
	      client = c;
	      done(null);
	    });
	  }, done => {
	    // get provider identity
	    getProviderIdentity(tokenProvider, accessToken, (error, identity) => {
	      if (error) return done(error);
	      done(null, identity);
	    });
	  }, (profile, done) => {
	    // find or create user
	    _user2.default.findOrUpsertUser(req, accessToken, null, profile, (error, user) => {
	      if (error) return done(error);
	      if (!user) return done(new Error('No user returned'));
	      done(null, user);
	    });
	  }, (user, done) => {
	    // find or create access toke
	    _accesstoken2.default.findOne({
	      client: client._id,
	      provider: tokenProvider,
	      user: user._id
	    }).exec((error, appToken) => {
	      if (error) return done(error);

	      if (appToken) {
	        // refresh token
	        appToken.secret = accessToken;
	      } else {
	        // create new token
	        appToken = new _accesstoken2.default({
	          secret: accessToken, //crypto.randomBytes(64).toString('hex'),
	          provider: tokenProvider,
	          client: client._id,
	          user: user._id
	        });
	      }

	      // save and return
	      appToken.save(err => {
	        done(err, user, appToken);
	      });
	    });
	  }], (error, user, token) => {
	    if (error) {
	      console.log(error);
	      res.status(401).send(error.toString());
	      return;
	    }

	    // response with user and token
	    res.json({
	      token,
	      user
	    });
	  });
	};

	// Gets the identity of our user and by extension checks if
	// our access token is valid.


	const getProviderIdentity = (provider, accessToken, done) => {
	  if (provider === 'facebook') {
	    return getFacebookIdentity(accessToken, done);
	  }
	};

	// Gets the identity of our user and by extension checks if
	// our access token is valid.
	const getFacebookIdentity = (accessToken, done) => {

	  var fields = ['id', 'email', 'name', 'first_name', 'last_name', 'name_format', 'picture', 'gender', 'location', 'birthday'].join();

	  _request2.default.get('https://graph.facebook.com/me?fields=' + fields + '&access_token=' + accessToken, (err, response, body) => {

	    if (err || response.statusCode !== 200) {
	      done(new Error("Failed to fetch identity from Facebook."), false);
	    }

	    var raw = JSON.parse(body);
	    // console.log(raw);

	    // map to passport identity
	    var identity = {
	      id: raw.id,
	      provider: 'facebook',
	      displayName: raw.name,
	      emails: [{ value: raw.email }],
	      photos: [{ value: raw.picture.data.url }],
	      gender: raw.gender,
	      birthday: raw.birthday,
	      name: {
	        givenName: raw.first_name,
	        familyName: raw.last_name
	      }
	    };

	    done(null, identity);
	  });
	};
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _http = __webpack_require__(3);

	var _http2 = _interopRequireDefault(_http);

	var _fs = __webpack_require__(55);

	var _fs2 = _interopRequireDefault(_fs);

	var _ = __webpack_require__(4);

	var _2 = _interopRequireDefault(_);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = app => {

	  console.log('===>  Starting Server . . .');
	  const server = _http2.default.createServer(app).listen(app.get('port'), () => {
	    console.log(`===>  😊  Listening on port: ${ app.get('port') }`);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("babel-register");

/***/ }
/******/ ]);
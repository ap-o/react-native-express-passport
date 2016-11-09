import session from 'express-session';
import connectMongo from 'connect-mongo';
import config from './';

const MongoStore = connectMongo(session);

const store = new MongoStore({
  url: config.mongo.uri,
  autoReconnect: true
});

const sessionOptions = {
  resave: true,
  saveUninitialized: true,
  secret: config.session.secret,
  proxy: true,
  name: config.appName,
  cookie: {
    httpOnly: true,
    secure: config.production,
  },
  store: store
};

export default session(sessionOptions);




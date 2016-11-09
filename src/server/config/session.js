import session from 'express-session';
import connectMongo from 'connect-mongo';
import { mongo } from './';

const MongoStore = connectMongo(session);

export default () => new MongoStore({
  url: mongo.uri,
  autoReconnect: true
});


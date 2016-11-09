import mongoose from 'mongoose';
import { Promise as PromiseQ } from 'q';
import { mongo } from './';

export default (done) => {
  const connect = () => {
    mongoose.Promise = PromiseQ;
    mongoose.connect(mongo.uri, mongo.options, (err) => {
      if (err) {
        console.log(`===>  Error connecting to mongo db`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===>  😊  Succeeded in connecting to mongo db`);
        done();
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);
};

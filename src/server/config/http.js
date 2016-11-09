import http from 'http';
import fs from 'fs';
import config from './';

export default (app) => {

  console.log('===>  Starting Server . . .');
  const server = http.createServer(app)
    .listen(app.get('port'), () => {
      console.log(`===>  😊  Listening on port: ${app.get('port')}`);
    });
};

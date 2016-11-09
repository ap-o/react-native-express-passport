require('babel-register');

import express from 'express';
import http from 'http';
import path from 'path';
import nunjucks from 'nunjucks';

import config from './config';
import mongoConnect from './config/mongo';
import passportConfig from './config/passport';
import expressConfig from './config/express';
import pagesConfig from './config/pages';
import routesConfig from './config/routes';

import startHttp from './config/http';

console.log(`===> Initializing Env : ${config.env}`);

const app = express();

mongoConnect(()=>{

  expressConfig(app);
  passportConfig(app);
  routesConfig(app);
  pagesConfig(app);

  startHttp(app);

});

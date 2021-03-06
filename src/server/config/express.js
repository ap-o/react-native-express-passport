import path from 'path';
import express from 'express';
import flash from 'connect-flash';
import passport from 'passport';
import session from 'express-session';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import useragent from 'express-useragent';
import compression from 'compression';
import nunjucks from 'nunjucks';
import dbSession from './session';
import config from './';

import middleware from '../middleware';

const isProduction = config.env === 'production';

export default (app) => {

  // nunjucks
  var templatesPath;
  if(config.env === 'development') {
    templatesPath = path.join(__dirname, '../', 'templates');
  } else{
    templatesPath = path.join(__dirname, 'templates');
  }
  nunjucks.configure(templatesPath, { express: app });

  //configure express app
  if (isProduction) {
    app.use(compression());
    // sessionOptions.cookie.secure = true;
  }

  app.set('port', (config.port));
  app.set('view cache', false);
  app.disable('x-powered-by');
  app.enable('trust proxy');

  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'}
    ));
  app.use(methodOverride());

  app.use(flash());
  app.use(useragent.express());
  app.use('/static', express.static(__dirname + '/public'));

  app.use(middleware.accessControl);
  app.use(middleware.bearer);

  app.use(dbSession);
  app.use(passport.initialize());
  app.use(passport.session());
}

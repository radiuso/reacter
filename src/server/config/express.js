/**
 * Express configuration
 */

'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import lusca from 'lusca';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import expressSequelizeSession from 'express-sequelize-session';

import config from './environment';
import sqldb from '../sqldb';

var Store = expressSequelizeSession(session.Store);

export default function(app) {
  const env = config.env;

  app.set('env', env);
  app.set('view engine', 'ejs');
  app.set('views', config.root);
  app.set('appPath', config.root);

  // define the folder that will be used for static assets
  app.use(express.static(path.join(config.root, config.publicFolder)));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());

  // Persist sessions with sequelize Store
  // We need to enable sessions for passport-twitter because it's an
  // oauth 1.0 strategy, and Lusca depends on sessions
  app.use(session({
    secret: config.secrets.session,
    saveUninitialized: true,
    resave: false,
    store: new Store(sqldb.sequelize)
  }));

  /**
   * Lusca - express server security
   * https://github.com/krakenjs/lusca
   */
  app.use(lusca({
    csrf: true,
    xframe: 'SAMEORIGIN',
    hsts: {
      maxAge: 31536000, //1 year, in seconds
      includeSubDomains: true,
      preload: true
    },
    xssProtection: true
  }));


  if ('production' === env) {
    app.use(compression());
    app.use(favicon(path.join(config.root, config.publicFolder, 'favicon.ico')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
  }
  else if ('development' === env || 'test' === env) {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
}

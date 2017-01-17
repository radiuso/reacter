/**
 * Express configuration
 */

'use strict';
import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import path from 'path';

import config from './environment';

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

  if ('production' === env) {
    app.use(favicon(path.join(config.root, config.publicFolder, 'favicon.ico')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('tiny'));
    app.use(errorHandler()); // Error handler - has to be last
  }
  else {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
}

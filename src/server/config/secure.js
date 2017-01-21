/**
 * Securuty configuration
 */

'use strict';

import passport from 'passport';
import helmet from 'helmet';
import expressSequelizeSession from 'express-sequelize-session';

import config from './environment';
import sqldb from '../sqldb';

const User = sqldb.User;


export default function(app) {
  const env = config.env;

  // passport
  app.use(passport.initialize());

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(helmet());

  if(config.env === 'development') {
    app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
      res.setHeader('Access-Control-Max-Age', '1000');
      return next();
    });
  }

}

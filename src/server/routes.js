'use strict';

import errors from './components/errors';
import path from 'path';
import config from './config/environment';

export default function(app) {

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

  // Insert routes below
  app.use('/api/users', require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(config.root, 'build/index.html'));
    });

  if(config.env === 'production') {
    app.get('*.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }
}

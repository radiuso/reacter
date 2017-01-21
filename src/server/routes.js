'use strict';

import path from 'path';
import errors from './components/errors';
import environment from './config/environment';
const rights = require('./middleware/rights');


export default function(app) {
  // Insert routes below
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/users', rights.isAllowed(), require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(environment.root, 'build/index.html'));
    });

  if(environment.env === 'production') {
    app.get('*.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }
}

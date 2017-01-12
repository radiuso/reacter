'use strict';

import errors from './components/errors';
import path from 'path';
import config from './config/environment';

export default function(app) {
  // Insert routes below
  app.use('/api/users', require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(config.root, 'build/index.html'));
      // res.render('index.html');
    });

  // app.get('*.js', function (req, res, next) {
  //   req.url = req.url + '.gz';
  //   res.set('Content-Encoding', 'gzip');
  //   next();
  // });
}

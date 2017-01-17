'use strict';

import compression from 'compression';

export default function(app) {
  app.use(compression());

  app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

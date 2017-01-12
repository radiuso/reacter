'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';

import sqldb from './sqldb';
import config from './config/environment';
import configExpress from './config/express';
import useApi from './api';

// DB
if (config.seedDB) {
  require('./config/seed');
}

// initialize the server and configure
const app = new Express();
const server = new Server(app);

configExpress(app);
useApi(app);

// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

// universal routing and rendering
app.get('/*', (req, res) => {
  let markup;
  return res.render('index', { markup });
});

// start the server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

sqldb.sequelize.sync()
.then(startServer)
.catch(function(err) {
  console.log('Server failed to start due to error: %s', err);
});

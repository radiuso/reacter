'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';

import sqldb from './sqldb';
import config from './config/environment';
import configExpress from './config/express';
import routes from './routes';

// DB
if (config.seedDB) {
  require('./config/seed');
}

// initialize the server and configure
const app = new Express();
const server = new Server(app);

// express must be initialized before init routes
configExpress(app);
routes(app);

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

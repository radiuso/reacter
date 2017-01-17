'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';

import sqldb from './sqldb';
import env from './config/environment';
import configure from './config';
import routes from './routes';


// initialize the server and configure
const app = new Express();
const server = new Server(app);

// config all app
configure(app);
routes(app);

// start the server
function startServer() {
  server.listen(env.port, env.ip, function() {
    console.log('Express server listening on %d, in %s mode', env.port, app.get('env'));
  });
}

sqldb.sequelize.sync()
.then(startServer)
.catch(function(err) {
  console.log('Server failed to start due to error: %s', err);
});

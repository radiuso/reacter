/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var User = sqldb.User;


User.sync()
  .then(() => User.destroy({ where: {} }))
  .then(() => {
    User.bulkCreate([{
      name: 'Test User',
      active: true
    }, {
      name: 'Admin',
      active: true
    }])
    .then(() => {
      console.log('finished populating users');
    });
  });

'use strict';

import express from 'express';
const controller = require('./auth.controller');

import passport from 'passport';

var router = express.Router();

router.post('/',
  passport.authenticate('local', {
    session: false
  }), controller.serialize, controller.generateToken, controller.login);

module.exports = router;

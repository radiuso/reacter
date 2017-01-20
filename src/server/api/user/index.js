'use strict';

import express from 'express';
const controller = require('./user.controller');

import passport from 'passport';

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


router.post('/login',
  passport.authenticate('local'),
  controller.login);

module.exports = router;

const jwt = require('jsonwebtoken');

import sqldb from '../../sqldb';
const User = sqldb.User;

import env from '../../config/environment';

export function login(req, res) {
  res.status(200).json({
    user: req.user,
    token: req.token
  });
}

export function serialize(req, res, next) {
  db.updateOrCreate(req.user, function(err, user){
    if(err) {return next(err);}
    // we store the updated information in req.user again
    req.user = {
      id: user.id,
      username: user.username
    };
    next();
  });
}

const db = {
  updateOrCreate: function(user, cb){
    // db dummy, we just cb the user
    cb(null, user);
  }
};


export function generateToken(req, res, next) {
  req.token = jwt.sign({
    id: req.user.id
  }, env.secrets.jwt);
  next();
}

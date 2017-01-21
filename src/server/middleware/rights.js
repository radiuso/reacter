
import expressJwt from 'express-jwt';

import env from '../config/environment';
import { isFunction } from '../../shared/utils';

export function isAllowed() {
  return function(req, res, next) {
    if(req.method == "OPTIONS") {
      next();
    } else {
      const jwtCheck = expressJwt({ secret : env.secrets.jwt });
      jwtCheck(req, res, (err) => {
        if(err) {
          return res.status(401).json(err);
        }
        else {
          checkRole(req, res, next);
        }
      });
    }
  }
}

// TODO
function checkRole(req, res, next) {
  if(isFunction(next)) {
    next();
  }
}

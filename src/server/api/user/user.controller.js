/**
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/:id          ->  show
 * PUT     /api/users/:id          ->  update
 * DELETE  /api/users/:id          ->  destroy
 */

'use strict';

import sqldb from '../../sqldb';
const User = sqldb.User;

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
          return entity;
        });
    }
    return null;
  };
}

// Gets a list of Users
export function index(req, res) {
  return User.findAll()
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Gets a single User from the DB
export function show(req, res) {
  return User.find({
    where: {
      id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Creates a new User in the DB
export function create(req, res) {
  return User.create(req.body)
  .then(responseWithResult(res, 201))
  .catch(handleError(res));
}

// Updates an existing User in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return User.find({
    where: {
      id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(saveUpdates(req.body))
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Deletes a User from the DB
export function destroy(req, res) {
  return User.find({
    where: {
      id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(removeEntity(res))
  .catch(handleError(res));
}

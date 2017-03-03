# Reacter


## Testing 

- karma
- chai 
- sinon

Testing scripts are started thanks gulp.
Test files are located in 
- server/api/{endpoint}/{endpoint}.integration.js
- server/api/{endpoint}/{endpoint}.spec.js

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

## Getting Started

1. Run `npm install` to install dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

### Developing

3. Run `npm run start:dev` to run app in development mode


### Production

3. Run `npm run start` to run app in production mode

## Include a client side

This app can either be a single API or render a static client file.
For now, the root url render the public/index.html file
This can be configured thanks ’clientRoot’ parameter.

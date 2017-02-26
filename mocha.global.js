import app from './';
import mongoose from 'mongoose';

after(function(done) {
  app.nodeAuth.on('close', () => done());
  mongoose.connection.close();
  app.nodeAuth.close();
});

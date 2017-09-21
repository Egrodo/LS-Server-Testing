/* eslint-disable no-console */
const { server } = require('./server');
const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/pets', {}, err => {
  if (err) throw err;
  console.log('connected to pets db');
});

server.listen(3000, () => {
  console.log(`Server listening on post 3000`);
});

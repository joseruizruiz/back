"use strict";

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('err', err => {
  console.log('Error de conexion', err);
  process.exit(1);
});

conn.once('open', () => {
  console.log('Conectado a MongoDB.');
});

// Realiza la conexión
mongoose.connect('mongodb://localhost/onBoarding');
"use strict";

const mongoose = require('mongoose');

// Creamos un esquema
const clienteSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  lastname: String,
  telephone: number,
  email: String,
  address: String,
  city: String,
  dni: String,
  frontdni: String,
  backdni: String,
  video: Object,
  registerState: String,
  asignado: Boolean
});

mongoose.model('Cliente', clienteSchema);
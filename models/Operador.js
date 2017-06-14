"use strict";

const mongoose = require('mongoose');

// Creamos un esquema
const operadorSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  lastname: String,
  email: String,
  rol: String,
  telephone: number,
  password: String,
  clientes: [Number] 
});

mongoose.model('Operador', operadorSchema);
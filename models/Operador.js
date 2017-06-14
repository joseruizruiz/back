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
    telephone: Number,
    password: String,
    clientes: [Number]
});

operadorSchema.statics.list = function(criterios, limit, skip, select, sort, start, callback) {
    const query = Operador.find(criterios);
    query.limit(limit);
    query.skip(skip);
    query.select(select);
    query.sort(sort);
    query.skip(start);
    console.log("modelo")
    query.exec(callback);



};
var Operador = mongoose.model('Operador', operadorSchema);
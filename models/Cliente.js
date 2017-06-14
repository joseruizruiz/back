"use strict";

const mongoose = require('mongoose');

// Creamos un esquema
const clienteSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    lastname: String,
    telephone: Number,
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


clienteSchema.statics.list = function(criterios, limit, skip, select, sort, start, callback) {
    const query = Cliente.find(criterios);
    query.limit(limit);
    query.skip(skip);
    query.select(select);
    query.sort(sort);
    query.skip(start);

    query.exec(callback);



};

var Cliente = mongoose.model('Cliente', clienteSchema);
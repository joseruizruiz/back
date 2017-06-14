"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente');

// GET /apiv1/clientes
router.get('/', (req, res, next) => {

    const name = req.query.name;
    const lastname = req.query.lastname;
    const telephone = req.query.telephone;
    const email = req.query.email;
    const address = req.query.address;
    const city = req.query.city;
    const dni = req.query.dni;
    const frontdni = req.query.frontdni;
    const backdni = req.query.backdni;
    const video = req.query.video;
    const registerState = req.query.registerState;
    const asignado = req.query.asignado;

    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const select = req.query.select;
    const sort = req.query.sort;
    const start = parseInt(req.query.start);

    const criterios = {};

    if (name) {
        criterios.name = name;
    }

    if (lastname) {
        criterios.lastname = lastname;
    }

    if (telephone) {
        criterios.telephone = telephone;
    }
    if (email) {
        criterios.email = email;
    }
    if (address) {
        criterios.address = address;
    }

    if (city) {
        criterios.city = city;
    }

    if (dni) {
        criterios.dni = dni;
    }
    if (frontdni) {
        criterios.frontdni = frontdni;
    }
    if (backdni) {
        criterios.backdni = backdni;
    }
    if (video) {
        criterios.video = video;
    }
    if (registerState) {
        criterios.registerState = registerState;
    }
    if (asignado) {
        criterios.asignado = asignado;
    }

    Cliente.list(criterios, limit, skip, select, sort, start, (err, cliente) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: cliente });
    });

});

// GET /apiv1/clientes/:id
router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Cliente.findOne({ _id: _id }).exec((err, cliente) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: cliente });
    });
});

// POST /apiv1/cliente
router.post('/', (req, res, next) => {

    const datosCliente = req.body;

    const cliente = new Cliente(datosCliente);

    cliente.save((err, clienteGuardado) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: clienteGuardado });
    });
});

// PUT /apiv1/clientes/:id
router.put('/:id', (req, res, next) => {
    const datosCliente = req.body;
    const _id = req.params.id;

    Cliente.update({ _id: _id }, datosCliente, (err) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true });
    });
});

// DELETE /apiv1/clientes/:id
router.delete('/:id', (req, res, next) => {
    const _id = req.params.id;

    Cliente.remove({ _id: _id }, err => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true });
    });
})


module.exports = router;
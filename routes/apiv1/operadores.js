"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Operador = mongoose.model('Operador');




// GET /apiv1/operadores
router.get('/', (req, res, next) => {

    const name = req.query.name;
    const lastname = req.query.lastname;
    const email = req.query.email;
    const rol = req.query.rol;
    const telephone = req.query.telephone;
    const password = req.query.password;
    const clientes = req.query.clientes;

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
    if (email) {
        criterios.email = email;
    }
    if (rol) {
        criterios.rol = rol;
    }
    if (telephone) {
        criterios.telephone = telephone;
    }

    if (password) {
        criterios.password = password;
    }

    if (clientes) {
        criterios.clientes = clientes;
    }


    Operador.list(criterios, limit, skip, select, sort, start, (err, operadores) => {

        if (err) {
            next(err);
            return;
        }

        res.json({ success: true, result: operadores });
    });

});

// POST /apiv1/operadores
router.post('/', (req, res, next) => {

    const datosOperador = req.body;

    const operador = new Operador(datosOperador);

    // La guardo en la base de datos
    operador.save((err, operadorGuardado) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: operadorGuardado });
    });
});

// PUT /apiv1/operadores/:id
router.put('/:id', (req, res, next) => {
    const datosOperador = req.body;
    const _id = req.params.id;

    Operador.update({ _id: _id }, datosOperador, (err) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true });
    });
});

// DELETE /apiv1/operadores/:id
router.delete('/:id', (req, res, next) => {
        const _id = req.params.id;

        Operador.remove({ _id: _id }, err => {
            if (err) {
                next(err);
                return;
            }
            res.json({ success: true });
        });
    })
    // GET /apiv1/operadores/:id
router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Operador.findOne({ _id: _id }).exec((err, operador) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: operador });
    });
});

module.exports = router;
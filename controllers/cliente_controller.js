const { response, request } = require('express');

const Cliente = require('../models/cliente_model')

const clienteGetAll = async ( req = request, res = response ) => {    
    try {
        let clientes = await Cliente.findAll();
        res.status(200).json({
            data: clientes
        });        
    } catch ( error ) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrio un problema, intentalo mas tarde'
        })
    }
}

module.exports = {
    clienteGetAll      
}
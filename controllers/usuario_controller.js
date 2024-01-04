const { response, request } = require('express');

const Usuario = require('../models/usuario_model')

const usuarioGetAll = async ( req = request, res = response ) => {    
    try {
        let usuarios = await Usuario.findAll();
        res.status(200).json({
            data: usuarios
        });        
    } catch ( error ) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrio un problema, intentalo mas tarde'
        })
    }
}

const usuarioCreate = async(req, res = response) => {
    
    const { name, email, password } = req.body    
    try {        
        let usuario = await Usuario.create({ 
            name, email, password
        })        
        res.status(200).json({
            usuario: usuario,
            msg: 'Usuario creado correctamente'            
        })

    } catch ( error ) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrio un problema, intentalo mas tarde'
        })
    }

}

module.exports = {
    usuarioGetAll,
    usuarioCreate   
}
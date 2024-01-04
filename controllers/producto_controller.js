const { response, request } = require('express');

const Producto = require('../models/producto_model')

const productoGetAll = async ( req = request, res = response ) => {    
    try {
        let productos = await Producto.findAll();
        res.status(200).json({
            data: productos
        });        
    } catch ( error ) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrio un problema, intentalo mas tarde'
        })
    }
}

const productoCreate = async(req, res = response) => {
    
    const { nombre, descripcion, fecha_caducidad, precio_unitario, activo, user_id } = req.body    
    try {        
        let producto = await Producto.create({ 
            nombre, descripcion, fecha_caducidad, precio_unitario, activo, user_id
        })        
        res.status(200).json({
            producto: producto,
            msg: 'Producto creado correctamente'            
        })

    } catch ( error ) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrio un problema, intentalo mas tarde'
        })
    }

}

module.exports = {
    productoGetAll,
    productoCreate   
}
const { response, request } = require('express');

const init = async ( req = request, res = response ) => {    
            
    res.status(200).json( "Hola, Bienvenidos" );        
    
}

module.exports = {
    init      
}
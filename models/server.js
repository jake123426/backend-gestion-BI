const express = require('express');
const cors = require('cors');
const { dbConexion } = require('../DB/conexion');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 3000;
        this.inicioPath = '/';           
        this.usuarioPath = '/user';      
        this.clientePath = '/cliente';      
        this.productoPath = '/producto';      

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        try {
            await dbConexion.authenticate();
            console.log('Base de Datos Online');
        } catch (error) {
            console.error('No se pudo conectar a la BD:', error);
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );
        
        // Directorio Público
        // this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.inicioPath, require('../routes/init_route'));
        this.app.use( this.usuarioPath, require('../routes/usuario_route'));
        this.app.use( this.clientePath, require('../routes/cliente_route'));
        this.app.use( this.productoPath, require('../routes/producto_route'));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;
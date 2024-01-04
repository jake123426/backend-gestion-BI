const { DataTypes } = require('sequelize')
const { dbConexion } = require('../DB/conexion')

const Producto = dbConexion.define('producto', {    
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    fecha_caducidad: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'producto',
    timestamps: false 
});

module.exports = Producto;
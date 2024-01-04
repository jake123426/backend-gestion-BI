const { DataTypes } = require('sequelize')
const { dbConexion } = require('../DB/conexion')

const Cliente = dbConexion.define('cliente', {    
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    funcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    estatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY,
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
    tableName: 'clientes',
    timestamps: false 
});

module.exports = Cliente;
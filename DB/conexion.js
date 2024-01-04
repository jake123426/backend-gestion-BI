const { Sequelize } = require('sequelize');

// const connectionString = `postgres://${process.env.PRODUCTION_USER}:${process.env.PRODUCTION_PASSWORD}@${process.env.PRODUCTION_HOST}:${process.env.DB_PORT}/${process.env.PRODUCTION_DB}`;

// const dbConexion = new Sequelize( connectionString );

// const dbConexion = new Sequelize( 'bd_gestiondoc', 'postgres', '11235813', {
//     host : 'bd-gestiondoc.cqjzedmropku.us-east-1.rds.amazonaws.com',
//     dialect: 'postgres'
// });

const fs = require('fs');
const rdsCa = fs.readFileSync(__dirname + '/rds-combined-ca-bundle.pem');
require('pg')
var options = {
    host: process.env.PRODUCTION_HOST,
    port: process.env.DB_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'postgres',
    // ssl: 'Amazon RDS',
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: 'en',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
            ca: [rdsCa]           
        }
    }
}

const dbConexion = new Sequelize( process.env.PRODUCTION_DB, process.env.PRODUCTION_USER, process.env.PRODUCTION_PASSWORD, options)

module.exports = {
    dbConexion
}


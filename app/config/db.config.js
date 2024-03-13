require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);

module.exports = db; 
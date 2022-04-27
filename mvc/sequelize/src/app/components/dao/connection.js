const Sequelize = require('sequelize');
const dataBaseConfig = require('../../config/database.json');

const sequelize = new Sequelize(dataBaseConfig);
 
module.exports = sequelize;
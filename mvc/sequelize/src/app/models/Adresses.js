const sequelize = require('sequelize');
const database = require('../components/dao/connection');

const Adresses = database.define('adresses', {
    adress_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date_update: {
        type: sequelize.DATE,
        allowNull: false
    },
    date_creation: {
        type: sequelize.DATE,
        allowNull: false
    },
    username_update: {
        type: sequelize.STRING,
        allowNull: false
    },
    username_create: {
        type: sequelize.STRING,
        allowNull: false
    },
    street_address : sequelize.STRING,
    district : sequelize.STRING,
    city : sequelize.STRING,
    state_province : sequelize.STRING,
    postal_code : sequelize.INTEGER,
    complement : sequelize.STRING,
    country : sequelize.STRING
}, {
    timestamps: false
});
 
module.exports = Adresses;
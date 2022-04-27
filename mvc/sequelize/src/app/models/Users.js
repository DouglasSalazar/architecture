const sequelize = require('sequelize');
const database = require('../components/dao/connection');

const Users = database.define('users', {
    user_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
    given_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    family_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    username: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password_user: {
        type: sequelize.STRING,
        allowNull: false
    },
    image_profile : sequelize.STRING,
    cpf : sequelize.STRING,
    cnpj : sequelize.STRING,
    telephone : sequelize.STRING,
    birth_date : sequelize.DATE
}, {
    timestamps: false
});
 
module.exports = Users;
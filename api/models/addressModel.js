const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config')


const Address = db.define("addresses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    adressName: {
        type: DataTypes.STRING
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    number: {
        type: DataTypes.INTEGER
    },
    street: {
        type: DataTypes.STRING
    },
    postCode: {
        type: DataTypes.INTEGER
    },
    city: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    }
})


module.exports = Address
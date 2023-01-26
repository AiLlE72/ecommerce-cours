const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config')


const Order = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reference: {
        type: DataTypes.STRING
    },
    userName: {
        type: DataTypes.STRING
    },
    userAdress: {
        type: DataTypes.STRING
    },
    carrier: {
        type: DataTypes.STRING
    },
    carrierPrice: {
        type: DataTypes.STRING
    },
    totalPrice: {
        type: DataTypes.FLOAT
    },
    totalWeight: {
        type: DataTypes.FLOAT
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_carrier: {
        type: DataTypes.INTEGER
    }

})

// Order.sync() // permet de créer une base de donnée si elle n'existe pas

module.exports = Order
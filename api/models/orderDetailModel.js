const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config')


const OrderDetail = db.define("orderDetails", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: DataTypes.STRING
    },
    reference: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.FLOAT
    },
    id_order: {
        type: DataTypes.INTEGER
    }

})

// OrderDetail.sync() // permet de créer une base de donnée si elle n'existe pas

module.exports = OrderDetail
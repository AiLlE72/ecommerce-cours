const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config');
const Etre = require('./etreModel');
const Role = require('./roleModel');
const bcrypt = require('bcrypt')



const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    hooks: {
        beforeCreate: (User) => {
            {
                User.password = User.password && User.password != "" ? bcrypt.hashSync(User.password, 10) : "";
            }
        }
    }
})

User.belongsToMany(Role,{ through: Etre })
Role.belongsToMany(User, { through: Etre})

db.sync();
module.exports = User
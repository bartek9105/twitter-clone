const { DataTypes } = require('sequelize');
const db = require('../utils/dbConnection');

const User = db.define('User', {
  email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User

const Tweet = require('../models/Tweet')

User.hasMany(Tweet, {
    foreignKey: 'userId'
})

User.sync({force: true}).then(() => {
    console.log('User model synced')
})

const { DataTypes } = require('sequelize');
const db = require('../utils/dbConnection')

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

User.sync().then(() => {
    console.log('User model synced')
})

module.exports = User
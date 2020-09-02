const { DataTypes } = require('sequelize');
const db = require('../utils/dbConnection');

const Tweet = db.define('Tweet', {
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Tweet

const User = require('../models/User');

Tweet.belongsTo(User)

Tweet.sync({ alter: true }).then(() => {
  console.log('Tweet model synced')
})
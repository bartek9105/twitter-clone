const { DataTypes } = require('sequelize');
const db = require('../utils/dbConnection')

const Tweet = db.define('Tweet', {
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Tweet.sync().then(() => {
    console.log('Tweet model synced')
})

module.exports = Tweet
const { DataTypes } = require('sequelize');
const db = require('../utils/dbConnection');
const User = require('../models/User');

const Followers = db.define('Followers', {
  FollowerId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  FollowedId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
})

module.exports = Followers

Followers.belongsTo(User)

Followers.sync({ alter: true }).then(() => {
  console.log('Followers model synced')
})
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
const Followers = require('../models/Followers')

User.hasMany(Tweet, {
    foreignKey: 'UserId'
})

User.hasMany(Followers, {
    foreignKey: 'FollowerId'
})

User.hasMany(Followers, {
    foreignKey: 'FollowedId'
})

User.sync({ alter: true }).then(() => {
    console.log('User model synced')
})

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_USER
})

const dbConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connected to db')
    } catch (error) {
        console.error('Unable to connect', error)
    }
}

module.exports = dbConnection
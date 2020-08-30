const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const db = require('./utils/dbConnection')

const app = express()
app.use(express.json())
app.use(cors())

const dbConnection = async () => {
    try {
        await db.authenticate()
        console.log('Connected to db')
    } catch (error) {
        console.error('Unable to connect', error)
    }
}

dbConnection()

const tweetsRoutes = require('./routes/tweets')
const usersRoutes = require('./routes/users')

app.use('/api/v1', tweetsRoutes)
app.use('/api/v1', usersRoutes)

app.listen(3000, () => console.log('Server started'))
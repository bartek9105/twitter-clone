const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const dbConnection = require('./utils/dbConnection')

const app = express()
app.use(express.json())
app.use(cors())

dbConnection()

const tweetsRoutes = require('./routes/tweets')

app.use('/api/v1', tweetsRoutes)

app.listen(3000, () => console.log('Server started'))
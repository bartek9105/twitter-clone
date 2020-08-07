const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const tweetsRoutes = require('./routes/tweets')

app.use('/api/v1', tweetsRoutes)

app.listen(3000)
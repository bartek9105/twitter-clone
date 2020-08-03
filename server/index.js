const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const knex = require('./knex')

const app = express()
app.use(express.json())

app.get('/', async (req, res, next) => {
    try {
        const users = await knex('users').select()
        res.send(users)
    } catch (error) {        
        console.log(error)
    }
})

app.get('/:id', async (req, res, next) => {
    try {
        const user = await knex('users').where('id', req.params.id)
        res.send(user)
    } catch (error) {        
        console.log(error)
    }
})

app.listen(3000)
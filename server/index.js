const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const knex = require('./knex')

const app = express()
app.use(express.json())
app.use(cors())

/*
app.get('/api/v1', async (req, res, next) => {
    try {
        const users = await knex('users').select()
        res.send(users)
    } catch (error) {        
        console.log(error)
    }
})
*/

app.get('/api/v1/:id', async (req, res, next) => {
    try {
        const user = await knex('users').where('id', req.params.id)
        res.send(user)
    } catch (error) {        
        console.log(error)
    }
})

app.get('/api/v1', async (req, res, next) => {
    try {
        const timeline = await knex
        .select('users.email', 'tweets.id', 'tweets.body')
        .from('users')
        .join('followers', 'users.id', '=', 'followers.user_id')
        .join('tweets', 'followers.following_id', '=', 'tweets.user_id')
        .where('users.id', 1)
        res.send(timeline)
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/v1', async (req, res, next) => {
    try {
        const { tweetBody } = req.body
        await knex('tweets').insert({
            user_id: 2,
            body: tweetBody
        })
        res.send({ body: tweetBody })
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000)
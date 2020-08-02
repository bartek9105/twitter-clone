const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.send('Server init')
})

app.listen(3000)
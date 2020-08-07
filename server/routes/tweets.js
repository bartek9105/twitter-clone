const express = require('express')
const router = express.Router()

const tweetsController = require('../controllers/tweetsController')

router.get('/', tweetsController.getTweets)

router.post('/', tweetsController.addTweet)

module.exports = router
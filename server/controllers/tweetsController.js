const Tweet = require('../models/Tweet')

exports.getTweets = async (req, res, next) => {
    try {
        const tweets = await Tweet.findAll()
        res.send(tweets)
    } catch (error) {
        console.log(error)
    }
}

exports.addTweet = async (req, res, next) => {
    try {
        await Tweet.create({ body: req.body.body, userId: req.body.userId })    
    } catch (error) {
        console.log(error)
    }
}
const Tweet = require('../models/Tweet')
const User = require('../models/User')

exports.getTweets = async (req, res, next) => {
    try {
        const tweets = await Tweet.findAll({
            include: User
        })
        res.send(tweets)
    } catch (error) {
        console.log(error)
    }
}

exports.addTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.create({ body: req.body.body, UserId: req.body.userId })    
        res.send(tweet)
    } catch (error) {
        console.log(error)
    }
}
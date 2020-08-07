const knex = require('../knex')

exports.getTweets = async (req, res, next) => {
    try {
        const timeline = await knex
        .select('users.email', 'tweets.id', 'tweets.body', 'tweets.type', 'tweets.original_tweet_id')
        .from('users')
        .join('followers', 'users.id', '=', 'followers.user_id')
        .join('tweets', 'followers.following_id', '=', 'tweets.user_id')
        .where('users.id', 1)
        res.send(timeline)
    } catch (error) {
        console.log(error)
    }
}

exports.addTweet = async (req, res, next) => {
    try {
        const { tweetBody } = req.body
        await knex('tweets').insert({
            user_id: 2,
            body: tweetBody,
            type: 'reply'
        })
        res.send({ body: tweetBody })
    } catch (error) {
        console.log(error)
    }
}
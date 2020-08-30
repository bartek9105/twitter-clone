exports.getTweets = async (req, res, next) => {
    try {
        res.send('Get route')
    } catch (error) {
        console.log(error)
    }
}

exports.addTweet = async (req, res, next) => {
    try {
        res.send('Add route')    
    } catch (error) {
        console.log(error)
    }
}
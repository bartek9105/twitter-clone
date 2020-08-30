const User = require('../models/User')

exports.signUp = async (req, res, next) => {
    try {
        let { email, password } = req.body
        const user = await User.create({ email, password })
        res.send(user)
    } catch (error) {
        console.log(error)
    }
}
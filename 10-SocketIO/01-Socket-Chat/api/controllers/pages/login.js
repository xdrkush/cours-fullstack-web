/*
 *
 * Controller /login
 *******************/

const User = require('../../../db/User')

// Page login
module.exports = async(req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('login', {
        dbUser,
        sess
    })
}
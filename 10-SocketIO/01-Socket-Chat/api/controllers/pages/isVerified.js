/*
 *
 * Controller /verified
 **********************/

const User = require('../../../db/User')

// Page isVerified
module.exports = async(req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    res.render('isVerified', {
        dbUser,
        sess
    })
}
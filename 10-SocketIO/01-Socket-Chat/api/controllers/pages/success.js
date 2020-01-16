/*
 *
 * Controller /success
 *********************/

const User = require('../../../db/User')

// Page Success
module.exports = async(req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    if (req.session.status !== 'user') {
        res.render('login', {
            dbUser,
            sess
        })
    } else {
        res.render('success', {
            dbUser,
            sess
        })
    }
}
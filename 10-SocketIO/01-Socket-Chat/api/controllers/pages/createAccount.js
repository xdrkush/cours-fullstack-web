/*
 *
 * Controller /create
 ********************/

const User = require('../../../db/User')

// Page create
module.exports = async(req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('create', {
        dbUser,
        sess
    })
}
/*
 *
 * Controller /confirmationMailer
 ********************************/

const User = require('../../../db/User')

// Page Confirmation d'envoi de mail
module.exports = async(req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('myaccount', {
        dbUser,
        sess
    })
}
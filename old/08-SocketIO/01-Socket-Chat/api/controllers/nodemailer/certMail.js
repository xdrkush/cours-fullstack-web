/*
 *
 * Controller /mailer/cert/:id
 *****************************/

const User = require('../../../db/User')

// Formulaire de cerification du compte isVerified = true
module.exports = async(req, res) => {
    const sess = req.session,
        dbUser = await User.find({ email: sess.email })

    let query = { _id: req.session.userId }

    if (sess.email === sess.email) {
        User.findOneAndUpdate(
            query, {
                isVerified: true
            }, { useFindAndModify: false },
            function(error, post) {
                if (error) {
                    console.log('err 2')
                    res.redirect('/')
                } else {
                    User.findOneAndUpdate({
                        isVerified: true
                    })
                    res.render('myaccount')
                }
            })
    }

}
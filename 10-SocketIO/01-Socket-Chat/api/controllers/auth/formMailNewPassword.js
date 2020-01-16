/*
 *
 * Controller /auth//formMailNewPassword
 ***************************************/

const bcrypt = require('bcrypt'),
    nodemailer = require('nodemailer'),
    User = require('../../../db/User'),
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        port: '587',
        auth: {
            user: "jojocoin2019@gmail.com",
            pass: "jojocoin.2019$"
        }
    })
let rand, mailOptions, host, link;

// Page de certification du compte
module.exports = async(req, res, next) => {

    // if (req.body.password === req.body.passwordConfirm) {

    const sess = req.session,
        dbUser = await User.find({ email: req.body.email })

    let query = { _id: dbUser[0]._id }

    User.findByIdAndUpdate(
        query, {
            password: req.body.password,
        }, { useFindAndModify: false },
        function(error, post) {
            if (error) {
                console.log(error)
                User.findByIdAndUpdate({
                        ...req.body
                    },
                    (error, post) => {
                        console.log('err 1')
                        res.redirect('/')
                    })
            } else {
                console.log('err 2')
                res.redirect('/')
            }
        }
    )

}
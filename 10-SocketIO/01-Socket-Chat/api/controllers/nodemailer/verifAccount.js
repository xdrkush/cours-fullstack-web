/*
 *
 * Controller /mailer/verify/:id
 *******************************/

const User = require('../../../db/User'),
    nodemailer = require('nodemailer'),
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
module.exports = (req, res) => {
    const sess = req.session
    console.log(req.session)
    res.render('verifAccount')
}
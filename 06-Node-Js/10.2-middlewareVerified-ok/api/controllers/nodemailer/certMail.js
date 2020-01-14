const express = require('express')
  , app = express()
  , router = express.Router()
  , bcrypt = require('bcrypt')
  , path = require('path')
  , fs = require('fs')
  , User = require('../../../db/User')
  , nodemailer = require('nodemailer')
  , transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: '587',
    auth: {
      user: "jojocoin2019@gmail.com",
      pass: "jojocoin.2019$"
    }
  })

let rand, mailOptions, host, link;

// Formulaire de cerification du compte isVerified
router.post('/cert/:id', async (req, res) => {
    const sess = req.session,
      dbUser = await User.find({ email: sess.email })
  
    let query = { _id: req.session.userId }
  
    if (sess.email === sess.email) {
      User.findOneAndUpdate(
        query,
        {
          isVerified: true
        },
        { useFindAndModify: false },
        function (error, post) {
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
  
  })

module.exports = router
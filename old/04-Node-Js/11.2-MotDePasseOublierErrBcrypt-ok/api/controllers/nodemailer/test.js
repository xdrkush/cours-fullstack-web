/*
 *
 * Controller /mailer/test
 *************************/

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

// Nodemailer Test
router.get('/test', (req, res, next) => {
  const mailOptions = {
    from: 'jojocoin2019@gmail.com', // sender address
    to: req.session.email, // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<h2>Mon premier mail avec nodemailer, Successfull</h2>'// plain text body
  }
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
  res.redirect('back')
})

module.exports = router
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

// Verification mail
router.get('/verifMail', function (req, res) {
    const
      rand = Math.floor((Math.random() * 100) + 54),
      host = 'localhost:3000',
      link = "http://" + host + "/mailer/verify/" + rand,
      mailOptions = {
        to: req.session.email,
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>",
        rand: rand
      }
  
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.end("Erreur");
      } else {
        console.log("Message sent: " + res.message);
        res.render('mailSendOk')
        
      }
    })
  })

module.exports = router
const express = require('express')
  , app = express()
  , router = express.Router()
  , bcrypt = require('bcrypt')
  , path = require('path')
  , fs = require('fs')
  , User = require('../db/User')
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

// Page de certification du compte
router.get('/verify/:id', function (req, res) {
  const sess = req.session

  console.log(req.session)

  res.render('verifAccount')

})

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
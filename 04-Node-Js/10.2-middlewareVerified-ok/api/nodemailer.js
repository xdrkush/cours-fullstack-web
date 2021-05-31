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

const test = require('./controllers/nodemailer/test'),
      verifMail = require('./controllers/nodemailer/verifMail'),
      verifAccount = require('./controllers/nodemailer/verifAccount'),
      certMail = require('./controllers/nodemailer/certMail')

// Nodemailer Test
router.get('/test', test)

// Verification mail
router.get('/verifMail', verifMail)

// Page de certification du compte
router.get('/verify/:id', verifAccount)

// Formulaire de cerification du compte isVerified
router.post('/cert/:id', certMail)

module.exports = router
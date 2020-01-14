/*
 *
 * Controller /mailer/verify/:id
 *******************************/

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


// Page de certification du compte
router.get('/verify/:id', function (req, res) {
    const sess = req.session
  
    console.log(req.session)
  
    res.render('verifAccount')
  
  })

module.exports = router
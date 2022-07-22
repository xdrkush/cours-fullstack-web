/*
 *
 * Controller /mailer/lostPassword
 *********************************/

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

// Envoie du mail du mot de passe oublier
router.post('/lostPassword', function (req, res) {
  const
    rand = Math.floor((Math.random() * 100) + 54),
    host = 'localhost:3000',
    link = "http://" + host + "/auth/mailNewPassword/" + rand,
    mailOptions = {
      to: req.body.email,
      subject: "Mot de passe Oublier Mon Super Site",
      html: "Hello,<br> Merci de Cliker sur le lien afin de créé un nouveau mot de passe.<br><a href=" + link + ">Cliquez ici pour Modifier Mot de passe</a>",
      rand: rand
    }

  console.log(mailOptions)
  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error)
      res.end("Erreur")
    } else {
      console.log("Message sent: " + res.message);
      res.render('login')

    }
  })
})

module.exports = router
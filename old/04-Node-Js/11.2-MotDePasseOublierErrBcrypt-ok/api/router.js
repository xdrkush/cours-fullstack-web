/*
 *
 * routes /
 ******************************/

const express = require('express')
    , router = express.Router()
    , path = require('path')

/*
 *  API Routes
 **************/

const API = require('./api'),
      AUTH = require('./auth'),
      NODEMAILER = require('./nodemailer')

/*
 *  Middleware
 *************/

const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *
 *  Page Import
 * 
 ***************/

const home = require('./controllers/pages/home'),
      login = require('./controllers/pages/login'),
      createAccount = require('./controllers/pages/createAccount'),
      myaccount = require('./controllers/pages/myaccount'),
      verified = require('./controllers/pages/isVerified'),
      success = require('./controllers/pages/success'),
      confirmationMailer = require('./controllers/pages/confirmationMailer')
      
/*
 *
 *  Page Use
 * 
 ***************/

// Page Index racine 
router.get('/',auth, home)
// Page Mon compte
router.get('/myaccount', auth, myaccount)
// Page create
router.get('/create', createAccount )
// Page login
router.get('/login', login )
// Page Success
router.get('/success', auth, success )
// Page Confirmation d'envoi de mail
router.get('/confirmationMailer', confirmationMailer )
// Page isVerified
router.get('/verified',auth, isVerified, verified)

/*
 *  API
 *******/
router.use('/api', API)
/*
 *  Auth
 ********/
router.use('/auth', AUTH)
/*
 *  Nodemailer
 **************/
router.use('/mailer', NODEMAILER)

module.exports = router

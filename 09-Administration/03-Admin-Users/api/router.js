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
      NODEMAILER = require('./nodemailer'),
      STRIPE = require('./stripe'),
      ADMIN = require('./admin')

/*
 *  Middleware
 *************/

const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified'),
      isAdmin = require('../middleware/isAdmin')

/*
 *  Page Import
 * 
 ***************/
const home = require('./controllers/pages/home'),
      login = require('./controllers/pages/login'),
      createAccount = require('./controllers/pages/createAccount'),
      myaccount = require('./controllers/pages/myaccount'),
      verifiedPage = require('./controllers/pages/isVerified'),
      success = require('./controllers/pages/success'),
      confirmationMailer = require('./controllers/pages/confirmationMailer'),
      eshop = require('./controllers/pages/eshop'),
      articleID = require('./controllers/pages/articleID'),
      adminPage = require('./controllers/pages/adminPage')
      
/*
 *  Page Use
 * 
 ***************/

// Page Index racine 
router.get('/', home)
// Page Mon compte
router.get('/myaccount', auth, myaccount)
// Page create
router.get('/create', createAccount )
// Page login
router.get('/login', login )
// Page Success
router.get('/success', success )
// Page Confirmation d'envoi de mail
router.get('/confirmationMailer', confirmationMailer )
// Page isVerified
router.get('/verified',auth, isVerified, verifiedPage )
// Page Eshop
router.get('/eshop', eshop )
// Page ArticleID
router.get('/article/:id', articleID )
// Page Admin
router.get('/admin', isAdmin, adminPage )

/* API
 *******/
router.use('/api', API)
/* Auth
 ********/
router.use('/auth', AUTH)
/* Nodemailer
 **************/
router.use('/mailer', NODEMAILER)
/* Stripe
 **************/
router.use('/shop', STRIPE)
/* Admin
 *********/
router.use('/admin', isAdmin, ADMIN)

module.exports = router

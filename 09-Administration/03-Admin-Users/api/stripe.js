/*
 *
 * routes /shop
 ******************************/
const express = require('express')
    , app     = express()
    , router  = express.Router()
    , Article = require('../db/Article')

/*
 *  Middleware
 *************/
const auth       = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *  Import Controllers Articles
 *******************************/
const createPayment = require('./controllers/stripe/createPayment')

// Payment Article
router.post('/checkout/:id', createPayment)

module.exports = router
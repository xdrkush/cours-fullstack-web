/*
 *
 * routes /shop
 ******************************/
const express = require('express'),
    router = express.Router()

/*
 *  Middleware
 *************/
const auth = require('../middleware/auth')

/*
 *  Import Controllers Articles
 *******************************/
const createPayment = require('./controllers/stripe/createPayment')

// Payment Article
router.post('/checkout/:id', auth, createPayment)

module.exports = router
/*
 *
 * routes /admin
 ******************************/
const express = require('express')
    , router = express.Router()
    , path = require('path')

/*
 * Middleware
 ************/
const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *  Import Page Admin
 **********************/

const adminPage = require('./controllers/pages/adminPage')
      
// Page Admin
router.get('/admin', adminPage)


// Export de router
module.exports = router
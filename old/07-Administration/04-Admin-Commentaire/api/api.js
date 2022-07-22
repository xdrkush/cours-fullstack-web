/*
 *
 * routes /api
 ******************************/
const express = require('express')
    , app = express()
    , router = express.Router()
    , Model = require('../db/Model')

/*
 *  Middleware
 *************/
const auth = require('../middleware/auth')
    , isVerified = require('../middleware/isVerified')
    , isAdmin    = require('../middleware/isAdmin')

/*
 *
 *  Import Controllers
 **********************/

module.exports = router
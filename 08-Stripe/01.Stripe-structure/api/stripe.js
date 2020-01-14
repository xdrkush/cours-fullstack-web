/*
 *
 * routes /shop
 ******************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Article = require('../db/Article')

/*
 *  Middleware
 *************/

const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *
 *  Import Controllers Articles
 * 
 *****************************/

const createArticle = require('./controllers/stripe/createArticle'),
      editArticle = require('./controllers/stripe/editArticle'),
      deleteArticle = require('./controllers/stripe/deleteArticle')

// Create Article
router.post('/createArticle', auth, createArticle)
// Update Article
router.post('/editArticle/:id', auth, editArticle)
// Delete Article
router.get('/del/:id', auth, deleteArticle)

module.exports = router
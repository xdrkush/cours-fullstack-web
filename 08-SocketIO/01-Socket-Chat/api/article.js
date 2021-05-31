/*
 *
 * routes /article
 ******************************/
const express = require('express'),
    router = express.Router()

/*
 * Middleware
 ************/
const auth = require('../middleware/auth'),
    isVerified = require('../middleware/isVerified'),
    isAdmin = require('../middleware/isAdmin')

/*
 *  Import Controllers Commentary
 ********************************/
const createCommentary = require('./controllers/article/createCommentary'),
    deleteCommentary = require('./controllers/article/deleteCommentary')

/*
 *  Import Page Admin
 **********************/
const articleID = require('./controllers/pages/articleID')

// Page ArticleID
router.get('/:id', articleID)

/*
 *  Controller Commentary
 *************************/
router.post('/createCommentary', isAdmin, createCommentary)
router.get('/delCommentary/:id', isAdmin, deleteCommentary)

// Export de router
module.exports = router
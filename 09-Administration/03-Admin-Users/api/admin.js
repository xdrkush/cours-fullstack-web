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
const auth = require('../middleware/auth')
    , isVerified = require('../middleware/isVerified')
    , isAdmin = require('../middleware/isAdmin')

/*
 *  Import Controllers Model
 ***************************/
const createModel = require('./controllers/model/createModel')
    , editModel = require('./controllers/model/editModel')
    , deleteModel = require('./controllers/model/deleteModel')

/*
 *  Import Controllers Article
 ******************************/
const createArticle = require('./controllers/stripe/createArticle')
    , editArticle = require('./controllers/stripe/editArticle')
    , deleteArticle = require('./controllers/stripe/deleteArticle')
    , deletePayment = require('./controllers/stripe/deletePayment')

/*
 *  Import Controllers User
 ***************************/
const deleteUser = require('./controllers/admin/deleteUser')
    , editUser = require('./controllers/admin/editUser')

/*
 *  Import Page Admin
 **********************/
const adminPage = require('./controllers/pages/adminPage')

/*
 *  Controller Page Admin
 *************************/
router.get('/admin', isAdmin, adminPage)

/*
 *  Controller Model
 ********************/
router.post('/createModel', isAdmin, createModel)
router.post('/editModel/:id', isAdmin, editModel)
router.get('/delModel/:id', isAdmin, deleteModel)

/*
 *  Controller Article
 **********************/
router.post('/createArticle', isAdmin, createArticle)
router.post('/editArticle/:id', isAdmin, editArticle)
router.get('/delArticle/:id', isAdmin, deleteArticle)
router.get('/delBuy/:id', isAdmin, deletePayment)

/*
 *  Controller User
 *******************/
router.get('/delUser/:id', auth, deleteUser)
router.post('/editUser/:id', isAdmin, editUser)

// Export de router
module.exports = router
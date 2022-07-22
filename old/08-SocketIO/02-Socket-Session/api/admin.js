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
const createArticle = require('./controllers/article/createArticle')
    , editArticle = require('./controllers/article/editArticle')
    , deleteArticle = require('./controllers/article/deleteArticle')
    , deletePayment = require('./controllers/stripe/deletePayment')

/*
 *  Import Controllers User
 ***************************/
const deleteUser = require('./controllers/admin/deleteUser')
    , editUser = require('./controllers/admin/editUser')

/*
 *  Import Controllers Website
 ***************************/
const createHeader = require('./controllers/website/createHeader')
    , editHeader = require('./controllers/website/editHeader')
    , editSection = require('./controllers/website/editSection')

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

/*
 *  Controller Website
 ********************/
router.post('/createHeader', isAdmin, createHeader)
router.post('/editHeader/:id', isAdmin, editHeader)
router.post('/editSection/:id',isAdmin, editSection)

module.exports = router
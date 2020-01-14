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

const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *
 *  Import Controllers Model
 * 
 *****************************/

const createModel = require('./controllers/model/createModel'),
      editModel = require('./controllers/model/editModel'),
      deleteModel = require('./controllers/model/deleteModel')

// Create Model
router.post('/createModel', auth, createModel)
// Update Model
router.post('/editModel/:id', auth, editModel)
// Delete Model
router.get('/del/:id', auth, deleteModel)

module.exports = router
const express = require('express')
    , app = express()
    , router = express.Router()
    , Model = require('../db/Model')

/*
 *
 *  Import Controllers Model
 * 
 */

const createModel = require('./controllers/model/createModel'),
      editModel = require('./controllers/model/editModel'),
      deleteModel = require('./controllers/model/deleteModel')

// Create Model
router.post('/createModel', createModel)
// Update Model
router.post('/editModel/:id', editModel)
// Delete Model
router.get('/del/:id', deleteModel)

module.exports = router
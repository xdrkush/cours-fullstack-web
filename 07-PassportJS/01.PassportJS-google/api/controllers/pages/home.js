/*
 *
 * Controller /
 *************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Model = require('../../../db/Model')
    , User = require('../../../db/User')

// Page Index racine 
router.get('/', async (req, res) => {
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const sess = req.session
    res.render('index', {
        dbModel, dbUser, sess
    })
})

module.exports = router

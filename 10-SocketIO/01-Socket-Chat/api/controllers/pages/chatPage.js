/*
 *
 * Controller /chat
 ******************/

const express = require('express')
    , app = require('express')()
    , router = express.Router()
    , path = require('path')
    , Model = require('../../../db/Model')
    , User = require('../../../db/User')
    , Website = require('../../../db/Website')

// Page Index racine 
router.get('/chat', async (req, res) => {
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const sess = req.session

    res.render('chat', {
        dbModel, dbUser, sess
    })
})

module.exports = router
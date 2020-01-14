/*
 *
 * Pages /admin
 *************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Article = require('../../../db/Article')
    , User = require('../../../db/User')
    , Buy = require('../../../db/Buy')
    , Model = require('../../../db/Model')

// Page Index racine 
router.get('/admin', async (req, res) => {
    const dbArticle = await Article.find({})
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const dbBuy = await Buy.find({})
    const sess = req.session
    
    res.render('admin', {
        layout: 'admin',
        dbArticle, dbUser, dbBuy, dbModel, sess
    })
})

module.exports = router

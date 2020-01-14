/*
 *
 * Pages /eshop
 *************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Article = require('../../../db/Article')
    , User = require('../../../db/User')
    , Buy = require('../../../db/Buy')

// Page Index racine 
router.get('/eshop', async (req, res) => {
    const dbArticle = await Article.find({})
    const dbUser = await User.find({})
    const dbBuy = await Buy.find({})
    const sess = req.session
    res.render('eshop', {
        dbArticle, dbUser, dbBuy, sess
    })
})

module.exports = router

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
    , Mp = require('../../../db/Mp')

/*
 *
 * Middleware
 *************/
const isAdmin = require('../../../middleware/isAdmin')

// Page Index racine 
router.get('/admin', isAdmin, async (req, res) => {
    const dbArticle = await Article.find({})
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const dbBuy = await Buy.find({})
    const dbMpAdmin = await Mp.find({ admin: true })
    const sess = req.session

    console.log(dbMpAdmin);
    
    res.render('admin', {
        layout: 'admin',
        dbArticle, dbUser, dbBuy, dbModel, dbMpAdmin, sess
    })
})

module.exports = router

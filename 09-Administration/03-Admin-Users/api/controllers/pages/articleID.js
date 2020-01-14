/*
 *
 * Pages /article/:id
 **************************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Article = require('../../../db/Article')
    , User = require('../../../db/User')

// Page Index racine 
router.get('/article/:id', async (req, res) => {
    const dbArticle = await Article.findById({_id: req.params.id})
    const dbUser = await User.find({})
    const sess = req.session
    // console.log(dbArticle);
    res.render('articleID', {
        dbArticle, dbUser, sess
    })
})

module.exports = router
/*
 *
 * Controller /api/createModel
 *****************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Article = require('../../../db/Article')

// Create Model
router.post('/createArticle', async (req, res, next) => {
    console.log(req.body);
    
    Article.create(
        {
            ...req.body
        },
        res.redirect('/eshop')
    )
})

module.exports = router
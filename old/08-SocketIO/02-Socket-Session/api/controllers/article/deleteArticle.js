/*
 *
 * Controller /api/del/:id
 *************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Article = require('../../../db/Article')

// Delete Model
router.get('/delArticle/:id', (req, res) => {
    Article.findByIdAndRemove(
        req.params.id,
        { useFindAndModify: false },
        function (err) {
            if (!err) {
                console.log('del ok')
                res.redirect('/eshop')
            } else {
                res.redirect('/')
            }
        })
})

module.exports = router
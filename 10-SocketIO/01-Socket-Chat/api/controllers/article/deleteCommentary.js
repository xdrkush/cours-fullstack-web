/*
 *
 * Controller /api/del/:id
 *************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Commentary = require('../../../db/Commentary')

// Delete Model
router.get('/delCommentary/:id', (req, res) => {
    Commentary.findByIdAndRemove(
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
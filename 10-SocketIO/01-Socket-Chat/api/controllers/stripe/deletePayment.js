/*
 *
 * Controller /api/del/:id
 *************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Buy = require('../../../db/Buy')

// Delete Model
router.get('/delBuy/:id', (req, res) => {
    Buy.findByIdAndRemove(
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
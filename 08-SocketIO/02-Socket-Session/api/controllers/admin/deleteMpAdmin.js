/*
 *
 * Controller /api/del/:id
 *************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Mp = require('../../../db/Mp')

// Delete Model
router.get('/delMp/:id', (req, res) => {
    Mp.findByIdAndRemove(
        req.params.id,
        { useFindAndModify: false },
        function (err) {
            if (!err) {
                console.log('del ok')
                res.redirect('/myaccount')
            } else {
                res.redirect('/')
            }
        })
})

module.exports = router
const express = require('express')
    , app = express()
    , router = express.Router()
    , Model = require('../../../db/Model')

// Delete Model
router.get('/del/:id', (req, res) => {
    Model.findByIdAndRemove(
        req.params.id,
        { useFindAndModify: false },
        function (err) {
            if (!err) {
                console.log('del ok')
            } else {
                res.redirect('/')
            }
        })
    res.redirect('/')
})

module.exports = router
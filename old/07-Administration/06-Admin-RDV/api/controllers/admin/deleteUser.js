/*
 *
 * Controller /auth/delUser/:id
 ******************************/

const express = require('express')
    , path = require('path')
    , bcrypt = require('bcrypt')
    , router = express.Router()
    , User = require('../../../db/User')

// Delete Model
router.get('/delUser/:id', (req, res) => {
    User.findByIdAndRemove(
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
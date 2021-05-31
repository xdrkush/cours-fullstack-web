/*
 *
 * Controller /login
 *******************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Model = require('../../../db/Model')
    , User = require('../../../db/User')

// Page login
router.get('/login', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('login', {
        dbUser, sess
    })
})

module.exports = router
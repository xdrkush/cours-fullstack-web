/*
 *
 * Controller /verified
 **********************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Model = require('../../../db/Model')
    , User = require('../../../db/User')

// Page isVerified
router.get('/verified', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    res.render('isVerified', {
        dbUser, sess
    })
})

module.exports = router
const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Model = require('../../../db/Model')
    , User = require('../../../db/User')

// Page Success
router.get('/success', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    if (req.session.status !== 'user') {
        res.render('login', {
            dbUser, sess
        })
    } else {
        res.render('success', {
            dbUser, sess
        })
    }
})

module.exports = router
/*
 *
 * Controller /auth/createUser
 *****************************/

const express = require('express')
    , path = require('path')
    , bcrypt = require('bcrypt')
    , router = express.Router()
    , User = require('../../../db/User')

// Création de compte
router.post('/createUser', async (req, res, next) => {
    const mailUsed = await User.find({ email: req.body.email })

    if (mailUsed) {
        if (req.body.password !== req.body.passwordConfirm) {

            console.log('error password')
            res.render('login')
        } else {

            console.log('password OK')
            User.create({
                ...req.body,
            }, (error, user) => {
                if (error) {
                    res.redirect('/')
                } else {
                    console.log('Success Create')
                    res.redirect('/')
                }
            })
        }

    } else {
        res.send('Mail deja utiliser')
    }
})

module.exports = router
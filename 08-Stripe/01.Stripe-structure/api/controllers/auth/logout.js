/*
 *
 * Controller /auth/logout
 *************************/

const express = require('express')
    , path = require('path')
    , router = express.Router()

// Se déconnecter
router.get('/logout', (req, res, next) => {
    req.session.destroy(() => {
        res.clearCookie("Coucou");
        res.redirect('/')
    })
})

module.exports = router
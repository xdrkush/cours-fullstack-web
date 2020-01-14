/*
 *
 * Controller /myaccount
 ***********************/

const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Model = require('../../../db/Model')
    , User = require('../../../db/User')
    , Mp = require('../../../db/Mp')

// Page Mon Compte
router.get('/myaccount', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    const dbMpRecu = await Mp.find({destId: sess.userId})
        , dbMpRecuReverse = dbMpRecu.reverse()
        , dbMpEnvoyer = await Mp.find({authorId: sess.userId})
        , dbMpEnvoyerReverse = dbMpEnvoyer.reverse()
    // console.log(req.session)
    res.render('myaccount', {
        dbUser, dbMpRecuReverse, dbMpEnvoyerReverse, sess
    })
})

module.exports = router
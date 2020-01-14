const express = require('express')
    , router = express.Router()
    , path = require('path')
    , Model = require('../db/Model')
    , User = require('../db/User')

// Page Index racine 
router.get('/', async (req, res) => {
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('index', {
        dbModel, dbUser, sess
    })
})

// Page create
router.get('/create', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('create', {
        dbUser, sess
    })
})

// Page login
router.get('/login', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    console.log(req.session)
    res.render('login', {
        dbUser, sess
    })
})

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

// Page login
router.get('/myaccount', async (req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    res.render('myaccount', {
        dbUser, sess
    })
})

module.exports = router

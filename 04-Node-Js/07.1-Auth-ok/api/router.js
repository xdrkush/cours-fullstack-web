const express = require('express')
    , router = express.Router()
    , Model = require('../db/Model')
    // L'on récupère seulement la variable pour nos data User
    // Même principe que pour la db Model
    , User = require('../db/User')

// Page Index racine 
router.get('/', async (req, res, next) => {
    // Déclaration de dbModel grace à une requete asynchrone
    // dbModel = la function de récupération de tous les objets dans Model
    const dbModel = await Model.find({})
    // Déclaration de dbUser gràce à une requete asynchrone
    // dbUser = la function de récupération de tous les objets dans User
    const dbUser = await User.find({})
    // sur la page index
    res.render('index', {
        // on rend aussi dbModel et dbUser sur la page
        dbModel, dbUser
    })
})

// Page create
router.get('/create', async (req, res, next) => {
    const dbUser = await User.find({})
    res.render('create', {
        dbUser
    })
})

// Page login
router.get('/login', async (req, res, next) => {
    const dbUser = await User.find({})
    res.render('login', {
        dbUser
    })
})

// Page Success
router.get('/success', async (req, res, next) => {
    const dbUser = await User.find({})
    res.render('success', {
        dbUser
    })
})

// Export de router
module.exports = router
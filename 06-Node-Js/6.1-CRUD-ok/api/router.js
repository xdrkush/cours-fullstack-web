const express = require('express')
    , router = express.Router()
    // On défini la variable Model que l'on récupère dans le fichier ../db/Model
    , Model = require('../db/Model')

// Page Index racine 
router.get('/', async (req, res, next) => {
    // On récupère la base de donnée du Model (Model)
    // Que l'on défini en tant que variable dbModel
    const dbModel = await Model.find({})
    // On renvoie la page index à la racine
    res.render('index', {
        // On envoit les data de dbModel sur la page index
        dbModel
    })
  })

// On export router
module.exports = router
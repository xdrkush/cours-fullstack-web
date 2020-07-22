const express = require('express')
    , router = express.Router()
    // Import du Model (Model)
    , Model = require('../db/Model')

// Page Index racine 
router.get('/', async (req, res, next) => {
    // Récupération de tout les Objets Model gràce a mongoose
    // find({}) = exécute la fonction de récupération de tous les objets
    const dbModel = await Model.find({})
    // on renvoit la page avec index
    res.render('index', {
        // On renvoi les Objets dbModel dans la page index 
        dbModel
    })
  })

//   Export de router
module.exports = router
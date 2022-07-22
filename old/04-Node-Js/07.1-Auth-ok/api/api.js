const express = require('express')
    , router = express.Router()
    // Import de Model
    , Model = require('../db/Model')

// Create Model
router.post('/createModel', async (req, res) => {
    // Récuperation de la liste complète de Model
    const dbModel = await Model.find({})
    // On demande à notre Model de créé un nouvelle Obj Model
    Model.create(
        {
            // On récupère les variables du formulaire
            // il faut biensur qu'il soit en corélation avec le Model
            name: req.body.name,
            email: req.body.email
            // ...req.body
        },
        // Une fois que la function create a été éffectuer il nous redirige
        // et log notre formulaire envoyer
        // console.log(req.body),
        res.redirect('/')
    )
})

// Update Model
router.post('/editModel/:id', async (req, res, err) => {
    // On définie la variable dbModel avec un condition qui dit
    // Que l'on veux selection l'Obj Model qui est le même _id
    // Que l'ID envoyer par l'URL
    const dbModel = await Model.findById(req.params.id)
    // Définition de l' _id a selection avec l' _id envoyer
    let query = { _id: req.params.id }
    // Log de nos infos
    console.log('test Édition / ' + req.params.id + '\n' + req.body.name + " / " + req.body.email)
    // On demande la function findOneAndUpdate de MongoDB
    Model.findOneAndUpdate(
        // On utilise notre Variable query pour modifier notre Obj grace à _id
        query,
        {
            // Sélection de nos variable a modifier avec la requète de notre formulaire
            name: req.body.name,
            email: req.body.email
        },
        // Config récentes de MongoDB
        { useFindAndModify: false },
        // Notre Fonction de gestion de l'err et Post du nouvel Obj
        function (err, post) {
            // Si il y une err il fait ça
            if (err) {
                // Log Err
                console.log('Err: ' + err)
                // Redirection
                res.redirect('/')
            // Sinon si il n'y a pas d' erreur tu fais ça 
            } else {
                // création de l'Obj avec les nouvelle data
                Model.findOneAndUpdate({
                    // Récupération du req.body
                    ...req.body
                },
                // Log
                console.log('Modification OK'),
                // Redirection
                res.redirect('/')
                )
            }
        }
    )
})

// Delete Model
router.get('/del/:id', (req, res) => {
    // On demande la function findByIdAndRemove de MongoDB
    // Que l'on applique sur notre variable de la récupération de notre Model
    Model.findByIdAndRemove(
        // Récupération l'ID de notre URL
        req.params.id,
        // Config récentes de MongoDB
        { useFindAndModify: false },
        // Function de la gestion d'err
        function (err) {
            // Si il n'y a pas d'err il fait ça
            if (err) {
                // Redirection à la racine
                res.redirect('/')
            } else {
                // Log OK
                console.log('del ok')
                // Redirection à la racine
                res.redirect('/')
            }
        })
})

// On export router
module.exports = router
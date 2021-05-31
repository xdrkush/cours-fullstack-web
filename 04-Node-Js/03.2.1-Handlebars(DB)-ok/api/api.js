const express = require('express')
    , router = express.Router()
    // Appel du Model (Model)
    , Model = require('../db/Model')

// Create Model
router.post('/createModel', async (req, res, next) => {
    // const dbModel = await Model.find({})
    // console.log(req.body + ' test req.body')
    Model.create(
        {
            // Récupérétion du req.body
            // req.body.name
            // req.body.email
            // req.body.password
            ...req.body
        },
        // Redirection à la racine (home)
        res.redirect('/')
    )
})

// Update Model
router.post('/editModel/:id', async (req, res) => {
    // Récupération de la base de données du Model (Model)
    // En lui rentrant la function de sélectionner un ID en particulier
    // qui est l'id du bouton de la boucle de la liste 'Liste Model'
    // Qui est placer sur la page home (/)
    const dbModel = await Model.findById(req.params.id)
    // Query est l'objet pour comprez l'ID de l'url
    // Avec l'ID de la demande à la base de donées
    let query = { _id: req.params.id }
    // Log de du req.body selectionner et concatainer
    console.log('test Édition / ' + req.params.id + '\n' + req.body.name + " / " + req.body.email)
    // Ouverture de la requête de modification du Model Sélection (Bouton -> Home -> Objet.model)
    Model.findOneAndUpdate(
        // Selection de l'ID Dans la requètes
        query,
        {
            // Selection des input à remplacer
            // oui il y a plusieurs manières de faire
            // ...req.body récupère tout les input
            // ce qui en soit peux créé des problèmes de sécurité
            // mieux vaut bien définir les variables a importer
            name: req.body.name,
            email: req.body.email
        },
        // Config récente de MongoDB
        { useFindAndModify: false },
        // Ouverture de la function
        function (error, post) {
            if (error) {
                // Log en cas d'erreur
                console.log(error)
                // function (mongoose) pour create l'élément sélectioner
                // Il y a une couille dans le code faut qur je m'en occupe
                Model.create({
                    // Re selection du req.body (Formulaire)
                    ...req.body
                },
                // Condition Si il y a un err fais moi ça
                (error, post) => {
                    // Log
                    console.log('err 1')
                    // Redirection
                    res.redirect('/')
                })
            // Sinon si il y a une err fais moi ça
            } else {
                // Log
                console.log('err 2')
                // Redirection
                res.redirect('/')
            }
        }
    )
})

// Delete Model
router.get('/del/:id', (req, res) => {
    // Ouvertur de la function de suppression de mongoDB
    Model.findByIdAndRemove(
        // Selection de l'ID de l'URL
        req.params.id,
        // Config Mongo recente
        { useFindAndModify: false },
        // Function d'err
        function (err) {
            // Si il n'y a pas d'err ça fais ça
            if (!err) {
                // Log OK
                console.log('del ok')
            // Sinon si il y a une err tu fais ça
            } else {
                // Redirection home ('/')
                res.redirect('/')
            }
        })
    // Si tous c'est bien passer tu me redirige home ('/)
    res.redirect('/')
  })

// Export de la variable 'router'
module.exports = router
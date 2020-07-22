const express = require('express')
    // Import de bcrypt
    , bcrypt = require('bcrypt')
    , router = express.Router()
    // Import de notre Model (User)
    , User = require('../db/User')

// Création de compte
router.post('/createUser', async (req, res, err) => {
    const dbUser = await User.find({})
    // Lors de la creation du compte on demande un petite function de base
    // Elle nous permet de comparé les 2 mot de passe afin de voir si une erreur a été effectuer par l'utilisateur
    if (req.body.password !== req.body.passwordConfirm) {
        console.log('error password')
        res.render('login')
    } else {
        // ON log si la function est OK
        console.log('password OK')
        // On demande la function de Mongo pour créé notre utilisateur
        User.create({
            // On récupère notre formulaire
            ...req.body,
        },
        // Au cas ou une err survient en force
        (err, user) => {
            // Si il y a une err
            if (err) {
                // Redirection pour recommencer
                res.redirect('/create')
            // Sinon pas d'err alors tu créé et tu redirige
            } else {
                // Log
                console.log('Success Create')
                // Redirection
                res.redirect('/')
            }
        })
    }
})

// Validation du login ( Conexion )
router.post('/authentification', async (req, res, next) => {
    // On défini la variable userAuth qui execute une fonction de MongoDB
    // Qui demande de recherché parmis le Model (User) une adresse mail
    // Qui serais correspondante avec le req.body.email
    // qui est notre formulaire d'authentification qui est sur la page /login
    let userAuth = await User.findOne({ email: req.body.email });
    // Function primaire qui demande
    // Si userAuth ne correspond à aucun email dans la DB
    if (!userAuth) {
        // Log err
        console.log("pas ds la db");
        // Redirection sur /login
        res.redirect('/login')
    // Sinon si userAuth est bien un mail qui éxiste dans la DB alors tu fais ça
    } else {
        // On défini que l'on va récupéré un Objet contenant email & password depuis req.body
        const { email, password } = req.body
        // On execute une fonction de MongoDB qui nous sert à allez récupéré l'objet complet
        // Qui correspond au mail de userAuth -> req.body.email
        User.findOne({ email }, (error, User) => {
            // Si l'User ne correspond pas a un email concerné
            // Pour la sécurité c'est toujour mieux de géré les err avant la function réelle ;)
            if (!User) {
                // On Log 'Err'
                console.log('Err')
                // Redirection vers /create
                res.redirect('/create')
            // Sinon si notre req.body.email correspond avec un email éxistant
            // Alors tu me fais ça
            } else {
                // L'on récupère le req.body.password
                // On le passe dans la moulinette de notre module Bcrypt
                // ce qu'il va faire est simple en gros :
                // Il va hasher le req.body.password et il va comparer le hash avec celui qui est dans la DB
                // Si les deux sont identique alors le password est OK
                // On appelle cette function same on ajoute la function err qui va nous servir en cas d'err
                // et on ouvre la function afin de réaliser notre authentification
                bcrypt.compare(password, User.password, (error, same) => {
                    // Si le hash du req.body.password ne correspond pas avec le hash du password
                    // Correspondant avec l'email poster depuis req.body.email
                    // et bien tu me fais ça
                    if (!same) {
                        // Si notre password est en clair (pas hasher par bcrypt)
                        // Et qu'il ne correspond pas avec un password non hasher dans la DB
                        // Alors tu fais ça
                        if (!req.body.password === User.password) {
                            // Log password err
                            console.log('Mot de passe incorrect')
                            // Redirection /login
                            res.redirect('/login')
                        // Sinon si le password non hasher correspond avec un User ayant un password non hasher dans la db
                        // Alors tu fais ça
                        } else {
                            // Log OK
                            console.log('OK')
                            // Redirection vers success
                            res.redirect('/success')
                        }
                    // Sinon si le hash du password correspond avec le hash dans la db alors fait ça
                    } else {
                        // Log Success Authentification OK
                        console.log('Success Authentification OK')
                        // Redirection sur /success
                        res.redirect('/success')
                    }
                })
            }
        })
    }
})

// Delete User
router.get('/del/:id', (req, res) => {
    // Récupération de notre modèle (User) et execute la function de suppression
    User.findByIdAndRemove(
        // Récupération de l'ID de URL
        req.params.id,
        // Config Récente de MongoDB
        { useFindAndModify: false },
        // Gestion de l'erreur et supppression final
        function (err, del) {
            // Si il y a une err tu fais ça
            if (err) {
                res.redirect('/')
            // Sinon si il ya pas d'erreur tu fais ça
            } else {
                console.log('del ok')
                res.redirect('/')
            }
        })
})

// Export de router
module.exports = router
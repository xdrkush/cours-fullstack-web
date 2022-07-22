/*
 *
 * Controller /auth/authentification
 ************************************/

const express = require('express')
    , path = require('path')
    , bcrypt = require('bcrypt')
    , router = express.Router()
    , User = require('../../../db/User')

// Validation du login ( Conexion )
router.post('/authentification', async (req, res, next) => {
    let userAuth = await User.findOne({ email: req.body.email })
    if (!userAuth) {
        console.log("pas ds la db");
        res.redirect('/login');
    } else {
        const { email, password } = req.body
            , dbUser = await User.find({})
            // L'on déclare la récupération de notre req.session pour pouvoir lui attribuer notre function
            // Par la suite
            , sess = req.session
            
        User.findOne({ email }, (error, User) => {
            // On définit quelle data ce doivent de correspondre avec lesquel
            // c'est ici que l'on pourra définir l'objet de la session
            // sess.name / sess.name / sess.status / sess.isVerified ...
            sess.email      = User.email
            sess.status     = User.status
            sess.pseudo     = User.pseudo
            sess.isVerified = User.isVerified
            sess.imgUser    = User.imgUser
            sess.userId     = User._id
            sess.isAdmin    = User.isAdmin
            sess.isModo     = User.isModo

            if (User) {
                if (sess.status === 'user') {
                    bcrypt.compare(password, User.password, (error, same) => {
                        if (same) {
                            // on défini que notre _id correspondra avec notre userId de notre session
                            req.session.userId = User._id
                            console.log('OK 1')
                            // Une fois le check effectuer on lui demande de renvoyer les data de notre session 
                            // res.render('success', {dbUser, sess})
                            res.redirect('/success')
                        } else {
                            if (req.body.password === User.password) {
                                console.log('OK 2')
                                res.redirect('/success')
                            } else {
                                console.log('Mot de passe incorrect')
                                res.redirect('/login')
                            }
                        }
                    })
                }
            }
        })
    }
})

module.exports = router
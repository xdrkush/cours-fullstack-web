const express = require('express')
    , path = require('path')
    , bcrypt = require('bcrypt')
    , router = express.Router()
    , User = require('../db/User')

// Création de compte
router.post('/createUser', async (req, res, next) => {
    if (req.body.password === req.body.passwordConfirm) {
        console.log('password OK')
        User.create({
            ...req.body,
        }, (error, user) => {
            if (error) {
                res.render('/')
            } else {
                console.log('Success Create')
                res.redirect('/')
            }
        })
    } else {
        console.log('error password')
        res.render('login')
    }
})

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
        console.log(sess)
            
        User.findOne({ email }, (error, User) => {
            // On définit quelle data ce doivent de correspondre avec lesquel
            // c'est ici que l'on pourra définir l'objet de la session
            // sess.name / sess.name / sess.status / sess.isVerified ...
            sess.email = User.email
            sess.status = User.status
            sess.pseudo = User.pseudo
            if (User) {
                if (sess.status === 'user') {
                    bcrypt.compare(password, User.password, (error, same) => {
                        if (same) {
                            // on défini que notre _id correspondra avec notre userId de notre session
                            req.session.userId = User._id
                            console.log('OK 1')
                            // Une fois le check effectuer on lui demande de renvoyer les data de notre session 
                            res.render('success', {dbUser, sess})
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

// Delete Model
router.get('/del/:id', (req, res) => {
    User.findByIdAndRemove(
        req.params.id,
        { useFindAndModify: false },
        function (err) {
            if (!err) {
                console.log('del ok')
            } else {
                res.redirect('/')
            }
        })
    res.redirect('/')
})

// Se déconnecter
router.get('/logout', (req, res, next) => {
    req.session.destroy(() => {
        res.clearCookie("Coucou");
        res.redirect('/')
    })
})

// Export de router
module.exports = router
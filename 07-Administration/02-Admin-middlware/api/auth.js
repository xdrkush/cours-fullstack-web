/*
 *
 * routes /auth
 ******************************/

const express = require('express')
    , router = express.Router()
    , path = require('path')

/*
 * Middleware
 ************/
 const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *  Import Controllers Auth
 ***************************/

const createUser = require('./controllers/auth/createUser'),
      authentification = require('./controllers/auth/authentification'),
      deleteUser = require('./controllers/auth/deleteUser'),
      lostPassword = require('./controllers/auth/lostPassword'),
      formMailNewPassword = require('./controllers/auth/formMailNewPassword'),
      logout = require('./controllers/auth/logout'),
      googleAuth = require('./controllers/auth/googleAuth')

/*
 *  Import Page Auth
 *********************/

const
      mailNewPassword = require('./controllers/pages/mailNewPassword')

// Création de compte
router.post('/createUser', createUser)

// Validation du login ( Conexion )
router.post('/authentification', authentification)

// Delete User
router.get('/del/:id', auth, deleteUser)

// Page Mot de passe Oublier
router.get('/lostPassword', lostPassword)

// Page du Formulaire modifier mot de passe depuis email mot de passe oublier
router.get('/mailNewPassword/:id', mailNewPassword)

// Formulaire modifier mot de passe depuis email mot de passe oublier
router.post('/formMailNewPassword', formMailNewPassword)

// Se déconnecter
router.get('/logout', logout)

// PassportJS Google+
router.use('/google', googleAuth)

// Export de router
module.exports = router
const express = require('express')
    , router = express.Router()
    , path = require('path')

// Middleware
const auth = require('../middleware/auth'),
      isVerified = require('../middleware/isVerified')

/*
 *
 *  Import Controllers Auth
 * 
 */

const createUser = require('./controllers/auth/createUser'),
      authentification = require('./controllers/auth/authentification'),
      deleteUser = require('./controllers/auth/deleteUser'),
      logout = require('./controllers/auth/logout')

// Création de compte
router.post('/createUser', createUser)

// Validation du login ( Conexion )
router.post('/authentification', authentification)

// Delete User
router.get('/del/:id', auth, isVerified, deleteUser)

// Se déconnecter
router.get('/logout', auth, logout)

// Export de router
module.exports = router
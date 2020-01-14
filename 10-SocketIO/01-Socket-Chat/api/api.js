/*
 *
 * routes /api
 ******************************/
const express = require('express')
    , app = express()
    , router = express.Router()
    , Mp = require('../db/Mp')

/*
 *  Middleware
 *************/
const auth = require('../middleware/auth')
    , isVerified = require('../middleware/isVerified')
    , isAdmin    = require('../middleware/isAdmin')

/*
 *
 *  Import Controllers Mp
 *************************/
const createMp = require('./controllers/user/createMp')
    , deleteMp = require('./controllers/user/deleteMp')
    , createMpAdmin = require('./controllers/user/createMpAdmin')

/*
 *
 *  Import Controllers Rdv
 *************************/
const createRdv = require('./controllers/user/createRdv')

/*
 *  Controller Mp
 ****************/
router.post('/createMp', auth, createMp)
router.get('/delMp/:id', auth, deleteMp)
router.post('/createMpAdmin', createMpAdmin)

/*
 *  Controller Rdv
 ****************/
router.post('/createRdv', auth, createRdv)



module.exports = router
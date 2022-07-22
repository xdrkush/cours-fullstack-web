const express = require('express')
    , app = express()
    , router = express.Router()
    , Model = require('../../../db/Model')

// Create Model
router.post('/createModel', async (req, res, next) => {
    Model.create(
        {
            ...req.body
        },
        res.redirect('/')
    )
})

module.exports = router
/*
 *
 * Controller /api/createWebsite
 *****************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Website = require('../../../db/Website')

// Create Website
router.post('/createHeader', async (req, res, next) => {
    Website.create(
        {
            ...req.body,
            header: {
                title: req.body.title,
                stitle: [req.body.stitle1, req.body.stitle2, req.body.stitle3]
            },
            section: {
                title: 'Ma super section',
                stitle: [req.body.stitle1, req.body.stitle2, req.body.stitle3]
            }
        },
        res.redirect('/admin')
    )
})

module.exports = router
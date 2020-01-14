/*
 *
 * Controller /api/createModel
 *****************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Mp = require('../../../db/Mp')
    , User = require('../../../db/User')

    // Format date 
    , dateFormat = require('dateformat')
    , now = new Date()
    , date = Date.now()

// Create Model
router.post('/createMpAdmin', async (req, res, next) => {
    const sess = req.session
    
    console.log(req.body);
    Mp.create(
        {
            ...req.body,
            author: sess.pseudo,
            authorId: sess.userId,
            dest: 'ADMIN',
            destId: req.body.destId,
            message: req.body.message,
            subject: req.body.subject,
            articleID: req.body.articleID,
            imgAuthor: sess.imgUser,
            isSuspend: false,
            isVerified: false,
            admin: true,
            createDate: (dateFormat(date, "dd.mm.yyyy à HH:MM:ss"))
        },
        res.redirect('/')
    )
})

module.exports = router

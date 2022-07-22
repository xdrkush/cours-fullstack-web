/*
 *
 * Controller /api/createModel
 *****************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Commentary = require('../../../db/Commentary')

    // Format date 
    , dateFormat = require('dateformat')
    , now = new Date()
    , date = Date.now()

// Create Model
router.post('/createCommentary', async (req, res, next) => {
    const sess = req.session
    
    console.log(req.body);
    Commentary.create(
        {
            ...req.body,
            author: sess.pseudo,
            authorId: sess.userId,
            message: req.body.message,
            articleID: req.body.articleID,
            imgAuthor: sess.imgUser,
            isSuspend: false,
            isVerified: false,
            createDate: (dateFormat(date, "dd.mm.yyyy à HH:MM:ss"))
        },
        res.redirect('back')
    )
})

module.exports = router

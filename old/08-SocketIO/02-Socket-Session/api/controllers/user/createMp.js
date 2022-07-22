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
router.post('/createMp', async (req, res, next) => {
    const sess = req.session
        , dest = await User.findById({_id: req.body.destId})
    
    console.log(dest);
    Mp.create(
        {
            ...req.body,
            author: sess.pseudo,
            authorId: sess.userId,
            dest: dest.pseudo,
            destId: req.body.destId,
            message: req.body.message,
            subject: req.body.subject,
            articleID: req.body.articleID,
            imgAuthor: sess.imgUser,
            imgDest: dest.imgUser,
            isSuspend: false,
            isVerified: false,
            createDate: (dateFormat(date, "dd.mm.yyyy à HH:MM:ss"))
        },
        res.redirect('back')
    )
})

module.exports = router

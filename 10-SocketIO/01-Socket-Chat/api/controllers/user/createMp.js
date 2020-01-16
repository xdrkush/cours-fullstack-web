/*
 *
 * Controller /api/createModel
 *****************************/

const Mp = require('../../../db/Mp'),
    User = require('../../../db/User')

// Format date 
, dateFormat = require('dateformat'), date = Date.now()

// Create Model

module.exports = async(req, res, next) => {
    const sess = req.session,
        dest = await User.findById({ _id: req.body.destId })

    console.log(dest);
    Mp.create({
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
}
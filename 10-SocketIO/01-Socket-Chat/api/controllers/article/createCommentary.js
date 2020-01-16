/*
 *
 * Controller /api/createModel
 *****************************/

const Commentary = require('../../../db/Commentary')

// Format date 
, dateFormat = require('dateformat'), date = Date.now()

// Create Model
module.exports = async(req, res, next) => {
    const sess = req.session

    Commentary.create({
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
}
/*
 *
 * Controller /api/createModel
 *****************************/

const Mp = require('../../../db/Mp'),
    User = require('../../../db/User'),
    Rdv = require('../../../db/Rdv')

// Format date 
, dateFormat = require('dateformat'), now = new Date(), date = Date.now()

// Create Model
module.exports = async(req, res, next) => {
    const sess = req.session,
        dest = await User.findById({ _id: req.body.destId })
    Rdv.create({
            ...req.body,
            author: sess.pseudo,
            authorId: sess.userId,
            dest: dest.pseudo,
            destId: req.body.destId,
            message: req.body.message,
            dateRdv: req.body.dateRdv,
            hourRdv: req.body.hourRdv,
            subject: req.body.subject,
            imgAuthor: sess.imgUser,
            imgDest: dest.imgUser,
            isSuspend: false,
            isVerified: false,
            createDate: (dateFormat(date, "dd.mm.yyyy à HH:MM:ss"))
        },
        res.redirect('back')
    )
}
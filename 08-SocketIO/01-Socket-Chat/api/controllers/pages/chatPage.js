/*
 *
 * Controller /chat
 ******************/

const Model = require('../../../db/Model'),
    User = require('../../../db/User'),
    Website = require('../../../db/Website')

// Page Index racine 
module.exports = async(req, res) => {
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const sess = req.session

    res.render('chat', {
        dbModel,
        dbUser,
        sess
    })
}
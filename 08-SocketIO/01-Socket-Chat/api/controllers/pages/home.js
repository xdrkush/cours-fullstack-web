/*
 *
 * Controller /
 *************/

const Model = require('../../../db/Model'),
    User = require('../../../db/User'),
    Website = require('../../../db/Website')

// Page Index racine 
module.exports = async(req, res) => {
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const sess = req.session
    const isAdmin = (req.session.isAdmin === true)
    const dbWebsite = await Website.find({})
    const header = dbWebsite[0].header
    const section = dbWebsite[0].section

    // console.log(header);


    res.render('index', {
        dbModel,
        dbUser,
        header,
        section,
        sess
    })

}
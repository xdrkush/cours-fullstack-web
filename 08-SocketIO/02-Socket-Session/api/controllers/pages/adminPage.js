/*
 *
 * Pages /admin
 *************/

const express = require('express'),
    router = express.Router(),
    path = require('path'),
    Article = require('../../../db/Article'),
    User = require('../../../db/User'),
    Buy = require('../../../db/Buy'),
    Model = require('../../../db/Model'),
    Mp = require('../../../db/Mp'),
    Rdv = require('../../../db/Rdv'),
    Website = require('../../../db/Website')

/*
 *
 * Middleware
 *************/
const isAdmin = require('../../../middleware/isAdmin')

// Page Index racine 
router.get('/admin', isAdmin, async(req, res) => {
    const dbArticle = await Article.find({})
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const dbBuy = await Buy.find({})
    const dbMpAdmin = await Mp.find({ admin: true })
    const dbRdvAdmin = await Rdv.find({})
    const dbWebsiteID = await Website.findById({ _id: '5e18fdc862a88a61d2e4d866' })
    const dbWebsite = await Website.find({})
    const header = dbWebsite[0].header
    const sTitle1 = dbWebsite[0].header.stitle[0]
    const sTitle2 = dbWebsite[0].header.stitle[1]
    const sTitle3 = dbWebsite[0].header.stitle[2]
    const section = dbWebsite[0].section
    const sTitleSection1 = dbWebsite[0].section.stitle[0]
    const sTitleSection2 = dbWebsite[0].section.stitle[1]
    const sTitleSection3 = dbWebsite[0].section.stitle[2]
    const sess = req.session

    console.log(dbWebsite);

    res.render('admin', {
        layout: 'admin',
        dbArticle,
        dbUser,
        dbBuy,
        dbModel,
        dbMpAdmin,
        dbWebsite,
        dbRdvAdmin,
        dbWebsiteID,
        header,
        sTitle1,
        sTitle2,
        sTitle3,
        section,
        sTitleSection1,
        sTitleSection2,
        sTitleSection3,
        sess
    })
})

module.exports = router
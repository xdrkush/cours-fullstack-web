/*
 *
 * Pages /admin
 *************/

const Article = require('../../../db/Article'),
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
module.exports = async(req, res) => {
    const dbArticle = await Article.find({})
    const dbModel = await Model.find({})
    const dbUser = await User.find({})
    const dbBuy = await Buy.find({})
    const dbMpAdmin = await Mp.find({ admin: true })
    const dbRdvAdmin = await Rdv.find({})
        // dbWebsiteIDLocal sera a changez suivant l'id de votre obj selection en tant que website
    const dbWebsiteIDLocal = await Website.findById({ _id: '5e1f3047d2361239edf733e6' })
        // dbWebsiteIDCloud A ne pas changez pour utilisez la base de donnée partagez 
    const dbWebsiteIDCloud = await Website.findById({ _id: '5e20bae285c4c7233b4b10ae' })
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

    if (dbWebsiteIDLocal === null) {
        const dbWebsiteID = dbWebsiteIDCloud
        console.log(dbWebsiteIDLocal);
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

    }
}
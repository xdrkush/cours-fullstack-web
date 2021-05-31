/*
 *
 * Controller /myaccount
 ***********************/

const User = require('../../../db/User'),
    Mp = require('../../../db/Mp')

// Page Mon Compte
module.exports = async(req, res) => {
    const dbUser = await User.find({})
    const sess = req.session
    const dbMpRecu = await Mp.find({ destId: sess.userId }),
        dbMpRecuReverse = dbMpRecu.reverse(),
        dbMpEnvoyer = await Mp.find({ authorId: sess.userId }),
        dbMpEnvoyerReverse = dbMpEnvoyer.reverse()
        // console.log(req.session)
    res.render('myaccount', {
        dbUser,
        dbMpRecuReverse,
        dbMpEnvoyerReverse,
        sess
    })
}
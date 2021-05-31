/*
 *
 * Controller /auth/lostPassword
 *******************************/

// Page de certification du compte
module.exports = (req, res) => {
    const sess = req.session
    console.log(req.session)
    res.render('lostPassword')
}
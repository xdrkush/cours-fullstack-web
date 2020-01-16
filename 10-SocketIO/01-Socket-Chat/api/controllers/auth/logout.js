/*
 *
 * Controller /auth/logout
 *************************/

// Se déconnecter
module.exports = (req, res, next) => {
    req.session.destroy(() => {
        res.clearCookie("Coucou");
        res.redirect('/')
    })
}
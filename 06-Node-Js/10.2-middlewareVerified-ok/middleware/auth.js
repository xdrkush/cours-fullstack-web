// Middleware Authentification
const User = require('../db/User')

module.exports = (req, res, next) => {
    // Connecte l'utilisateur dans la base de donné
    User.findById(req.session.userId, (error, user) => {
        console.log('middle');
        if (error || !user) {
            return res.redirect('/login')
        }
        next()
    })
}
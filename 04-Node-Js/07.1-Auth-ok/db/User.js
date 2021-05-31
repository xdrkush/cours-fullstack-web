// On impport Bcrypt afin qu'il puissent chiffrer nos mot de passe
// Ce n'est pas la meilleur façon de faire mais c'est pour faire comprendre le chiffrement ;)
const bcrypt = require('bcrypt')
    , mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        // Voici des variable avec certaine condition
        email: {
            // Notre variable sera de type String (chaine de caractère)
            type: String,
            // Il est obligatoire
            required: [true, "L'email est obligatoire"],
            // Et sera unique dans base de donnée (1 email = 1 user)
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Le mot de passe est obligatoire']
        },
        imgUser: {
            type: String,
            // Une condition par default
            // Ce sera l'image par défault
            default: "https://s2.qwant.com/thumbr/0x380/6/e/46f11d586d9cbdb2eb380182ce63468791ede023d2a2ac4fc38ac1e8443d0e/img_210318.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_210318.png&q=0&b=1&p=0&a=1"
        }
    }
)

// Voici la function de hashage par défault de notre password
// https://www.npmjs.com/package/bcrypt
UserSchema.pre('save', function (next) {
    // On défini on constante user qui est la creation de notre shema
    // Action du constructor lors de la création d'un user
    const user = this
    // On lance la function hash de bcrypt sur le user.password,
    //  qui aura une puissance de hashage de 10 (example)
    // Qui sera la function d'encryptation
    bcrypt.hash(user.password, 10, (error, encrypted) => {
        // user.password sera encrypté
        user.password = encrypted
        // Une fois la function terminé il retourne sur sa function demander
        // C'est a dire inscrir l'user dans la DB avec un password encrypté
        // Ou alors comparé les password avec celui inscrit par l'utilisateur lors de sa connexion
        next()
    })
})

// Et l'on fini par exporter notre shema pour qu'il soit utilisable sur toute notre application
module.exports = mongoose.model('User', UserSchema)
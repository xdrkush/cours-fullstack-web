const express = require('express'),
    app = express(),
    expressSession = require('express-session'),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io')(server),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    hbs = require('express-handlebars'),
    path = require('path'),
    port = 3000
    // Import de express-session
    // Pour pouvoir déclaré la session au moment du login dans 
    // ./api/auth.js

// Récupération du store de Mongo Connect
const MongoStore = require('connect-mongo')
    // déclaration de la variable de récupération du store
const mongoStore = MongoStore(expressSession)
const router = express.Router()
    // Import de nodemailer
const nodemailer = require('nodemailer')
    // Import config Passport
const passport = require('passport')
const passportSetup = require('./config/passport-setup')

// Déclaration de la variable des Routes
// ./api/router
const ROUTER = require('./api/router')

// Keys
const keys = require('./config/keys')

// Config MongoDB (Local)
const urlDB = keys.mongodb.DbLocal
    // const urlDB = require('./db/config.json').keyDbCloud

const session = expressSession({
        // Déclaration de la fonction du cookie
        secret: keys.session.secret,
        // Déclaration du nom de notre cookie
        name: keys.session.cookieName,
        keys: keys.session.keys,
        // path: '/',
        // proxy: true,
        // Déclaration de la sauvegarde de notre cookie
        saveUninitialized: true,
        autoSave: true,
        // es ce qu'il précharge notre cookietre cookie
        resave: true,
        // déclaration de l'utilisation de no
        store: new mongoStore({
            mongooseConnection: mongoose.connection
        }),
        // store: new SessionStore({ path: __dirname + '/tmp/sessions' })

    }),
    sharedsession = require("express-socket.io-session");

//  Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// PassportJS
app.use(passport.initialize())
app.use(passport.session())

// Express-Session
app.use(session)

// Config Mongoose
mongoose
    .connect(urlDB, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connecter a MongoDB Cloud ( Attention !!! )'))
    .catch(err => console.log(err))

// Config Handlebars (Avancé)
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}))
app.set('view engine', 'hbs')

// Import et utilisation de tous les fichiers et dossier depuis 'assets'
app.use('/assets', express.static('assets'));

// Déclaration de middleWare (session)
app.use('*', (req, res, next) => {
    if (res.locals.user = req.session.userId) {
        if (req.session.status === 'user') {
            if (req.session.isVerified === true) {
                // if (req.session.isModo === true) {
                if (req.session.isAdmin === true) {
                    res.locals.user = req.session.status
                    res.locals.isVerified = req.session.isVerified
                    res.locals.isAdmin = req.session.isAdmin
                    res.locals.isModo = req.session.isModo
                    console.log('4');
                    // console.log(req.session);
                }
                //   res.locals.user = req.session.status
                //   res.locals.isVerified = req.session.isVerified
                //   res.locals.isModo = req.session.isModo
                //   console.log('3');

                // }
                res.locals.isVerified = req.session.isVerified
                res.locals.user = req.session.status
                console.log('2');

            }
            res.locals.user = req.session.status
            console.log('1');

        }
    }
    console.log('0');

    // La function next permet qu'une fois la condition effectuer il reprenne son chemin
    next()
})

/*
 * Socket IO
 ******************/
const Users = {}

io.use(sharedsession(session));

io.on("connection", (socket) => {
    pseudo = socket.handshake.session.pseudo
    console.log(pseudo + ' est connecter')
        // console.log(sio.sockets.connected);

    // pseudo = socket.handshake.session.pseudo
    // sio.emit('new user', pseudo + ' est connecter')

    socket.on('new user', (pseudo) => {
        console.log(pseudo);
        io.emit('new user', pseudo + ' est connecter')
    })
    socket.on('chat message', (msg) => {
        pseudo = socket.handshake.session.pseudo
            // console.log('message reçu : ' + msg);
        io.emit('chat message', pseudo + ' : ' + ' ' + msg)
    });
});

// On demande à notre application d'utiliser notre variable Router
// à Partir de notre URL racine /
// Qui est en réaliter notre fichier ./api/router.js
app.use('/', ROUTER)

server.listen(port, function() {
    console.log("L'application tourne sur le port: " + port)
})
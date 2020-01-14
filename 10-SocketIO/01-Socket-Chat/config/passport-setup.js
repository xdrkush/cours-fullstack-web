const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../db/User')

const express = require('express')
    , path = require('path')
    , bcrypt = require('bcrypt')
    , router = express.Router()

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log('CallBack Passport Google+ ')
        console.log(profile);
        
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                console.log("L'utilisateur existe déja ! " + currentUser);
                done(null, currentUser)
            } else {
                new User({
                    pseudo: profile.displayName,
                    googleId: profile.id,
                    imgUser: profile._json.picture,
                    email: profile._json.email
                }).save().then((newUser) => {
                    console.log('Utilisateur GoogleID Créé ' + newUser);
                    done(null, newUser)
                })
            }
        })
    })
)
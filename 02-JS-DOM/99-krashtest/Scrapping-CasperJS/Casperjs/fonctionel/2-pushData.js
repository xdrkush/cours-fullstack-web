/*
 * 
 * Exercice Utiliser 'fs' & 'stringify'
 * 
 * Objectif :
 * 
 * Injecter des datas et créé un fichier JSON avec Node*
 * 
 *  Lancer le script : node pushData.js
 * 
 */

// Import de fs
// Création de la variable ObjPush
// Qui est un Objet au format JSON qui pourra etre pusher dans notre json
// Création de la variable pushDataJson qui est une function asynchrone
const
    fs = require('fs'),
    ObjPush = {
            'name': 'Le Royaliste',
            'date': '26 Aout 2019',
            'title': 'Le media pour tous',
            'test': 'test'
        },
    pushDataJson = function async () {
        // Déclaration de notre variable 'data' qui à pour fonction
        // l'objectif est de créé un objet avec des chaine de caractère (stringify)
        // On lui demande de créé un Tableau [] avec l'objet ObjPush, l'option null, et le 2 pour les indentation a la création du json
        let
            data = JSON.stringify([ObjPush], null, 2)

        // la function writeFile du module fs est demander d'executer
        // on choisit l'endroit ou stocker ce json, avec la function data, et err
        fs.writeFile('../Json/2-push.json', data, (err) => {
            // En cas d'err il nous les LOG
            // Quand les function sont très courte et sur la meme ligne on est pas obliger de mettre les {}
            if(err) console.log(err)
            // Log de success
            console.log('Fichier Json Créé')  
        })
    }

// Exectution de notre script
pushDataJson()

/*
 * 
 * Exercice Utiliser 'fs' & 'stringify'
 * 
 * Objectif :
 * 
 * Injecter des datas et créé un fichier JSON avec Node
 * 
 *  Lancer le script : node pushData.js
 * 
 */

// Déclaration de notre Objet a injecter ObjPush
// Import de notre module fs 
const
    ObjPush = {
            name: 'Vincent Lapierre',
            date: '26 Aout 2019',
            title: 'Le media pour tous'
        },
        fs = require('fs')

// Déclaration de nos data a injecter
// Grace a la fonction de stringify
let
    data = JSON.stringify([ObjPush], null, 2)

// Les JSON sont dans ../Json
fs.writeFileSync('../Json/3-push.json', data)

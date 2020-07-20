/* 
 *
 * Exercice 'fs'  & 'NodeJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas dans un fichier Json
 *
 */

// Déclaration des variables
// Import du module fs (filesytem) 
// Ce qui nous permet de rechercher d'autre fichier dans notre arborescence
// Import de Json
// Qui es notre fichier contenant nos data a récupérer

const
    fs = require('fs'),
    Json = fs.readFileSync('../Json/1-read.json')

// Création d'une variable qui est la récupération de nos data dans notre json
let
    data = JSON.parse(Json)

// Affichage de la valeur de clef name du premier objet du tableau data
console.log(data[0].name + ' / ' + data[0].title)

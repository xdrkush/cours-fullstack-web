/* 
 *
 * Exercice Scrapping avec 'CasperJS' & 'PhantomJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas sur un site pour pouvoir les exploitées
 * 
 * Lancer le script : casperjs articleObj.js
 *
 */


// Déclaration des variables
// Import de utils : https://www.npmjs.com/package/utils
// Import de casperJS : https://www.npmjs.com/package/casper

// fs nous permettra de parcourir notre arborescence pour allez chercher des fichiers, ...
const fs = require('fs')
var
  // config de casperjs  
  casper = require("casper").create({
    pageSettings: {
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0"
    }
  }),
  // Déclaration du lien ou casperjs va devoir allez scrapper
  url = 'https://lemediapourtous.fr/category/vincent-lapierre/'

// Script Dev
var
  // Ce script sera executer par casperjs à la fin du script pour nous confirmer que le script est arreter
  logFinish = function () {
    // Ici on retrouve le log et la fonction .exit qui mettrais un terme a notre script
    this.echo('Script Terminé !').exit()
  }
var
  // Ce script va nous permetre de récupéré le résultat par casperjs
  processPage = function () {
    // Ici arrayArticle est = à l'évalution de notre fonction getDataArticle (return arrayArticle)
    arrayArticle = this.evaluate(getDataArticle)
    // on demande a utils de nous loguer arrayLinks
    require('utils').dump(arrayArticle)
  }

// Ici notre function permettre de créé un .json avec les data récupéré
function pushDataJson() {
  const
    // On définit la structure de notre Json avec les data que nous avonc récupérer
    valueArrayArticles = JSON.stringify(arrayArticle, null, 2)

  // Ici on va écrire notre json contenant notre structure
  fs.write('../Json/6-articleObj.json', valueArrayArticles)
}

// Ici notre function va travailler sur les data récupérer et nous sortir un tableau contenant des objets
function getDataArticle() {

  // On définit le tableau qui va acceuillir nos data récupérer
  var arrayArticle = [],
    // Et on définit articles qui le noeud de ce que nous voulons récupéré
    articles = document.querySelectorAll("div.wrap-content article.type-post");

      // Cette boucle permet de parcourir le noeud afin de venir récupéré précisément ce nous avons besoin
  for (var i = 0, article; article = articles[i]; i++) {
        // Ici on définit les chemins de nos balise à récupérer
    var link = article.querySelector(' h2.article-title a'),
      content = article.querySelector('.article-content p'),
            // On définit l'objet qui va acceuillir nos contenus
      articleObj = {}

    // On définit les (key: value) de notre objet
    articleObj['link'] = link.getAttribute('href')
    articleObj['content'] = content.innerText
    articleObj['title'] = link.innerText

        // Et l'on vient push notre objet dans le tableau arrayArticle
    arrayArticle.push(articleObj)
  }
  // Et viens retourner arrayArticle (builder) à la sortit de notre fonction
  return arrayArticle
}

// On demande à casper de ce lancer sur l'url choisit
casper.start(url)

// On demande à casper d'executer nos fonction
casper.then(processPage, 5000)
casper.then(pushDataJson)

// Et casper execute la fonction de fin
casper.run(logFinish)
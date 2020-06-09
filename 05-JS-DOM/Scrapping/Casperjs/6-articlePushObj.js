/* 
 *
 * Exercice Scrapping avec 'CasperJS' & 'PhantomJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas sur un site pour pouvoir les exploitées
 * 
 * Lancer le script : casperjs articlePushObj.js
 * 
 */

// Déclaration de la Config de casperJs
const
  fs     = require('fs'),
  utils  = require('utils'),
  casper = require("casper").create({
    pageSettings: {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0"
    }
  }),
  // arrayMedia = [],
  url = 'https://lemediapourtous.fr/category/vincent-lapierre/'

// Script Dev
const
  logStart = function () {
    console.log('Démarrage du script !')    
  },
  logFinish = function () {
    console.log('Script Terminé !')
    this.exit()
  }
  
// Déclaration de la Function de récupération des données
const
  getDataArticle = function() {
    const
      arrayMedia = [],
      articles   = document.querySelectorAll('div.wrap-content article.post-item div.post-content')

    for (let i = 0, article; article = articles[i]; i++) {
      const
      date   = article.querySelector('div.col-sm-9 div.post-header span.post-meta small a.post-time time.entry-date'),
      link   = article.querySelector('div.col-sm-9 div.post-header h3.post-title a'),
      img    = article.querySelector('div.col-sm-3 div.post-image a.element-wrap img'),
        artObj = {}

      artObj['date']  = date.innerText
      artObj['link']  = link.getAttribute('href')
      artObj['title'] = link.innerText
      artObj['img']   = img.getAttribute('src')
      arrayMedia.push(artObj)
    }
    return arrayMedia
  }

// Déclaration de la Function de création de fichier JSON des datas Obtenues
const
  pushDataJson = function async () {
    const
      arrayMedia = this.evaluate(getDataArticle),
      valueArrayMedia = JSON.stringify(arrayMedia, null, 2)

    // Data Json Example
    fs.write('../Json/mediaDataPush.json', valueArrayMedia, (err) => {
    })
    // Data Pour le site Example scrapping
    fs.write('../website/assets/js/json/mediaDataPush.json', valueArrayMedia, (err) => {
    })
  }

// Déclaration de la Function Du Process
const
  processPage = function () {
    const
      arrayMedia = this.evaluate(getDataArticle)
      // valueArrayMedia = arrayMedia.values()
    utils.dump(arrayMedia)
  }

logStart()

// Connexion de casper (config) avec execution function (getTitle)
casper.start(url, function() {
  this.echo(this.getTitle())
})

// Lancement du Process par Casper() (Function)
casper.then(processPage)

// Lancement de la creation du fichier JSON
casper.then(pushDataJson)

// Execution de CasperJs
casper.run(logFinish)

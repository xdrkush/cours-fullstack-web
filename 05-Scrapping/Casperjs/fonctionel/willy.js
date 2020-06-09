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
  dedi   = "Coucou les royaliste ;) Je fais un cours de dev et je vous fais de la pub en même temps, dans 1 mois ce sera fini ;)"
  casper = require("casper").create({
    pageSettings: {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0" + "\n" + dedi
    }
  }),
  url = 'https://www.lego.com/fr-fr/themes/city'
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
      articles  = document.querySelectorAll('ul.wlLVt')      
    for (let i = 0, article; article = articles[i]; i++) {
      const
        ref = document.querySelector('li.eXePuc div.hIVRQm div.ProductLeafSharedstyles__Column-sc-1epu2xb-1 div.jssEPB sapn.fZPGmf span')
        // price = document.querySelector('div.ProductLeafSharedstyles__Column-sc-1epu2xb-1 div.jssEPB div.buixtI div.dIvArz span.kCXVdj'),
        artObj = {}
      artObj['ref']  = ref.getAttribute('data-test-code')
      // artObj['price']  = price.textContent
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
    fs.write('../Json/mediaDataPush2.json', valueArrayMedia, (err) => {
    })
    // Data Pour le site Example scrapping
    fs.write('../website/assets/js/json/mediaDataPush2.json', valueArrayMedia, (err) => {
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
/* 
 *
 * Exercice Scrapping avec 'CasperJS' & 'PhantomJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas sur un site pour pouvoir les exploitées (ensuite)
 * 
 * Lancer le script : casperjs articleObj.js
 *
 */

// Déclaration de la Config de casperJs
const
  utils = require('utils')
// Ici nous définissons notre navigateur que casper va simuler
const
  casper = require("casper").create({
    pageSettings: {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0"
    }
  })
// ici on defini le lien auquel on veux ce connecter
const
  url = 'https://lemediapourtous.fr/category/vincent-lapierre/'
  
// Déclaration de la Function de récupération des données
const
  getDataArticle = function() {
    // On difinie un tableau vide qui va acceuillir nos data
    // Et on défini que l'on veux récupéré la class article.post et ses enfant
    // Que l'on veux définir par la suite
    const
      arrayMedia = [],
      articles   = document.querySelectorAll('div.wrap-content article.post-item div.post-content')

    // On créé une boucle qui va nous permetre de récupérér des data tant que des div existe sous cette class ('.article-post)
    for (let i = 0, article; article = articles[i]; i++) {
      // On défini quel data on veux récupéré sur le site
      // Et notre Objet vide que l'on va intégré plus tard a notre tableau vide (arrayMedia)
      const
        date   = article.querySelector('div.post-header span.post-meta small a.post-time time.entry-date'),
        link   = article.querySelector('div.post-header h3.post-title a'),
        img    = article.querySelector('div.post-image a.element-wrap img'),
        artObj = {}

      // Dans notre objet on défini qu'il aura X variable (date, tilte, link, img)
      artObj['date']  = date.innerText
      artObj['title'] = link.getAttribute('href')
      artObj['link']  = link.innerText
      artObj['img']   = img.getAttribute('src')
      // Et l'on fini par utiliser notre tableau agrémenter de nos objet pour le pusher dans arrayMedia
      arrayMedia.push(artObj)
    }
    // Récupération de notre arrayMedia Complet avec toutes les datas
    return arrayMedia
  }

// Déclaration de la Function Du Process
const
  processPage = function () {
    arrayMedia = this.evaluate(getDataArticle)
    utils.dump(arrayMedia)
  }

// Connexion de casper (config) avec execution function (getTitle)
casper.start(url, function() {
  this.echo(this.getTitle())
})

// Lancement du Process par Casper() (Function)
casper.then(processPage, 1)

// Execution de CasperJs
casper.run()

/* 
 *
 * Exercice Scrapping avec 'CasperJS' & 'PhantomJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas sur un site pour pouvoir les exploitées
 * 
 * Lancer le script : casperjs linkObj.js
 *
 */

// Déclaration des variables
// Import de utils : https://www.npmjs.com/package/utils
// Import de casperJS : https://www.npmjs.com/package/casper
const
  utils = require('utils'),
  casper = require('casper').create()

// Lancement et execution des functions
// casper execute ça function start et ce connecte à l'URL inscrite
casper.start('https://lemediapourtous.fr/category/vincent-lapierre/', function() {
  // this.echo === console.log de this .getTitle qui est enfète le titre de la page
  this.echo(this.getTitle())
  // Déclaration de constante getLinks qui est la récupération de class visé
  const
    getLinks = this.evaluate(function() {
      // Déclaration de constante linkArray qui est le recherche de notre data visée
      const
        linkArray = document.querySelectorAll('div.kleo-masonry article.post div.post-content div.post-header h3.post-title a')
        // la il nous retourne tout les a ayant ce meme chemin de récupération
        return [].map.call(linkArray, function(node) {
          // Et l'on selectionne que l'on veux que l'attribut href dans notre a
          return node.getAttribute('href')
        })
    })
  // On declare ntore variable link qui est la creation de notre objet pour stocker notre data (le href du a selectionner dans linkArray)
  const
    link = getLinks.map(function(str) {
      // On declare que notre elements sera une chaine de caractere lu dans notre getLinks
      // Et data sera l'Objet retourner
      const
        elements1 = str.slice(' '),
        data = {
          link       : elements1
        }
        // et on retourne data
        return data
    })
  // remetre une virgule (',') sur la ligne au dessus pour que les dates Fonctionne
  //   getDates = this.evaluate(function() {
  //   const
  //     date = document.querySelectorAll('div.kleo-masonry article.post div.post-content div.post-header span.post-meta small a.post-time time.entry-date')
  //   return [].map.call(date, function(nod) {
  //       return nod.innerText
  //     })
  // }),
  //   date = getDates.map(function(str) {
  //   const
  //     elements1 = str.slice(' '),
  //     data = {
  //     date       : elements1
  //   }
  //   return data;
  // })

  // on demande a utils de nous loguer l'intégralité des links
  utils.dump(link.slice())
  // utils.dump(date.slice())

})

// Et casper s'execute
casper.run()

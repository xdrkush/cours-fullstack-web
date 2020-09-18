/* 
 *
 * Exercice Scrapping avec 'CasperJS' & 'PhantomJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas sur un site pour pouvoir les exploitées
 * 
 * Lancer le script : casperjs 4-getLink.js
 *
 */

// Déclaration des variables
// Import de utils : https://www.npmjs.com/package/utils
// Import de casperJS : https://www.npmjs.com/package/casper

const
  // fs nous permettra de parcourir notre arborescence pour allez chercher des fichiers, ...
  fs = require('fs'),

  // Petite config de casper afin de créé notre server casperjs
  casper = require("casper").create({
    // On définit les paramètres
    pageSettings: {
      // On assigne un user-agent a notre casper
      // user-agent: https://www.institut-pandore.com/hacking/comprendre-analyser-user-agent/
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0"
    }
  }),

  // on définit l'url ou lancer notre scrap
  url = 'https://lemediapourtous.fr/category/vincent-lapierre/';

// La fonction Get links va nous permettre de selctionner grâce au js-dom la balise à récupéré
// Dans notre cas ce sera les balise <a></a> ayant une arboresence spécifique dans le dom
function getLinks() {
  // On définit que links est la récupération de toute les balise à ayant cette arbo
  var links = document.querySelectorAll('div.wrap-content article.type-post h2.article-title a')

  // Ici on demande à getLinks de retourner une fonction qui est:
  //   - Array: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
  //   - prototype: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/prototype
  //   - map: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
  //   - call: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/call
  // et donne ces instruction à links, et execute une fonction qui prend en argument (e)
  return Array.prototype.map.call(links, function(e) {
      // Et la fonction nous retourne tout les <a> ayant un chemin d'arborescence = à links
      return e.getAttribute('href');
  });
}

// Ici on démarre Casper avec notre url en parametre
casper.start(url, function() {
  // On demande de nous echo le titre de la page sur laquelle il es
  this.echo(this.getTitle())
})

// Puis il va nous faire une fonction
casper.then(function() {
  // On définit links qui est le résultat de la fonction getLinks
  links = this.evaluate(getLinks);
});

// Et casper s'execute
casper.run(function() {
  // Ici il nous log le nombre de résultat dans notre tableau
  this.echo(links.length + ' links found:');
  // Ici il nous log nos résultat et quit le script
  this.echo(' - ' + links.join('\n - ')).exit();
})
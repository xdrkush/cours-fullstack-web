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
  utils = require('utils'),
  fs = require('fs'),
  casper = require("casper").create({
    pageSettings: {
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0"
    }
  }),
  url = 'https://lemediapourtous.fr/category/vincent-lapierre/'

function getLinks() {
  var links = document.querySelectorAll('div.wrap-content article.type-post h2.article-title a')

  return Array.prototype.map.call(links, function(e) {
      return e.getAttribute('href');
  });
}

casper.start(url, function() {
  this.echo(this.getTitle())
})

casper.then(function() {
  links = this.evaluate(getLinks);
});

casper.then(function() {
  links = links.concat(this.evaluate(getLinks));
});

// Et casper s'execute
casper.run(function() {
  this.echo(links.length + ' links found:');
  this.echo(' - ' + links.join('\n - ')).exit();
})
var links = [];
var casper = require('casper').create();
const fs = require('fs')

function getLinks() {
    var links = document.querySelectorAll('div.r a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http:://google.fr', function() {
   // Wait for the page to be loaded
   this.waitForSelector('form[action="/search"]');
});

casper.then(function() {
   // search for 'casperjs' from google form
   this.fill('form[action="/search"]', { q: 'marmiton' }, true);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
    // now search for 'phantomjs' by filling the form again
    this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});

casper.then(function() {
    // aggregate results for the 'phantomjs' search
    links = links.concat(this.evaluate(getLinks));
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});

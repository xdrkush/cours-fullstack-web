/* 
 *
 * Exercice Scrapping avec 'CasperJS' & 'PhantomJS'
 * 
 * Objectif :
 * 
 * Récupérer (GET) des datas sur un site pour pouvoir les exploitées
 *
 */

//  Déclaration des Variables
let 
    link, img, title, date

const
    casper = require('casper').create(),
    Url = 'https://lemediapourtous.fr/category/vincent-lapierre/',
    logStart = function () {
        console.log('Démarage du script')
    },
    logFinish = function () {
        console.log('Fin du script')
    },
    getLinks = function () {
        /*
         *
         * L'erreur ce situe ici 
         * 
         */
        const
            link = document.querySelectorAll('div.wrap-content article.post-item div.post-content div.post-header h3.post-title a')
        return Array.prototype.map.call(link, function (e) {
            return e.getAttribute('href')
        })
    }
    // getImg = function () {
    //     const
    //         img = document.querySelectorAll('div.kleo-masonry article.post div.post-content div.post-image a.element-wrap img')
    //     return Array.prototype.map.call(img, function (e) {
    //         return e.getAttribute('src')
    //     })
    // },
    // getTitle = function () {
    //     const
    //         title = document.querySelectorAll('div.kleo-masonry article.post div.post-content div.post-header h3.post-title a')
    //     return Array.prototype.map.call(title, function (e) {
    //         return e.innerText
    //     })
    // },
    // getDate = function () {
    //     const
    //         date = document.querySelectorAll('div.kleo-masonry article.post div.post-content div.post-header span.post-meta small a.post-time time.entry-date')
    //     return Array.prototype.map.call(date, function (e) {
    //         return e.innerText
    //     })
    // }

// Execution de la function logStart
logStart()

// Execution de la function getLinks
getLinks()
// getImg()
// getTitle()
// getDate()

// Lancement de capser a l'url definie dans les variables
casper.start(Url)

// Execution de function
casper.then(function () {
    link = this.evaluate(getLinks)
    // img = this.evaluate(getImg)
    // title = this.evaluate(getTitle)
    // date = this.evaluate(getDate)
})

// Affichage du retour des data Obtenu
casper.run(function () {
    for(var i in link) {
        console.log(link[i])
    }
    // for(var i in img) {
    //     console.log(img[i])
    // }
    // for(var i in title) {
    //     console.log(title[i])
    // }
    // for(var i in date) {
    //     console.log(date[i])
    // }
    logFinish()
    this.exit()
})

const
    fs = require('fs')
    , utils = require('utils')
    , casper = require("casper").create()
    // arrayMedia = [],
    , url = 'https://www.journaldugeek.com/hub/jeux-video/'
const
    logStart = function () {
        console.log('Démarage du script')
    },
    logFinish = function () {
        console.log('Script Terminé !')
        this.exit()
    },
    getImg = function () {
        const
            img = document.querySelectorAll('div.archive__list__thumbnail div.entry__img-container img');
        return Array.prototype.map.call(img, function (e) {
            return e.getAttribute('src')
        })
    },
    getH2 = function () {
        const
            h2 = document.querySelectorAll('div.archive__list__caption h2');
        return Array.prototype.map.call(h2, function (e) {
            return e.innerText
        })
    },
    getAuthor = function () {
        const
            author = document.querySelectorAll('div.archive__list__caption div.archive__list__infos strong');
        return Array.prototype.map.call(author, function (e) {
            return e.innerText
        })
    },
    getTime = function () {
        const
            time = document.querySelectorAll('div.archive__list__caption div.archive__list__infos time');
        return Array.prototype.map.call(time, function (e) {
            return e.innerText
        })
    },
    getP = function () {
        const
            p = document.querySelector('div.archive__list__caption p');
        return Array.prototype.map.call(p, function (e) {
            return e.innerText
        })
    },
    // Déclaration de la Function de récupération des données
    // recupere les elements et les renvoyer en array dans un Object
    getDataArticle = function () {
        const
            arrayMedia = []
            , articles = document.querySelectorAll('div.archive__list a.archive__list__item ');
        for (let i = 0, article; article = articles[i]; i++) {
            const

                img = article.querySelector('div.archive__list__thumbnail div.entry__img-container img');
            h2 = article.querySelector('div.archive__list__caption h2');
            author = article.querySelector('div.archive__list__caption div.archive__list__infos strong');
            time = article.querySelector('div.archive__list__caption div.archive__list__infos time');
            p = article.querySelector('div.archive__list__caption p');
            artObj = {}

            artObj['img'] = img.getAttribute('src')
            artObj['h2'] = h2.innerText
            artObj['author'] = author.innerText
            artObj['time'] = time.innerText
            artObj['p'] = time.innerText
            arrayMedia.push(artObj)
        }

        return arrayMedia
    },
    // Déclaration de la Function de création de fichier JSON des datas Obtenues
    pushDataJson = function async() {
        const
            arrayMedia = this.evaluate(getDataArticle),
            valueArrayMedia = JSON.stringify(arrayMedia, null, 2)
        // Data Json Example
        fs.write('../json/jdgDataPush.json', valueArrayMedia, (err) => {
        })
        // Data Pour le site Example scrapping
        fs.write('../website/assets/js/json/jdgDataPush.json', valueArrayMedia, (err) => {

        })
    },
    // Déclaration de la Function Du Process
    processPage = function () {
        arrayMedia = this.evaluate(getDataArticle)
        // valueArrayMedia = arrayMedia.values()
        utils.dump(arrayMedia)
    };
// Execution de la function getLinks
logStart()
getImg()
getH2()
getAuthor()
getTime()
getP()
// Lancement de capser a l'url definie dans les variables
// Connexion de casper (config) avec execution function (getTitle)
casper.start(url, function () {
    this.echo(this.getTitle())
})
// Execution de function
casper.then(function () {
    img = this.evaluate(getImg)
    h2 = this.evaluate(getH2)
    author = this.evaluate(getAuthor)
    time = this.evaluate(getTime)
    p = this.evaluate(getP)
})
// Lancement du Process par Casper() (Function)
casper.then(processPage)
// Lancement de la creation du fichier JSON
casper.then(pushDataJson)
// Affichage du retour des data Obtenu
casper.run(function () {
    for (var i in img) {
        console.log(img[i])
    }
    for (var i in h2) {
        console.log(h2[i])
    }
    for (var i in author) {
        console.log(author[i])
    }
    for (var i in time) {
        console.log(time[i])
    }
    for (var i in p) {
        console.log(p[i])
    }
})
logFinish()
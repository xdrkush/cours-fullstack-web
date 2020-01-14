Doc Officiel de handlebars
https://handlebarsjs.com/guide/#what-is-handlebars

installation du paquet via npm
https://www.npmjs.com/package/handlebars

__________________________________________________________________________________________

Objectif:

Ce tuto à pour objectif de créé un page web (http) via NodeJS, ExpressJS et Express-Handlebars

1- en premier :
        allez dans un dossier pour créé un projet:
        (exemple:)
        cd /Documents/Dev/exercice/6-Node-Js/

2- Ensuite créé un dossier:
        mkdir 3.1-Handlebars-ok
        cd 3.1-Handlebars-ok
        mkdir views
        cd views
        touch index.hbs
        touch test.hbs
        mkdir layouts
        cd layouts
        touch main.hbs
        cd ../..
        touch server.js
        npm init -y
        npm i express express-handlebars
ou 

2bis- Ensuite créé un dossier:
        mkdir 3.1-Handlebars-ok
        cd 3.1-Handlebars-ok
        touch server.js
        npm init -y
        npm i express express-handlebars
        code .

3- maintenant éditez votre dossier 3.1-Handlebars-ok
        lancer le script avec :
        npm start

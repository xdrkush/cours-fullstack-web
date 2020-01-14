Le tuto 6-NodeJS 

Objectif:

1. Construire un page http
2. Installation et utilisation de ExpressJS (express)
3. Installation et utilisation de Moteur de templating (express-handlebars)
4. Installation et utilisation de Base de donné (MongoDBCloud, mongo) 
5. Installation et utilisation de Base de donné (MongoDBLocal)
6. CRUD, (Create, Read, Update, Delete)
7. Auth, (Bcrypt)
8. Session, (express-session)
9. Nodemailer, (nodemailer)
10. Middleware
11. Mot de passe oublier (nodemailer)
99. CSS (sass, assets)

__________________________________________________________________________________________


Ordre des Tuto :
1-2-3-4... 1.1-2.1-3.1-4.1... 1.2-2.2-3.2-4.2...

Sinon je vous vois deja faire le tuto de handlebars 3.3 avec db sans avoir vu la db en cloud ou en local ;)

Petit conseil:

Afin de créé une belle architecture de votre dossier je vous conseil de tout créé depuis votre IDE ( Visual code, brackets, komodo edit, ... )

exemple:

    (
        Ce tuto à pour objectif de créé un page web (http) via NodeJS

        1- en premier :
                allez dans un dossier pour créé un projet:
                (exemple:)
                cd /Documents/Dev/exercice/6-Node-Js/

        2- Ensuite créé un dossier:
                mkdir 1.1-http-ok
                cd 1.1-http-ok
                code .
                (créé vos dossier ou fichier depuis votre IDE)

        3- maintenant lancez server.js
                lancer le script avec :
                node server.js
    )

__________________________________________________________________________________________

Détail:

        MongoDB Local ou Cloud ??
                À partir du du 4.1-Mongo* Vous devrez bien lancer mongod dans un terminal
                        sudo mongod

                en cas d'erreur mongod je vous es mit une db mongoCloud en libre accès (Je vous fais confiance à cce que vous puissiez laisser tous le monde travail dans la bienveillance ;) )

                remplacer la const urlDB dans 'server.js'

                const urlDB = require('./db/config.json').keyDbLocal
                const urlDB = require('./db/config.json').keyDbCloud

__________________________________________________________________________________________

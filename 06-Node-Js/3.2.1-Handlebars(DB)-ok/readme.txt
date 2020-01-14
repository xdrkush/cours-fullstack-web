Pour réaliser ce tuto vous devez avoir mongodb et une base de donnée a configuré
télécharger mongodb

Doc Officiel de handlebars
https://handlebarsjs.com/guide/#what-is-handlebars

installation du paquet via npm
https://www.npmjs.com/package/handlebars

Doc install mongodb
https://docs.mongodb.com/manual/installation/
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

__________________________________________________________________________________________

lancer le script avec :

d'abord lancer mongodb :

sudo mongod
ou juste 
mongod

__________________________________________________________________________________________

lancer un nouveau terminal et lancer :

vous devez configuré mongodb (
    d'abord créé une database au nom de 'test'
    pour ça lancer mongo avec la commande mongo :
    vous pouvez faire un :
    show dbs 
    qui vous montrera les db sur votre pc ou server
    maintenant créé la db :
    use test

    http://www.w3big.com/fr/mongodb/mongodb-create-database.html
)

lancer un nouveau terminal et lancer:

npm i
npm start
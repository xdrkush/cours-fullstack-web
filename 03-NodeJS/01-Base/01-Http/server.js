// Import du module http (pour que la page s'affiche dans un navigateur internet)
// http est un portocole de transmition de donnée (www.)
var http = require('http')

// Création de notre application en nodeJS
http.createServer(function (req, res) {

    // res.end = On envoie une data qui est 
    // 'Hello World Http' = Une chaine de caractères
    res.end('Hello World  Http')

// on donne à  notre application la function (listen) qui est d'écouter 
// le port 3000 sur le server '127.0.0.1' qui est notre localhost
}).listen(3000, "127.0.0.1")

// Au démarage de l'application on demande un LOG d'une chaine de caractère visible sur le terminale
console.log('Server running at http://127.0.0.1:3000/')

// cours http / NodeJS 

// DrK
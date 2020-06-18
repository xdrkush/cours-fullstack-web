// Ici nous déclarons les variable de nos éléments à monter par la suite
var header = document.querySelector('header');
var section = document.querySelector('section');

// Ici nous faisons une requète HTTP pour aller chercher notre 'json sur le net'
// En premier temps nous déclarons l'url ou sont les data à utilisé pour le tuto
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// En 2 on instancie notre contructeur
// Pour + d'info : https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
var request = new XMLHttpRequest();
// En 3 on ouvre une requète 'GET' (récupération), et lui indique l'url
request.open('GET', requestURL);

// Ici on instancie que la réponse sera au format 'JSON'
request.responseType = 'json';
// On lance la requète
request.send();

// Ici on charge le résultat de notre requete
// qui est le meme json que l'on trouve dans notre url 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
request.onload = function() {
  // Ici on définit que notre variable superHeroes sera égale au résultat de la requète
  var superHeroes = request.response;
  // Nous parsons notre variable dans la fonction populateHeader
  populateHeader(superHeroes);
  // Nous parsons notre variable dans la fonction showHeroes
  showHeroes(superHeroes);
  // parser les datas est un terme très répandu dans le web
  // En gros on envoie les data:
  //   - d'une fonction à une autre
  //   - d'un objet à une fonction
  //   - d'une fonction à une page
  //   - ...
}

// Nous déclarons une fonction populateHeader qui prend en paramètre jsonOBJ (qui est en réalité notre variable superHeroes)
function populateHeader(jsonObj) {
  // On déclare la création d'un h1
  var myH1 = document.createElement('h1');
  // on lui dit de créé un du texte qui ce dernier sera = à l'attribut squadName à l'intérieur de notre jsonObj
  myH1.textContent = jsonObj['squadName'];
  // On demande a notre variable header de créé son enfant qui est myH1
  header.appendChild(myH1);

  // Même Principe que juste au dessus
  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + jsonObj['formed'];
  header.appendChild(myPara);
}

// Nous déclarons une fonction showHeroes qui prend en paramètre jsonOBJ (qui est en réalité notre variable superHeroes)
function showHeroes(jsonObj) {
  // Donc ici c'est le même principe que pour la fonction juste au dessus sauf que
  // Nous allons parcourir des tableaux afin de pouvoir créé nos div avec les data voulu

  // Ici on définit que heroes est égale à l'attribut members dans jsonObj qui est un [] (tableau)
  var heroes = jsonObj['members'];

  // Ici nous parcourons notre tablleau heroes
  for (var i = 0; i < heroes.length; i++) {
    // Nous définissons les futurs éléments à créé
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    // On attribue les valeurs à nos créations d'éléments
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    // On déclare que à l'intérieur de notre tableau heroes nous allons rencontré un tableau dans chaque objet (powers)
    // Que nous allons parcourir afin de récupérer nos data voulu
    var superPowers = heroes[i].powers;
    // Ici nous parcourons notre tableaux
    for (var j = 0; j < superPowers.length; j++) {
      // Toujour le meme principe de création d'élément
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    // Ici nous demandons à myArticle de créé ses enfants voulu
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    // Ici notre section créé un enfant qui est myArticle
    section.appendChild(myArticle);
  }
}
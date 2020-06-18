/*
 * Notre JS importer
 *******************/

// 1 Commençons par un log 'hello world !'
console.log('Hello World !')

//  ***************************************************  //

// 2 Définissont une variable et logons la
const helloWorld = console.log('Hello World ! 2')

//  ***************************************************  //

// 3 Définissont hello en tant que fonction maintenant
// Et ensuite nous l'appellons avec ses paranthèses afin de nous executer la fonction
// Nous y reviendrons plus tard
function hello () {
  console.log('Hello World ! 3')
}
hello()

//  ***************************************************  //

// 4 Exemple de variable
// Une variable réagit comme let (var est amener à disparaitre)
var coucou = 'Coucou !'
let hi = 'Salut !'
// Une constante sera résistante (On ne pourra pas lui changer ça valeur)
const bye = 'Au revoir !'

console.log(coucou)
console.log(hi)
console.log(bye)

coucou = 'tty'
hi = 'tty'
// À décommenter pour voir le crash dans la console du navigateur
// bye = 'tty'

console.log(coucou)
console.log(hi)
console.log(bye)

//  ***************************************************  //

// 5 arythmétique
// ici nous allons découvrir rapidement les symbole arythmétique (+, -, *, /, %, **)
let x = 2;
let y = 3;
let z = 4;

let a = x + 1; //a stocke 2 + 1 = 3
let b = x + y; //b stocke 2 + 3 = 5
let c = x - y; //c stocke 2 - 3 = -1
let d = x * y; //d stocke 2 * 3 = 6
let e = x / y; //e stocke 2 / 3
let f = 5 % 3; //f stocke le reste de la division euclidienne de 5 par 3
let g = x ** 3; //g stocke 2^3 = 2 * 2 * 2 = 8

/*On affiche les résultats dans une boite d'alerte en utilisant l'opérateur
 *de concaténation "+". On retourne à la ligne dans l'affichage avec "\n"*/
console.log('a contient : ' + a +
      '\nb contient : ' + b +
      '\nc contient : ' + c +
      '\nd contient : ' + d +
      '\ne contient : ' + e +
      '\nf contient : ' + f +
      '\ng contient : ' + g);

//  ***************************************************  //

// 6 La concaténation
// Quand on concatène 2 chose ensemble litéralement on les met bout à bout
var cont1 = 'premier bout,' + ' ' + 'deuxieme bout'
console.log(cont1)
// Si nous mettons des numéros
var cont2 = 1 + 1
console.log(cont2)
// 
// Comment 1 + 1 font 11 ??
var contx = '1'
var conty = '1'
var cont3 = contx + conty
console.log(cont3)

//  ***************************************************  //

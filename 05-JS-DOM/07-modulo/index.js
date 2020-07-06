// Un modulo (%), c’est :

// le reste de la division euclidienne
// positif ou nul
// plus petit que la valeur absolue du diviseur
// Il est important de savoir que son implémentation varie selon le langage de programmation, et que JavaScript utilise la fonction de troncature de la partie décimale.

// Fonction de troncature de la partie décimale
// C’est la fonction utilisée par JavaScript pour calculer le modulo, elle donne toujours le même résultat, mais le modulo prend le signe du diviseur :

console.log(  41 %  7 ); //  6
console.log( -41 %  7 ); // -6
console.log( -41 % -7 ); // -6
console.log(  41 % -7 ); //  6

// Cette fonction ne respecte pas la 2e règle énoncée plus haut : on se retrouve avec des modulos négatifs.

// Fonction partie entière
// Cette fonction retourne toujours un modulo compris entre 0 et le diviseur, le modulo prend donc le signe du diviseur :

Number.prototype.mod = function(n) {
	return (( this % n ) + n ) % n;
};

console.log( parseInt( 41).mod( 7) ); //  6
console.log( parseInt(-41).mod( 7) ); //  1
console.log( parseInt(-41).mod(-7) ); // -6
console.log( parseInt( 41).mod(-7) ); // -1
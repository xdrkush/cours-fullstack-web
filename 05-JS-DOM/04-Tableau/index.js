// On déclare notre tableau
let shopping = ['pain', 'lait', 'fromage', 'houmous', 'nouilles'];
// On Log notre tableau
console.log(shopping)
  // On déclare 2 autre tableaux
let sequence = [1, 1, 2, 3, 5, 8, 13];
// On log certain des éléments de notre tableau
console.log(sequence[5])
let random = ['arbre', 795, [0, 1, 2]];
// On log certain des éléments de notre tableau
console.log(random[2][1])
  // Connaitre la taille d'un tableau
sequence.length
console.log(sequence.length)
  // Parcourir un tableau avec une boucle for
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

// Convertir une chaine de charactère en tableaux
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// Nous déclarons que myArray est = à myData découper par fragment
// Chaque fois que la fonction trouvera ','
// Et construira un tableau avec ces fragments
let myArray = myData.split(',');
// On log notre tableau
console.log(myArray);
// On log le nombre de fragment
console.log(myArray.length);
// le premier élément du tableau
console.log(myArray[0]);
// le deuxième élément du tableau
console.log(myArray[1]);
// le dernier élément du tableau
console.log(myArray[myArray.length - 1]);
// Et on retransforme notre tableau en chaine de charactère
let myNewString = myArray.join(',');
// On log notre tableau en chaine de charactère
console.log(myNewString);

// On Déclare notre tableaux dogNames
let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// On demande de nous retourner le tableaux dogNames sous forme de chaine de charactère
console.log(dogNames.toString());

// Ajouter un élément dans notre tableau
myArray.push('Cardiff');
// Log du tableau
console.log(myArray);
// Ajouter 2 éléments au tableau
myArray.push('Bradford', 'Brighton');
// On log notre tableau
console.log(myArray);
// On déclare une variable qui est l'ajout de Bristol dans notre tableau myArray
let newLength = myArray.push('Bristol');
// On log notre tableau
console.log(myArray);
// On log notre nouveau tableau 
console.log(newLength);
// On supprime de dernière élément de notre tableau
myArray.pop();
// On déclare une variable qui est la suppression du dernière élément
let removedItem = myArray.pop();
// On log notre tableau
console.log(myArray);
// On log notre nouveau tableau
console.log(removedItem);

// ici on push Edinburgh
myArray.unshift('Edinburgh');
// On log le tableau
console.log(myArray);

// Ici on supprime le dernière élément du tableau
let removedItem2 = myArray.shift();
// On supprime l'élément
removedItem2;
// On log le tableau
console.log(myArray);
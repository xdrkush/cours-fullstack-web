/*
 * On déclare notre objet 'personne'
 ************************************/
var personne = {
  nom: ['Jean', 'Martin'],
  age: 32,
  sexe: 'masculin',
  interets: ['musique', 'skier'],
  bio: function() {
    alert(this.nom[0] + ' ' + this.nom[1] + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' +
      this.interets[1] + '.');
  },
  salutation: function() {
    alert('Bonjour ! Je suis ' + this.nom[0] + '.');
  }
};

// Si l'on regarde dans notre inspecteur de notre navigateur dans l'onglet console
// L'on pourra voir les console.log
console.log(personne)
console.log(personne.nom[0])
console.log(personne.age)

// Execution de fonction de l'objet
personne.bio()

// Accorder un peu de delay a notre fonction ici 3s toujour exprimer en millisecond
setTimeout(function() { personne.salutation() }, 3000);

// Inseré nos datas dans un élément
var idTest = document.getElementById('idTest')
  // Il y a un delay avant l'affichage car tant que la fonction personne.bio() n'est pas accepter il ne continura pas notre script
idTest.textContent = personne.nom[0] + ' à ' + personne.age + ' ans.'
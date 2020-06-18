// On déclare une class Polygon
// Une Class est variable qui nous permet d'instancier des paramaetre par default de cette classe (Objet)
// exemple avec notre constructor qui est une methode qui va nous permettre de pré-monter des objets
// Et on definit que this.name est égale à 'Polygon'
class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}
// Ici On Déclare poly1 est instancier sur les meme parametre par défault que Polygon()
const poly1 = new Polygon();
// On log notre Objet, Construtor, Class
console.log(poly1.name);
console.log(poly1)

// En Attente de nouveau contenu
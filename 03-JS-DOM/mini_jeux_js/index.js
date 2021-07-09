console.log('Test')

// Restreindre le nombre d'essai
const restrict_essai = 5;
//Chiffre aléatoire de 1 à 100)
let chiffre_mystery = entierAleatoire(0, 100);
// Le nombre d'essaie actif
let essai = 1;

console.log(chiffre_mystery)

// Importer le input de l'html
const input = document.getElementById('valeur')
console.log(input)
// importer la div pour afficher le resultat
const calcul = document.getElementById('calcul')
console.log(calcul)
// Récuperer le bouton pour gérer le click (calcul)
const resultat = document.getElementById('resultat')
console.log(resultat)

document.getElementById('nbr_essai').innerHTML = essai

// Aficher les log du input
input.addEventListener("input", function () {
    console.log('INPUT: ', input.value)
})

// Ajouter l'evenement click (calcul) sur le bouton
calcul.addEventListener("click", function () {
    // logé nos variables
    // input.value === String
    // Number(input.value) === Number
    // Voir le type || console.log('type: ', typeof input.value, input.value)
    console.log("Log value", input.value)
    console.log('type: ', typeof input.value, input.value)
    console.log('type2: ', typeof Number(input.value), Number(input.value))

    // Condition pour gerer le nombre d'essai 
    if (essai === restrict_essai) {
        console.log("Tu as perdu !")
        tryAgain()
        return
    }

    // condition gerer errreur si le nombre n'est pas entre 0 et 100 (Retourner le résultat)
    if (Number(input.value) < 0 || Number(input.value) > 100) {
        console.log("La reponse n'est pas comprise entre 0 et 100")
        resultat.innerHTML = "La reponse n'est pas comprise entre 0 et 100"
    }

    // condition afficher si nombre trop petit
    if (Number(input.value) < chiffre_mystery) {
        console.log("la reponse est trop petite")
        resultat.innerHTML = "La reponse est trop petite"
    }

    // condition afficher si nombre trop grand
    if (Number(input.value) > chiffre_mystery) {
        console.log("la reponse est trop grande")
        resultat.innerHTML = "La reponse est trop grande"

    }
    // condition afficher si nombre exact
    if (Number(input.value) === chiffre_mystery) {
        console.log("la reponse est exact")
        resultat.innerHTML = "La reponse est exact"
        endGame()
    }

    // condition affichage du résultat
    essai++
    // incrémenter le nombre d'essai
    document.getElementById('nbr_essai').innerHTML = essai
})



// Générer un nombre aléatoire - chiffre aléatoire entre 1 et 100 //

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour mettre fin au jeux
function tryAgain() {
    // on affect "0" à la variable essai pour un retour à 0
    essai = 0
    // Affiche sur l'ecran le résultat du jeux
    resultat.innerHTML = `Tu as perdu ! Le numéro à decouvrir était ${chiffre_mystery} ! `
    // Regénérer un nouveau nombre mystère
    chiffre_mystery = entierAleatoire(0, 100);
}

// Fonction pour mettre fin au jeux
function endGame() {
    // on affect "0" à la variable essai pour un retour à 0
    essai = 0
    // Affiche sur l'ecran le résultat du jeux
    resultat.innerHTML = `Bravo vous avez réussi ! `
    // Regénérer un nouveau nombre mystère
    chiffre_mystery = entierAleatoire(0, 100);
}

function end(){

}



// regénérer un nombre aléatoire
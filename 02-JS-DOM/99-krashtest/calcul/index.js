console.log('Test')

// Importer le input de l'html
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const select = document.getElementById('select')

// importer la div pour afficher le resultat
const calcul = document.getElementById('calcul')

// Récuperer le bouton pour gérer le click (calcul)
const resultat = document.getElementById('resultat')

// Ajouter l'evenement click (calcul) sur le bouton
calcul.addEventListener("click", function () {
    console.log('Bouton activé')
    console.log('Number1: ', number1.value)
    console.log('Number2: ', number2.value)
    console.log('Select: ', select.value)

    // Condition
    switch (select.value) {
        case "+":
            resultat.innerHTML = addition(Number(number1.value), Number(number2.value))
            break
        case "-":
            resultat.innerHTML = soustraction(Number(number1.value), Number(number2.value))
            break
    }
})

// function addition
function addition(x, y) {
    return x + y
}

function soustraction(x, y) {
    return x - y
}
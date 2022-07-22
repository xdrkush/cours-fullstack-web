// Url de l'api
const url = 'https://api.chucknorris.io/jokes/random'

// Récupération de la banner
const banner = document.getElementById('banner')

// récupération de l'objet
function getJoke() {
    // Fetch permet de faire une recherche via notre url
    fetch(url)
        // nous demandons de transformer notre résultat au format json si ce n'est pas encore fait
        .then(res => res.json())
        // et nous réalisons l'action
        .then(data => {
            // Variable pour la blague
            const joke = data.value
            // Variable pour la balise html à insérer
            let html = `
                    <h5>${joke}</h5>
                `
            // Ici on demande a banner d'injecter notre balise
            banner.innerHTML = html
        })
}

// On demande a la fonction de ce lancer
getJoke()

// Ici setInterval nous lance la fonction toute les X milliseconds
// setInterval(function () {
//     // Toute les X millisecond la function getJoke() sera renouveller
//     getJoke()
// // Ici nous définissons le time en millisecond
// }, 8000)

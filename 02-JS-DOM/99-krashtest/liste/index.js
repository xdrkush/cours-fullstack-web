console.log('COUCOU')

// Import de nos balise
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

let club = ['FC Nantes'];

// Event du boutton
btn.addEventListener('click', () => {
    console.log('Event BTN: ', input.value)
    club.push(input.value)
    addToList(input.value)
});

// Ajouter un element dans la liste
function addToList (value) {
    // Créé un element 'li'
    const li = document.createElement('li')
    // Créé du text 
    const text = document.createTextNode(value)
    // ajoute du text a notre 'li'
    li.appendChild(text)
    // ajoute un le 'li' à notre list
    list.appendChild(li)
}

// Ici on charge les élements du tableau
function loadList () {
    club.forEach(c => {
        const li = document.createElement('li')
        const text = document.createTextNode(c)
        li.appendChild(text)
        list.appendChild(li)
    })
}

loadList()
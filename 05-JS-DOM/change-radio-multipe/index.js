console.log('Mon Script')

const edit    = document.getElementById('edit')
const add     = document.getElementById('add')
const refresh = document.getElementById('refresh')

edit.addEventListener('change', () => {
    const h1 = document.getElementById('title')
    h1.textContent = 'Mon Super Titre est éditer'
})

add.addEventListener('change', () => {
    const h2 = document.getElementById('addTitle')
    h2.textContent = 'Mon titre ajouter'
})

refresh.addEventListener('change', () => {
    const h2 = document.getElementById('refresh')
    location.reload()
})

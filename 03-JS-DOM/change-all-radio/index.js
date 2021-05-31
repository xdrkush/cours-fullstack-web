console.log('Mon Script')

const form   = document.getElementById('form')
const radios = form.getElementsByTagName('input');

for (i = 0; i < radios.length; i++) {
    radios[i].onclick = function (e) {
      if (e.ctrlKey) this.checked = false
    }
}

form.addEventListener('change', () => {
    if (radios) console.log('Radio 1')
})
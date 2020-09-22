console.log('Mon Script')

// Déclaration de constante
const form = document.getElementById('form')
const input = form.getElementsByTagName('input');

// Input Radio
for (i = 0; i < input.length; i++) {
    input[i].onclick = function (e) {
        if (e.ctrlKey) this.checked = false;
    }
}

// Envoie du formulaire
function checkForm(event) {

    event.preventDefault()

    for (let x = 0; x < input.length; x++) {
        const element = input[x];
        console.log(element.value)
    }

    alert("Le console.log de votre formulaire est dans la console !")
    
    form.submit()
}

function checkPassword() {
    const pass = document.getElementById('password').value
    const passConfirm = document.getElementById('passwordConfirm').value

    if (pass === passConfirm) console.log('Match password OK'), submit()
    else console.log('Les 2 mot de passe sont différent !!')
    console.log(pass)
}
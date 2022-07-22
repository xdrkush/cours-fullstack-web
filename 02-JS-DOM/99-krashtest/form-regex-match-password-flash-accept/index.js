console.log('Mon Script')

// Déclaration de constante
const form = document.getElementById('form');
const input = form.getElementsByTagName('input');

// Fonction pour checker le formulaire (Le mot de passe sur notre exemple)
function checkForm (event) {

    // On récupère les fonctionnalité par défault de notre formulaire et on les ré-initialise
    // dans notre cas on demande à notre formulaire de ne pas s'envoyer
    event.preventDefault()

    // Définition de nos constantes
    const pass        = document.getElementById('password').value;
    const passConfirm = document.getElementById('passwordConfirm').value;
    const accept      = document.getElementById('accept').checked;
    const flash       = document.getElementById('flash');
    const regex       = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    // console.log(pass)

    // Condition pour matché notre password avec la regex
    if (!pass.match(regex)) {
        // Gestion du flash (error)
        flash.style.color = 'red';
        flash.innerText = 'Le mot de passe ne respect pas la chartes !';

    // Condition pour checker si password est bien égale avec passwordConfim
    } else if (pass !== passConfirm) {
        // Gestion du flash (error)
        flash.style.color = 'red';
        flash.innerText = 'Les mots de passe ne sont pas identique !';

    // Condition pour checker si les conditions on été acceptez
    } else if (!accept) {
        // Gestion du flash (error)
        flash.style.color = 'red';
        flash.innerText = 'Vous devez acceptez les conditions !';

    // Et si toute les conditions son respecter alors on envoit le formulaire
    } else if (pass.match(regex) && pass === passConfirm && accept === true) {
        alert("Confirmer l'envoir du formulaire");
        // C'est ici que le formulaire s'envoie
        form.submit();

    }
}

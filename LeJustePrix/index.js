// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Etape 2 - Cacher l'erreur
error.style.display = 'none';


// Etape 3 - Générer un nombre aléatoire
let rand_int = Math.floor(Math.random() * Math.floor(1000));


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
is_number = false;

input.addEventListener('keyup', () => {
    if(Number.isInteger(parseInt(input.value, 10))){
        is_number = true;
        error.style.display = 'none';
        input.classList.remove('border-danger');
    }else{
        is_number = false;
        error.style.display = 'inline';
        input.classList.add('border-danger');
    }
});


// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
});


// Etape 6 - Créer la fonction vérifier
function verifier(num, input){
    if(num == true) {
        
    }
}
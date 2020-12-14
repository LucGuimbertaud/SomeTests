// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

let try_game = 0;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let rand_int = Math.floor(Math.random() * Math.floor(1000));
console.log(rand_int)
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
is_number = false;

input.addEventListener("keyup", () => {
  if (Number.isInteger(parseInt(input.value, 10))) {
    is_number = true;
    error.style.display = "none";
    input.classList.remove("border-danger");
  } else {
    is_number = false;
    error.style.display = "inline";
    input.classList.add("border-danger");
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if(is_number == 'false'){
    error.style.display = "inline";
    input.classList.add("border-danger");
  }else{
    verifier(input.value);
  }
});

// Etape 6 - Créer la fonction vérifier


function verifier(input) {
    let instruction;
    switch (true) {
        case ( input > rand_int):
            try_game++;
            instruction = document.createElement('div');
            instruction.className = 'instruction moins';
            instruction.textContent = '#' + try_game + ' ( ' +input+ ' ) ' + ' C\'est plus petit !'; 
        break;

        case (input < rand_int):
            try_game++;
            instruction = document.createElement('div');
            instruction.className = 'instruction plus';
            instruction.textContent = '#' + try_game + ' ( ' +input+ ' ) ' + ' C\'est plus grand !'; 
        break;

        case (input == rand_int):
            try_game++;
            instruction = document.createElement('div');
            instruction.className = 'instruction fini';
            instruction.textContent = '#' + try_game + ' ( ' +input+ ' ) ' + ' Vous avez trouvé !'; 
        break;
        default:
            console.log('error');
            break;
    }
    document.querySelector('#instructions').prepend(instruction);
}

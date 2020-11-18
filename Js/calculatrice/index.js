
let validate;
let nombre;
let multiplicateur;


switch (choixMode()) {
    case 1:
        nombre = prompt('Quel nombre souhaitez-vous additioner ?');
        multiplicateur = prompt('Par combien ?');
        if(addition(nombre, multiplicateur) == 'Erreur'){
            alert('Une erreur est survenue');
        }else{
            alert(nombre + ' + ' + multiplicateur + ' = ' + addition(nombre, multiplicateur));
        }
    break;
    case 2:
        nombre = prompt('Quel nombre souhaitez-vous soustraire ?');
        multiplicateur = prompt('Par combien ?');
        if(soustraction(nombre, multiplicateur) == 'Erreur'){
            alert('Une erreur est survenue');
        }else{
            alert(nombre + ' - ' + multiplicateur + ' = ' + soustraction(nombre, multiplicateur));
        }
    break;
    case 3:
        nombre = prompt('Quel nombre souhaitez-vous multipliez ?');
        multiplicateur = prompt('Par combien ?');
        if(multiplication(nombre, multiplicateur) == 'Erreur'){
            alert('Une erreur est survenue');
        }else{
            alert(nombre + ' * ' + multiplicateur + ' = ' + multiplication(nombre, multiplicateur));
        }
    break;
    case 4:
        nombre = prompt('Quel nombre souhaitez-vous divisez ?');
        multiplicateur = prompt('Par combien ?');
        if(division(nombre, multiplicateur) == 'Erreur'){
            alert('Une erreur est survenue');
        }else{
            alert(nombre + ' / ' + multiplicateur + ' = ' + division(nombre, multiplicateur));
        }
    break;

}


function choixMode(){
    let mode;
    do {
        validate = true;
        mode = prompt('Selectionnez le mode de calcul : \n \n 1 - Addition \n 2 - Soustraction \n 3 - Multiplication  \n 4 - Division');
        if(mode>4 || mode<=0){
            validate = false;
        }
    } while (mode == null || mode == "" || validate == false);
    return parseInt(mode);
}



function addition(nombre, multiplicateur){
    if(nombre == '' || nombre == null || multiplicateur == '' || multiplicateur == null){
        return 'Erreur';
    }else{
        return parseInt(nombre) + parseInt(multiplicateur);
    }
}

function soustraction(nombre, multiplicateur){
    if(nombre == '' || nombre == null || multiplicateur == '' || multiplicateur == null){
        return 'Erreur';
    }else{
        return parseInt(nombre) - parseInt(multiplicateur);
    }
}

function multiplication(nombre, multiplicateur){
    if(nombre == '' || nombre == null || multiplicateur == '' || multiplicateur == null){
        return 'Erreur';
    }else{
        return parseInt(nombre) * parseInt(multiplicateur);
    }
}

function division(nombre, multiplicateur){
    if(nombre == '' || nombre == null || multiplicateur == '' || multiplicateur == null || multiplicateur == "0"){
        return 'Erreur';
    }else{
        return parseInt(nombre) / parseInt(multiplicateur);
    }
}
class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }


    evoluer(){
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }

    verifierSante(){
        if(this.sante <=0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu !");
        }
    }

    get informations(){
        console.log(this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau +".");
    }
}


class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "magicien", 170, 90, 1);
    }

    attaquer(personnage){
        personnage.sante = personnage.sante - this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo);
        console.log(personnage.pseudo + " reçoit " + this.attaque + " points de dégats");
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage){
        personnage.sante = personnage.sante - (this.attaque * 5);
        console.log(this.pseudo + " attaque " + personnage.pseudo);
        console.log(personnage.pseudo + " reçoit " + this.attaque + " points de dégats");
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50, 1);
    }

    attaquer(personnage){
        personnage.sante = personnage.sante - this.attaque;
        console.log(` ${this.pseudo} attaque ${personnage.pseudo}`);
        console.log(personnage.pseudo + " reçoit " + this.attaque + " points de dégats");
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage){
        personnage.sante = personnage.sante - (this.attaque * 5);
        console.log(this.pseudo + " attaque " + personnage.pseudo);
        console.log(personnage.pseudo + " reçoit " + this.attaque + " points de dégats");
        this.evoluer();
        personnage.verifierSante();
    }
}


let Louis = new Magicien('Louis');
let Enzo = new Guerrier('Enzo');

Louis.attaquer(Enzo);
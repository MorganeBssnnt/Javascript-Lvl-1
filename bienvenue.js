//Écrivez un programme qui demande à l'utilisateur de saisir son nom et de lui afficher son nom avec le message de bienvenue.
//Résultat attendu dans le terminal : Bienvenue Julien !

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let prenomDonne;

function sayHello(prenom){ 
    console.log("Bienvenue " + prenom);
}

readline.question("What's your name ?", prenom=> {
    prenomDonne = prenom;
    sayHello(prenomDonne);
    readline.close();
});



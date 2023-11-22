// Programme qui demande de saisir un nombre et qui affiche si ce nombre est pair ou impair.

const ps=require('prompt-sync')();

// Entrer un nombre
const nombre = Number(ps("Entrez un nombre"));
console.log(nombre);

// Vérifier si le nombre est pair ou impair
if (nombre % 2 === 0) {
    console.log(nombre + " est un nombre pair.");
  } else {
    console.log(nombre + " est un nombre impair.");
  }
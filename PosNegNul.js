// Programme qui demande un nombre puis vérifie si ce nombre est positif, négatif ou nul.

const ps=require('prompt-sync')();

// Entrer un nombre
const nombre = Number(ps("Entrez un nombre"));
console.log(nombre);

// Vérifier si le nombre est positif, négatif ou nul.
if (nombre > 0) {
    console.log(nombre + " est positif");
  } else if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else if (nombre === 0) {
    console.log(nombre + " est nul");
  }
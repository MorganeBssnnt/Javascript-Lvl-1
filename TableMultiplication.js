//Programme qui demande un nombre et affiche sa table de multiplication jusqu’à 10.
//Résultat attendu dans le terminal pour la table de 5

const ps=require('prompt-sync')();

// Entrer un nombre
const nombre = Number(ps("Entrez un nombre"));
console.log(nombre);

// Afficher la table de multiplication jusqu'à 10.
for (let i = 1; i <= 10; i++) {
    const resultat = nombre * i;
    console.log(nombre + " * " + i + " = " + resultat);
  }
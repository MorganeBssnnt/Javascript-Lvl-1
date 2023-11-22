// Fonction qui prend un tableau d'entiers en paramètre et renvoie la somme de tous les éléments du tableau.

const ps=require('prompt-sync')();

function sommeTableau(tableau) {
    let somme = 0;
  
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
  
    return somme;
  }
  
  // Exemple
  const ExempleTableau = [1, 2, 3];
  const resultatSomme = sommeTableau(ExempleTableau);
  
  console.log("La somme des éléments du tableau est : " + resultatSomme);
  
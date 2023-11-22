//Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. 
//L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.

const ps=require('prompt-sync')();

// Entrer premier nombre
const premierNombre = Number(ps("Entrez le premier nombre"));
console.log(premierNombre);

// Entrer le deuxième nombre
const deuxiemeNombre = Number(ps("Entrez le deuxieme nombre"));
console.log(deuxiemeNombre); 

// Calculer la somme
let somme = premierNombre + deuxiemeNombre;
console.log(somme);

// Afficher le résultat
console.log("La somme de " + premierNombre + " et " + deuxiemeNombre + " est : " + somme);


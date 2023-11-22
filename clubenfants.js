//programme qui demande d'entrer l'âge d'un enfant et qui vérifie dans quel catégorie il est :

const ps=require('prompt-sync')();

// Entrer l'age
const age = Number(ps("Entrez l'age"));
console.log(age);

//catégorie en fonction de l'âge
if (age >= 12) {
    console.log("Catégorie : Cadet");
  } else if (age >= 10) {
    console.log("Catégorie : Minime");
  } else if (age >= 8) {
    console.log("Catégorie : Pupille");
  } else {
    console.log("Catégorie : Poussin");
  }


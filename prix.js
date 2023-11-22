// Demander le prix de fabrication

const ps=require('prompt-sync')();

const prixFabrication = Number(ps("Entrez le prix de fabrication du produit :"));
console.log(prixFabrication);

// Demander le prix de vente
const prixVente = Number(ps("Entrez le prix de vente du produit :"));
console.log(prixVente);

// Vérifier profit ou perte
if (prixFabrication > prixVente) {
  const perte = prixFabrication - prixVente;
  console.log("Perte de " + perte + " euros.");
} else if (prixFabrication < prixVente) {
  const profit = prixVente - prixFabrication;
  console.log("Profit de " + profit + " euros.");
}

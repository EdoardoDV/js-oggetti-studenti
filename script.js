// Esercizio 1
// var studente = {
//   "nome" : "Gennaro",
//   "cognome" : "Piripiello",
//   "eta" : "7"
// }
//
// for (var x in studente) {
//   console.log(studente[x])
// }

// Esercizio 2
// var studenti = [
//   {
//     "nome" : "Ciro",
//     "cognome" : "Priello",
//     "eta" : "35"
//   },
//   {
//     "nome" : "Giacomo",
//     "cognome" : "Vessicchio",
//     "eta" : "72"
//   },
//   {
//     "nome" : "Edoardo",
//     "cognome" : "Dalfovo",
//     "eta" : "28"
//   }
// ];
// for (var i = 0; i < studenti.length; i++) {
//   console.log("nome: " + studenti[i].nome);
//   console.log("cognome: " + studenti[i].cognome);
// }

// Esercizio 3

var studenti = [
  {
    "nome" : "Ciro",
    "cognome" : "Priello",
    "eta" : "35"
  },
  {
    "nome" : "Giacomo",
    "cognome" : "Vessicchio",
    "eta" : "72"
  },
  {
    "nome" : "Edoardo",
    "cognome" : "Dalfovo",
    "eta" : "28"
  }
];
var nuovoStudente = {
  "nome" : prompt("Digita il tuo nome"),
  "cognome" : prompt("Digita il tuo cognome"),
  "eta" : prompt("Digita la tua età")
};
studenti.push(nuovoStudente);
console.log(studenti)

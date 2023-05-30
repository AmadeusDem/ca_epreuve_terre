/**
Puissance d'un nombre

Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/
let args = process.argv;

if (args.length !== 4) {
  printError();
  return;
}

let base = args[2];
let exponent = args[3];

if ((!isNaN(base) && !isNaN(exponent)) && exponent >= 0) {
  console.log(power(base, exponent));
} else {
  printError();
}

function power (base,exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function printError () {
  console.log("erreur.");
}
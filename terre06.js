/**
Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH


$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

*/

let args = process.argv;

// We handle the case where there is no args or too much args
if(args.length !== 3){
  console.log("Usage: node terre06.js \"A string to revert\"");
  return;
}

let userString = args[2];
let invertedString = "";

// We invert the string by starting from the end of it
for (let i = userString.length - 1; i >= 0; i--) {
  invertedString += userString[i];
}

console.log(invertedString);
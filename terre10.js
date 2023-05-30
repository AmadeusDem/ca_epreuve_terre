/**
Nombre premier

Créez un programme qui affiche si un nombre est premier ou pas.


Exemples d’utilisation :
$> node exo.js 5
Oui, 5 est un nombre premier.

$> node exo.js 6
Non, 6 n’est pas un nombre premier.

Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

 */
const args = process.argv;
let userInput;

if (args.length !== 3) {
  printError();
  return;
}

userInput = parseInt(args[2]);
if (!isNaN(userInput) && userInput > 1) {
  primeNumber(userInput) ? console.log(`Oui, ${userInput} est un nombre premier.`) : console.log(`Non, ${userInput} n'est pas un nombre premier`);  
} else {
  printError();
  return;
}

function primeNumber(number) {
  let prime = true;
  for (let i = 2; i <= Math.floor(squareRoot(number)); i++) {
    prime = !((number % i) === 0);
  }
  return prime;
}

function printError() {
  console.error("Erreur.");
}

function squareRoot(number) {
  // We can return directly if the number is equal to 0 or 1.
  if (number === 0 || number === 1) {
    return number;
  }
  let i = 1;
  let result = 0;
  while (result < number) { // We use i += 0.1 to be more precise in the result
    result = i * i;
    i += 0.1;
  }
  return i - 0.1;
}
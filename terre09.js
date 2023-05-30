/**
Racine carrée d'un nombre

Créez un programme qui affiche la racine carrée d’un entier positif.


Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

let args = process.argv;
let number;

if (args.length !== 3) {
  printError();
  return;
}

number = parseFloat(args[2]);

if (!isNaN(number) && number > 0) {
  console.log(squareRoot(number));
} else {
  printError();
}

function printError () {
  console.log("erreur.");
}

function squareRoot (number) {
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

/** function squareRoot (number) {
  let randomNumber = Math.random() * number;
  let tempResult;
  let result;
  for (let i = 0; i < 10; i++) {
    tempResult = number / randomNumber;
    randomNumber += tempResult;
    randomNumber /= 2;
  }
  result = randomNumber;
  return result;
}
*/
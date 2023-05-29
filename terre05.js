let args = process.argv;
let firstNumber;
let secondNumber;
let result;
let remainder;


if (args.length !== 4) { // Error and return in case there is not enough args or too much args
  printError();
  return;
}

firstNumber = parseInt(args[2]); // We transforn the numbers that are arguments in Integers
secondNumber = parseInt(args[3]);

if ((isNaN(firstNumber) && isNaN(secondNumber)) || secondNumber === 0) { // 
  printError();
  return;
}

result = Math.floor(firstNumber / secondNumber); // We divide the numbers we got in argument and floor it
remainder = firstNumber % secondNumber;

if (result !== 0) {
  console.log("Résultat: " + result);
  console.log("Reste: " + remainder);
} else {
  printError();
}

function printError() {
  console.log("erreur");
}
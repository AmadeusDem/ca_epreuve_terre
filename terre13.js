/**
Trouver la Suisse

Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.


Exemples d’utilisation :
$> ruby exo.rb 11 40 34
34

$> ruby exo.rb 2 1 3
2

$> ruby exo.rb 2 2 2
erreur.
 */

const args = process.argv;

if (args.length !== 5) {
  printError();
  return;
}

const findMiddleValue = (number1, number2, number3) => {
  if (number1 === number2 && number1 === number3) {
    return 0;
  }
  if (number1 > number2) {
    if (number2 > number3) {
      return number2;
    } else if(number3 > number1) {
      return number3;
    } else {
      return number1;
    }
  } else {
    if (number1 > number3) {
      return number1;
    } else if (number2 > number3) {
      return number3;
    } else {
      return number2;
    }
  }
}
let number1 = parseInt(args[2]),
    number2 = parseInt(args[3]),
    number3 = parseInt(args[4]);
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
  printError();
  return;
}
let test = findMiddleValue(number1, number2, number3);
if(test !== 0){
  console.log(test);
} else {
  printError();
} 

function printError() {
  console.error("Erreur.");
}



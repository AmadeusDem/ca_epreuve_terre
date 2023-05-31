/**
Trié ou pas

Créez un programme qui détermine si une liste d’entiers est triée ou pas.

Exemples d’utilisation :
$> ruby exo.rb 9 8 3
Pas triée !

$> ruby exo.rb 3 8 9 12
Triée !

$> ruby exo.rb “Salut”
erreur.
 */

const args = process.argv;
let sorted = true,
    previousNumber = 0;

if (args.length < 4) {
  printError();
  return;
}

previousNumber = parseInt(args[2]); // We keep in a variable the first number in the args

// Then we compare each number in args with the previous one.
// While the previous number is less than the current args it's sorted
for (let i = 3; i < args.length; i++) { 
  if (isNaN(previousNumber) || isNaN(parseInt(args[i]))) { // If there is something else than digits
    printError();
    return;
  }
  if (previousNumber > parseInt(args[i])) {
    sorted = false;
  }
  previousNumber = parseInt(args[i]);
}
sorted ? console.log("Sorted !") : console.log("Not sorted !");

function printError() {
  console.error("Error.");
}
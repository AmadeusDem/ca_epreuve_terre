/**
* Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


Exemples d’utilisation :
$> python exo.py “Hello world!”
12


$> python exo.py
erreur.


$> python exo.py “Bonjour” “Aurevoir”
erreur.

$> python exo.py 10
erreur.

*/
function printError() {
  console.log("erreur.");
}

let args = process.argv;
let userString;

if (args.length !== 3) {
  printError();
  return;
}

userString = args[2];

if (isNaN(userString)) {
  console.log(userString.length);
} else {
  printError();
}







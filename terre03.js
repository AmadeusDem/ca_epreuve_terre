/**
Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>


Attention : votre programme devra utiliser une boucle.

*/

let charArg;
let codeAsciiChar;
let alphabet = '';

// We check for the length of the arguments to be sure to have only one argument
if(process.argv.length === 3) {
  charArg = process.argv[2];
  codeAsciiChar = charArg.charCodeAt();

  if(codeAsciiChar > 96 && codeAsciiChar < 123) {
    for (let i = codeAsciiChar; i < 123; i++) {
      alphabet += String.fromCharCode(i);
    }
    console.log(alphabet);
  } else {
    console.log('The argument you entered is not a letter in lower case')
  }

} else {
  console.log('You need to precise one character');
}


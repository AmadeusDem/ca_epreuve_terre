/**
Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


Exemples d’utilisation :
$> ruby exo.rb 2
pair

$> ruby exo.rb 5
impair


$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.

$> ruby exo.rb
Tu ne me la mettras pas à l’envers.


Attention : gérez aussi les entiers négatifs. 

*/

let args = process.argv;

if (args.length === 3) {
  let userInput = parseInt(args[2]);
  if (!isNaN(userInput)) {
    if ((Math.abs(userInput)) % 2 === 0) {
      console.log("pair");
    } else {
      console.log("impair");
    }
  } else {
    console.log("Tu ne me la mettras pas à l'envers.");
  }
} else {
  console.log("Tu ne me la mettras pas à l'envers");
}
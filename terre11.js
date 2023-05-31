/**
24 to 12
Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


Exemples d’utilisation :
$> ruby exo.rb 23:40
11:40PM

Attention : midi et minuit.

*/
const args = process.argv;
let inputHour;
let convertedHour;

if (args.length !== 3) {
  printError();
  return 0;
}

inputHour = args[2];

//If the argument is only a number we print an error
if (!isNaN(inputHour)) {
  printError();
  return 0;
}

convertedHour = convert24to12(inputHour);

if (convertedHour === 0) {
  printError();
} else {
  console.log(convertedHour);
} 


function convert24to12(hour) {
  let splittedHour = hour.split(':');

  // We do verification on the format after we splitted it. We check the size of the array and the two values inside the araray
  if (splittedHour.length !== 2 || isNaN(parseInt(splittedHour[0])) || isNaN(parseInt(splittedHour[1]))) {
    printError();
    return 0;
  }

  let hours = parseInt(splittedHour[0]);
  let minutes = parseInt(splittedHour[1]);
  let amOrPm;

  // We check if the hours and the minutes are realistic
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    printError();
    return 0;
  }

  amOrPm = hours >= 12 ? "pm" : "am";
  hours = (hours % 12) || hours;
  if(hours === 0) hours = 12;

  return `${hours}:${minutes}${amOrPm}`;

}

function printError() {
  console.error("Error. The format used is not valid. Usage: node terre11.js 23:40");
}

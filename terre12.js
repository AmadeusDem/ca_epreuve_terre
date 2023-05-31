/**
12 to 24

Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


Exemples d’utilisation :
$> ruby exo.rb 11:40PM
23:40

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

convertedHour = convert12to24(inputHour);

if (convertedHour === 0) {
  return;
} else {
  console.log(convertedHour);
} 

function convert12to24(hour) {
  let [hours, minutes] = hour.split(':'); // We use destructuring to get hours and minutes
  let amOrPm = minutes.match(/[a-zA-Z]+/g);
  minutes = minutes.replace(amOrPm,"");

  // We check to see if there is a modifier (am or pm) after the hour and if it is correct
  if (amOrPm === null || (amOrPm[0].toLowerCase() !== "am" && amOrPm[0].toLowerCase() !== "pm")) {
    printError();
    return 0;
  } else {
    amOrPm = amOrPm[0]; 
  }

  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
    printError();
    return 0;
  }

  minutes = parseInt(minutes);

  if (hours === "12") {
    hours = 0;
  }

  if (amOrPm === "pm") {
    hours = parseInt(hours) + 12;
  }

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  
  return `${hours}:${minutes}`;
}

function printError() {
  console.error("Error. The format used is not valid. Usage: node terre12.js 11:40PM");
}

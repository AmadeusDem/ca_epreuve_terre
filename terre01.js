/**
Créez un programme qui affiche son nom de fichier.


Exemples d’utilisation :
$> node exo.js
exo.js

$> node crevette.js
crevette.js

 */

let fileName = process.argv[1].split('/').slice(-1)[0];
console.log(fileName);

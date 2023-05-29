/**
Créez un programme qui affiche son nom de fichier.


Exemples d’utilisation :
$> node exo.js
exo.js

$> node crevette.js
crevette.js

 */

let path = process.argv[1];
console.log(path.split('/')[6]);
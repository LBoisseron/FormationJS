//alert('Mon fichier JS fonctionne !')

// 2 slash pour faire un commentaire uniligne

/*
Ici je peux faire un commentaire sur plusieurs lignes

RACCOURCI:
- CTRL + 
- SHIFT + ALT + A

*/

// -- 1 : Déclarer une variable JS
var prenom;

// -- 2 : Affecter une valeur à la variable "prenom"
prenom = 'Léna';

// -- 3 : Afficher la valeur de la variable dans la console 
console.log(prenom);

// console.log(Prenom); Uncaught ReferenceError: Prenom is not defined. Car JS est sensible à la casse. pas d'accent dans les noms de variables.



/*
                    LES TYPES DE VARIABLES
*/ 
// typeof permet de connaître le type de la variable
console.log(typeof prenom); // ma variable prenom contient une chaîne de caratère (string) (--> du texte)

var age = 40; //-- déclaration et affectation d'un nombre 

// connaître son type
console.log(age);
console.log(typeof age);

// les variables de type FLOAT
var uneDecimale = -1.979;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// Les Booléens (vrai / faux)
var unBooleen = false; // true
console.log(unBooleen);
console.log(typeof unBooleen);

// Les constantes
// on va attribuer une valeur qui ne pourra pas être modifiée. la déclaration 'const' me permet de créer une constante accessible UNIQUEMENT en lecture.
const host = 'localhost';
const user = 'root';
const password = 'mysql';

// A NE PAS FAIRE 
// user = Lena;
// Uncaught ReferenceError: Lena is not defined

var unNombre = '24';
console.log(unNombre);
console.log(typeof unNombre); // Petite subtilité, unNombre est ici de type "string" à cause des quotes au moment de l'affectation.

// pour convertir un nombre entier (Integer, ou Int)
unNombre = parseInt (unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// pour convertir un FLOAT (nombre à virgule)
unNombre = '12.55';
unNombre = parseFloat (unNombre);
console.log(unNombre);
console.log(typeof unNombre);

/*
                    LA PORTEE DES VARIABLES
*/
// les variables déclarées directement à la racine du fichier JS sont appelées variables globales.
//elles sont donc disponibles dans l'ensemble du document JS, y compris dans les fonctions.

// les variables dévlarées à l'intérieur d'une fonction sont appelées variables locales.
// elles sont disponibles UNIQUEMENT dans le scope de la fonction.

/**-------------------------------------
 *              LES BOUCLES
 ---------------------------------------*/

for ( let i=0 ; i <= 10 ; i++ ) { 
    document.write( '<p>Instruction exécutée : <strong>' + i + '</strong></p>' )
}
document.write('<hr>');
/**
 * Pour i=0;
 * tant que i est strictement inférieur ou égal à 10;
 * alors j'incrémente i de 1.
 */
 // LET remplace le VAR. la valeur ne s'applique que dans la fonction à laquelle il appartient
// ___________________________

 let j = 0;
 /**
  * tant que j est inférieur à 0, j'exécute en boucle
  */
 while ( j <=10 ) {
     document.write('<p>Instruction exécutée : <strong>' + j + '</strong></p>');
     j++; // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION
 }
 document.write('<hr>');


 /**---------------------------------
  *             EXERCICE
  -----------------------------------*/

/**
 * Grâce à une boucle FOR ou autre..., affichez la liste des prénoms dans la console ou sur votre page.
 */

const Prenoms = ['Léna', 'Gérard', 'Khélian', 'Khénaël', 'Hervé', 'Roberte'];

for ( let k=0; k<Prenoms.length; k++ ) { // variante, calcul automatique de la dimension du tableau (.LENGTH)
    document.write(  
     '<p><strong>' + 'Bienvenue' + ' ' + Prenoms[k] + '</strong></p>'
    )
}
document.write('<hr>');

// CORRECTION
//manuellement dans la console
console.log( Prenoms[0]) ;
console.log( Prenoms[1]) ;
console.log( Prenoms[2]) ;
console.log( Prenoms[3]) ;
console.log( Prenoms[4]) ;
console.log( Prenoms[5]) ;
console.log( Prenoms[6]) ;
console.log( '---------') ;

//automatiquement avec une boucle
for ( let index = 0 ; index <= 6 ; index++) {
    console.log( Prenoms[index]);
}

//______________________________

/**
 * EXERCICE
 * créer un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
 * faire une boucle qui contient toutes ces valeurs
 * 
 * 1- prendre chaque valeur séparément
 * 2- addtitionner le 1 avec le 2 et ainsi de suite
 */

const addition = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
/**
 * 
 * console.log(addition);


for (let n=0 ; n<addition.length ; n++) {
    console.log( addition[n] );
}
var somme = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].reduce()
 * 
 */



//CORRECTION

// -- 1. déclarer une variable permettant de garder en mémoire la somme
const somme = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let resultat = 0;
// -- 2. créer une boucle permettant d'additionner les nombres
for (let n=0 ; n<somme.length ; n++) {

// on sait que n prendra successivement les valeurs de 0...10
// comment additionner les valeurs ?
resultat = ( resultat + somme[n] ); // ou alors resultat += somme[n]
}
console.log(resultat);

//_________________________________________

/*
Exercice : Vos meilleurs choix

    Crée un tableau qui contient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/
/**
 * // --1. Créer un tableau avec 3 acteurs
const acteurs = [ 'Idriss ELBA', 'Tyrese GIBSON', 'Chadwick BOSEMAN' ];
for ( let i=0 ; i<acteurs.length ; i++ ) {
    document.write (
        '<p>Le numéro ' + [i+1] + ' ' + 'est ' + acteurs[i] + '. </p>'
    )
}
// I SUCCEEDED !!! SO PROUD OF ME !!!

 */


 // CORRECTION
const acteurs = [ 'Idriss ELBA', 'Tyrese GIBSON', 'Chadwick BOSEMAN' ];
const quantieme = ['Premier', 'Deuxième', 'Troisième'   ]
for ( let i=0 ; i<acteurs.length ; i++ ) {
    document.write (
        '<p>Le ' + quantieme[i] + ' ' + 'est ' + acteurs[i] + '. </p>'
    )
    }
//___________________________________________________

/*
    EXERCICE :
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/

const month = (new Date).getMonth();
console.log(month);
 
const months = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ];
console.log(months[month]);
alert(months[month]);
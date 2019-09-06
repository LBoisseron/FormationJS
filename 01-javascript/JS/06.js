/**-----------------------------------------
 *          LES FONCTIONS
 -------------------------------------------*/

/**
 * déclarer une fonction
 * les instructions ne seront exécutées que lorsque ma fonction sera appelée
 */

function bonjour() {
    // instruction js
    // instruction js
 //   alert('Bonjour !');
    // instruction js
    // instruction js
}

/**
 * j'exécute ma fonction, et je déclenche ses instructions.
 */
bonjour();

/**
 * ici notre fonction 'ditBonjour' définit 2 arguments
 * au moment de l'exécuter nous affecterons une valeur à chaque argument. ainsi prenom = Léna et nom = BOISSERON
 */

function ditBonjour (prenom , nom) {
    console.log(prenom+' '+nom);
    document.write(
        'Bonjour <strong>' 
        + prenom
        + ' '
        + nom
        + '</strong> ! <br>'
    );
}
ditBonjour( 'Lena', 'BOISSERON');
ditBonjour( 'Astrid', 'JONATHAN');

/**
 * EXERCICE :
 * créez une fonction permettant d'effectuer l'addition de 2 nombres (nb1 et nb2)
 */

var nb1, nb2, resultat;
nb1 = 15;
nb2 = 10;

function somme(nb1 , nb2) {
    resultat = nb1 + nb2;
    return resultat; // c'est le return qui va déterminer le rendu de la fonction
};
console.log( somme(nb1 , nb2) );


//correction 
function somme(nb1,nb2) {
    var resultat = nb1 + nb2;
    return resultat; // c'est le return qui va déterminer le rendu de la fonction, une fois qu'elle est exécutée
}
// on détermine l'affichage de la fonction hors de la fonction.
// alert(somme) ou console.log(somme(nb1+nb2)) ou document.write

/**
 * EXERCICE :
 * créez une fonction permettant d'effectuer le calcul de la TVA d'un montant HT
 * sachant que le taux de la TVA peut varier: 5.5% 8.5% 10% 20%
 * retourner le montant TTC
 */

var tva1, tva2, tva3, tva4;
tva1 = 1.055;
tva2 = 1.085;
tva3 = 1.1;
tva4 = 1.2;
montantHT = 100

 function montant (tva1,montantHT) {
    resultat = montantHT*tva1;
    return resultat;
 };
 console.log(montant (tva1,montantHT));

//correction
function calculTva( montantHT, tauxTva = 8.5) {
    return montantHT + ( montantHT * ( tauxTva / 100 ) );
}
var montantTtc1 = calculTva(10);
var montantTtc2 = calculTva(10, 5.5);
var montantTtc3 = calculTva(10, 20);
console.log(montantTtc1);
console.log(montantTtc2);
console.log(montantTtc3);

/**
 * créez une fonction permettant d'effectuer la conversion d'un montant de EURO
 */

 function convertEurToUsd( montantEuro, tauxConversionUsd = 1.1035) {
     return montantEuro * tauxConversionUsd;
 }
 var montantEur = 20 ;
 var montantUsd = convertEurToUsd(montantEur)
 console.log(
     montantEur
        + '€ en dollars donne : '
        + montantUsd
        + '$'
 );
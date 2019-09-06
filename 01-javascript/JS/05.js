/**
 * 
 *          INCREMENTATION ET DECREMENTATION
 * 
 */

 // INCREMENTATION // 

 var nb1 = 1;
 nb1 = nb1 + 1 ;
 // écriture simplifiée
 // la même chose de nb1 = nb1 + 1 ; toujours par étape de 1
 nb1++;

 nb1 = 1;
 nb1 = nb1 + 2;
 // écriture simplifée
 nb1 +=2; // j'ajoute +2 à nb1 identique à nb1 = nb1 + 2;
 nb1 +=5; // j'ajoute +5 à nb1 identique à nb1 = nb1 + 5;

 // DECREMENTATION //
 nnb1 = 1;
 nb1 = nb1 - 1;
  // écriture simplifée
  nb1--

  // ou encore
  nb1 = nb1 - 2;
  // écriture simplifée
  nb1 -=2;
  nb1 -=5;

// SUBTILITE //
nb1 = 0;
nb1++; // nb1 = nb1 + 1
console.log(nb1); // 1

nb1 = 0;
console.log(nb1++); // 0, ici JS affiche d'abord nb1 avant de faire l'incrémentation.
console.log(nb1); // 1

nb1 = 0;
console.log(++nb1); // 1, ici JS fait l'incrémentation avant d'afficher nb1.



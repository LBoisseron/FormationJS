/**
 *              LA CONCATENATION
 * 
 */

 var debutDePhrase = "Aujourd'hui " ;
 var dateDuJour = new Date() ;
 var suiteDePhrase = ', sont présentes : ' ;
 var nbApprenantes = 14 ;
 var finDePhrase = ' apprenantes.<br>' ;

 /**
  * Nous souhaitons maintenant, grâce à la concaténation afficher le tout en une phrase sur notre page !
  */

  document.write(
    debutDePhrase    + dateDuJour.getDate()
                     + '/'
                     + (dateDuJour.getMonth() + 1)
                     + '/'
                     + dateDuJour.getUTCFullYear()
                     + suiteDePhrase
                     + nbApprenantes
                     + finDePhrase
  );

  /**
   * ici, notre variable dateDuJour nous donne accès aux fonctions de l'objet date.
   * grâce au point '.' je peux utiliser ces fonctions
   */
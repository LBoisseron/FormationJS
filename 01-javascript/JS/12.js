/**-----------------------------------
 *          LES EVENEMENTS
 -------------------------------------*/

 /**
  * les événements vont me premettre de déclencher une fonction,
  * c'est-à-dire une série d'instructions suite à une action de mon utilisateur
  * 
  * OBJECTIF : être en mesure de capturer ces événements afin d'exécuter une fonction
  * 
  * Les événements : MOUSE
  *     click : au clic sur un élément
  *     double click : au double clic
  *     mouseenter : la souris passe au-dessus d'un élément
  *     mouseleave : la souris sort de l'élément
  *     mouseover : au passage de la souris
  * 
  * Les événements : KEYBOARD
  *     keyup : quand une touche du clavier a été relachée
  *     keydown : quand une touche du clavier a été enfoncée
  * 
  * Les événements : WINDOW 
  *     scroll : défilement de la fenêtre
  *     resize : pour le redimensionnement de la fenêtre 
  * 
  * Les événements : FORM (formulaire)
  *     change : pour les éléments <input> <select> ou <textarea>
  *     submit : à l'envoi (soumission) du formulaire
  *     input : pour capter la saisie d'un utilisateur sur le champ <input>
  * 
  * 
  * ~~~~~~~~~~~~~~~ LES ECOUTEURS D'EVENEMENT ~~~~~~~~~~~~~~~~~~~~~~~
  * 
  * Pour attacher un événement à un élément, ou autrement dit,
  * pour déclarer un écouteur d'événements qui se chargera de déclencher une fonction,
  * je vais utiliser la syntaxe suivante :
  */

  const p = document.getElementById('monParagraphe');

  function changerLaCouleurEnRouge() {
      p.style.color = 'red';
  }

  function changerLaCouleurEnNoir() {
      p.style.color = 'black';
  }

  //p.addEventListener('mouseover', changerLaCouleurEnRouge);
  p.addEventListener('click', changerLaCouleurEnRouge);
  p.addEventListener('mouseleave', changerLaCouleurEnNoir);
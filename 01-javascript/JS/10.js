/**-------------------------------
 *          LE DOM
 ---------------------------------*/
/**
 * le DOM est une interface de développement en JS pout HTML
 * Grâce au DOM, je vais être en mesure d'accéder / modifier mon code HTML.
 * l'objet "document" est le point d'entrée vers mon contenu HTML.
 * chaque page chargée dans mon navigateur a un objet "document"
 */

/**
 * comment puis-je faire pour récupérer les différents éléments de ma page HTML ?
 */

 const bonjour = document.getElementById('bonjour');
 console.log(bonjour);
 /**
  * ------------- document.getElementById()
  * document.getElementById() est une fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : ID
  */

const contenu = document.getElementsByClassName('contenu');
console.log(contenu);
/**
 * -------------- document.getElementsByClassName()
 * document.getElementsByClassName() : c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe
 */

const p = document.getElementsByTagName('p');
console.log(p);
/**
 * ------------document.getElementsByTagName()
 * document.getElementsByTagName() : c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur balise
 */

// N.B : querySelector : document.querySelector()
// https://developer.mozilla.org/en-US/docs/DOM/Document.querySelector
console.log(document.querySelector('#bonjour'));
console.log(document.querySelector('.contenu'));
console.log(document.querySelector('p'));
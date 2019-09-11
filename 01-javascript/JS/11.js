/**--------------------------------------------------------
 *              LA MANIPULATION DES CONTENUS
 ---------------------------------------------------------*/

 // 3 façons de créer une fonction :

 // --1. création d'une fonction qui s'appelle 'l'
 function l(e) {
     console.log(e);
 }

 // --2. identique, sauf que la fonction est stocké dans une variable 'l'
 l = function(e) {
     console.log(e);
 }

 // --3. Identique, mais avec des fonctions fléchés ECMA 6
 l = e => console.log(e);

 // je souhaite récupérer mon lien google.
 const google = document.getElementById('google');
 l(google); // console.log(google)

 // maintenant je souhaite accéder aux infos de ce lien
        // a. : le lien vers lequel pointe la balise
        l(google.href);
        // b. : l'ID de la balise
        l(google.id);
        // c. : la classe de la balise
        l(google.className);
        // d. : le texte de la balise
        l(google.textContent);
        // e. : modifier ce texte ?
        google.textContent = 'Mon lien Google';
        l(google.textContent);


/**------------------------------------------------------
 *          AJOUTER UN ELEMENT DANS MA PAGE
--------------------------------------------------------- */

// je crée un élément span que je stocke dans ma constante
const span = document.createElement ('span');

// je veux donner un ID
span.id = 'monSpan';

// Donner du texte
span.textContent = 'mon joli texte en js'

// j'ai placé à l'intérieur de la balise google mon span
google.appendChild(span); // dans google je place le span

//___________________________

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

const input = document.createElement('input')
input.id = 'monInput';

// ajouter le champ input dans le <body> du doc HTML
document.body.appendChild(input);

// trouver la solution pour récupérer la saisie de l'utilisateur
function afficherLaSaisie() {
    alert(input.value)
}
//permet de déclarer un écouteur d'événement sur le champ input
input.addEventListener('change', afficherLaSaisie)

//______________________________

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

var titre = document.createElement('h1');
titre.id = 'monTitre';
function afficherTitre() {
    document.write ( '<h1><a href="https://google.fr"> Titre de mon article</a></h1>')
}
afficherTitre();

const h1 = document.createElement ('h1');
const a = document.createElement ('a');
a.textContent = 'Les apprenantes sont en forme';
a.href = '#';
h1.appendChild(a); // on place la balise 'a' dans la balise 'h1'
document.body.appendChild(h1); // puis la balise h1 dans la balise 'body'
a.style.color = 'red';
a.style.textDecoration = 'none';
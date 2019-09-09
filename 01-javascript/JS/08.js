/*-------------------------------------
            LES CONDITIONS 
 --------------------------------------*/

 var majoriteLegaleFr = 18;

 if(19 >= majoriteLegaleFr) {
    /**
     * Comme 19 est bien supérieur à 18 (majoriteLegaleFr);
     * alors les instructions de ma condition sont exécutées.
     * Ce qu'il y a entre les accolades.
     */
alert('Bienvenue !')
 };

 if(14 >= majoriteLegaleFr) {
    /**
     * Comme 14 est bien inférieur à 18 (majoriteLegaleFr);
     * alors les instructions ne sont pas exécutées.
    
     */
alert('Bienvenue !');
 } else if (18==majoriteLegaleFr) {
     /**
      * Comme 18 est égal à la majoriteLegaleFr;
      * la condition s'exécute !
      */
     alert("C'est un peu juste non ?!");
 } else { // LE ELSE N'EST PAS OBLIGATOIRE
    /**
     * Si aucune des conditions si dessu n'est validée;
     * alors je rentre dans le ELSE.
     */
    alert("Va voir chez Google si...");
 };

/**-----------------------------------------------------------------------------
  * EXERCICE
  * Créer une fonction permettant de vérifier l'âge d'un visiteur (prompt).
  * s'il a la majorité légale, alors je lui souhaite la bienvenue,
  * sinon, je fais une redirection sur Google après lui avoir signalé le souci
  -------------------------------------------------------------------------------*/

// 1- créer une fonction prompt pour demander l'âge du visiteur
function majorite() {
    var age = parseInt (
    prompt("Bonjour ! Quel âge as-tu ?", '<ton âge>')
    );
console.log(typeof age);

    // 2- si +18, lui souhaiter la bienvenue
    if (age>=18) {
        alert('Bienvenue');
    }
    
    // 3- sinon rediriger vers Google
    else if (age<=18) {
        alert("Googlise-toi")
    }
    }
    majorite();
    
// CORRECTION
// 1- créer une fonction permettant de vérifier l'âge de l'utilisateur
const majLegale = 18;
function utilMaj(age) {
    if(age>=18){
        return true; //oui
    } else {
        return false; //non
    }
}

// 2- demander à l'utilisateur son âge
const ageSaisiParMonUtilisateur = parseInt(
    prompt("Bonjour, Quel âge avez-vous ?", "<Saisissez votre âge>")
);

// 3- Vérifier l'âge (condition)
if (utilMaj(ageSaisiParMonUtilisateur)) { // la condition est mise directement dans la fonction
    alert("Bienvenue sur mon site réservé aux majeurs !")
}else {

    // 4- Redirection en cas d'échec
    alert("Vous devez être majeur pour accéder à ce site.");
    document.location.href = "https://google.fr"; // pour rediriger l'utilisateur vers un autre site document.location.href
}

/**---------------------------------------------------
 *          LES OPERATEURS DE COMPARAISON
 -----------------------------------------------------*/

 /** I -
  * l'opérateur de comparaison "==" (deux fois =) signifie "égal à"
  * il permet de vérifier que 2 variables sont identiques
  * [1= c'est pour une affectation / == c'est une comparaison]
  * 
  * II - 
  * l'opérateur de comparaison de "===" signifie  "strictement égal à"
  * il va comparer la valeur, mais aussi le type !
  * 
  * if (14 == "14") {} true
  * if (14 === "14") {} false
  * if (14 === 14) {} true
  * 
  * III -
  * l'opérateur " != " : différent de
  * l'opérateur " !== " : strictement différent de
  * 
  * if (12 != 14) {} = true
  * if (12 != '14') {} = true
  * if (12 !== '12') {} = true // l'un des critères est différent. donc au final, c'est strictement différent
  */

  /* ----------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

function connect () {
    prompt("Identifiant"[email], '<Votre email>' );
    prompt("Mot de passe"[mdp], 'Votre mot de passe');
}
connect ();

// 1- vérifier login et MP

function connexion () {
    if (connect==true) {
            alert("Bienvenue sur votre profil !");
        }
}
connexion ();

function pasConnexion () {
    if (connect==false) {
         alert("Votre identifiant '/ 'mot de passe est incorrect");
    }
}
pasConnexion ();

// CORRECTION


// -- 1. Demander à l'utilisateur son email / mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.
// If imbriqué...
if ( email === emailPrompt ) {
    if(mdp === mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email === emailPrompt && mdp === mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

// -- Avec les fonctions
function connexion( emailUser, mdpUser ) {
    if ( email === emailUser && mdp === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");
}



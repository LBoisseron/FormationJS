 /**
  * Votre mission, que vous devez accepter ! 
Réaliser une fonction permettant à un internaute de : 
- Saisir son Prénom dans un Prompt 
- Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ? 
- Saisir son Age 
- Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE]. 
- Afficher ensuite un récapitulatif dans la page. 
Bonjour [PRENOM], tu as [AGE] ! 
  */ 
 
// -- 1 Création d'une fonction
function presentation() {

// -- 2 Demander à l'utilisateur son prénom via un prompt
var prenom = prompt("Quel est votre prénom ?", '<Votre prénom>');
console.log(prenom);

// -- 3 Je lui demande son âge
var age = parseInt (
      prompt("Bonjour" + prenom + ", Quel âge as-tu ?", '<Votre âge>')
); // le PROMPT induit un string. le ParseInt permet d'obtenir un number. 
console.log(age);
console.log(typeof age);

// -- 4 Déduire l'année de naissance de l'utilisateur
var objetDate = new Date();
var dateDeNaissance = objetDate.getFullYear() - age; // .getFullYear pour déterminer l'année actuelle
alert("Tu es donc née en " + dateDeNaissance);

// -- 5 Afficher le récapitulatif
document.write("Bonjour " + prenom + " tu as " + age + " !") // on aurait pu aussi faire apparaître le message dans une alert
};
presentation();
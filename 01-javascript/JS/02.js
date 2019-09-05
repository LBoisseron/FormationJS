// -- Déclarer un tableau indexé
var monTableau = [];
var myArray = new Array; // Autre notation, mais identique.

monTableau [0] = 'Hugo';
monTableau [1] = 'Rosemaël';
monTableau [2] = 'Aurélie';
monTableau [3] = 'Elodie';

console.log(monTableau);
console.log(monTableau[2]); // Aurélie
console.log(monTableau[3]); // Elodie

var nosPrenoms = [
    'Nia',
    'Catherine',
    'Gaëlle',
    'Cindy',
    'Léna',
    'Astrid'
];
console.log(nosPrenoms);

// -- CREER UN OBJET EN JAVASCRIPT

var coordonnee = {
    prenom : 'Léna',
    nom : 'Boisseron',
    age : 40,
    tel : '0690 42 40 43'
};
console.log(coordonnee);
console.log(coordonnee['prenom']); // [] rappellent la propriété du tableau.
console.log(coordonnee.prenom); // Ecriture à privilégier. mais les 2 sont valables.

// ici, j'ai 1 tableau dans un tableau
// ou encore un tableau à 2 dimensions
var annuaireDesApprenantes =[
    ['Nia', 'VITALIS'],
    ['Angélique', 'JEAN-NOEL']
];

console.log(annuaireDesApprenantes[0][0]); // affiche 'Nia'
console.log(annuaireDesApprenantes[1][0]); // affiche 'Angélique


annuaireDesApprenantes = [
{
    prenom : 'Laureen',
    nom : 'LABUTHIE'
},
{
    prenom : 'Léna',
    nom : 'BOISSERON'
},
{
    prenom : 'Rosemaël',
    nom : 'ANTHONY'
}
];

console.log(annuaireDesApprenantes [1]['prenom']);
console.log(annuaireDesApprenantes [0].prenom);
console.log(annuaireDesApprenantes [2].prenom);
console.log(annuaireDesApprenantes [1].nom);

var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];

console.clear();
console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.nom );

// Cette structure de données s'appelle le format : JSON !
// C'est le format le plus utilisé pour échanger des données.
// Il est facile à reconnaitre, ce sont des objets dans un tableau...

/*
        EXERCICE
réaliser une structure JSON permettant de stocker des recettes de cuisine.
*/

var recetteOmelette = [
{
    nom: 'Omelette fondante',   
    categorie: 'entrée' ,
    dureeCuisson : '12min',     
    niveau: 'facile',
         ingredients : [
        'Oeufs',
        'Fromage râpé', 
        'Crème fraîche',
        'Fines herbes',
        'Sel, poivre',
        ],
    preparation : [
        'Casser les oeufs',
        'Cuire',
        ],
},
];
console.log(recetteOmelette);

/* -----------------------------------
            ~ ~ CONSIGNE ~ ~
    
        Réaliser une structure JSON
        permettant de stocker des
        recettes de cuisine.
----------------------------------- */

var recettes = [
    {
        nom: 'Tiramisu',
        categorie: 'Desserts',
        sousCategorie: 'Gateaux',
        difficulte: 'Facile',
        cout: 'Abordable',
        nbPersonnes: 8,
        specialite: 'Italien',
        cuisson: {
            preparation: 30,
            preparationUnite: 'minutes',
            duree: '',
            temperature: '',
            repos: 120,
            reposUnite: 'minutes',
            total: 150,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Sucre',
                quantite: 80,
                unite: 'g'
            },
            {
                nom: 'Mascarpone',
                quantite: 250,
                unite: 'g'
            },
            {
                nom: 'Café Expresso',
                quantite: 15,
                unite: 'cl'
            },
        ],
        ustensiles: [
            '1 Plat Rectangulaire',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
           {
               description: 'Séparer les blancs des jaunes...',
               photoUrl: 'https://recettes.fr/monetape.jpg'
           },
           {
                description: 'Mélanger les jaunes avec le sucre roux...',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
            {
                description: 'Ajouter le mascarpone au Fouet',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
        ]
    },
    {
        nom: 'Blaf',
        categorie: 'Plats',
        sousCategorie: 'Poissons',
        difficulte: 'Moyen',
        cout: 'Abordable',
        nbPersonnes: 4,
        specialite: 'Antillaise',
        cuisson: {
            preparation: 45,
            preparationUnite: 'minutes',
            duree: '30min',
            temperature: '',
            repos: 0,
            reposUnite: 'minutes',
            total: 75,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Poisson',
                quantite: 4,
                unite: ''
            },
            {
                nom: 'Figue',
                quantite: 12,
                unite: ''
            },
        ],
         ustensiles: [
            '1 Canarie',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
        ]
    }
];

/*un objet respecte toujours le format propriete:valeur
la valeur peut être de plusieurs types :
{
    unBooleen: true,
    unNombre: 18,
    unString: 'Je suis en string',
    unObjet: {
        propriete:valeur
    }
    unTableau: [
        'Mathieu', 'Marc', 'Luc'
    ]
}
*/ 

/*
    Ajouter un élément dans un tableau
*/
   var couleurs = ['Rouge', 'Jaune', 'Vert'] 
   console.log(couleurs);

   couleurs.push('Bleu'); // ajoute un élément à la fin du tableau
   console.log(couleurs);

   couleurs.unshift('Orange'); // ajoute un élément au début du tableau
   console.log(couleurs);

/*
    SORTIR UN ELEMENT DU TABLEAU
La fonction pop() supprime le dernier élément d'un tableau et retourne cet élément
*/

var monDernierElement = couleurs.pop();
console.log(couleurs);
console.log(monDernierElement);

/**
 * la même chose est possible avec le premier élément en utilisant : shift()
 * la fonction splice() vous permet de faire sortir un ou plusieurs éléments du talbeau
 */
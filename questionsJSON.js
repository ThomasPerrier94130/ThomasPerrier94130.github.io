"use strict";

class Question {

    _tabQuestion;

    constructor() {
        this.creerQuestion();
    }

    creerQuestion() {
        this._tabQuestion = [
            {
                question: "Que signifie le mot-clé 'let' en JavaScript ?",
                options: [
                    "Déclare une variable à portée de bloc",
                    "Déclare une constante",
                    "Déclare une variable globale",
                    "Crée une fonction",
                    "Déclare une propriété d’objet"
                ],
                correct: "Déclare une variable à portée de bloc",
                nbrePoints : 2
            },
            {
                question: "Quelle est la sortie de : console.log(typeof null) ?",
                options: [
                    "'null'",
                    "'undefined'",
                    "'object'",
                    "'number'",
                    "'boolean'"
                ],
                correct: "'object'",
                nbrePoints : 4
            },
            {
                question: "Comment convertir une chaîne en nombre en JavaScript ?",
                options: [
                    "Number(chaine)",
                    "parseInt(chaine)",
                    "parseFloat(chaine)",
                    "Toutes ces réponses",
                    "toNumber(chaine)"
                ],
                correct: "Toutes ces réponses",
                nbrePoints : 4
            },
            {
                question: "Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?",
                options: [
                    "push()",
                    "pop()",
                    "shift()",
                    "unshift()",
                    "append()"
                ],
                correct: "push()",
                nbrePoints : 3
            },
            {
                question: "Que retourne la fonction Math.random() ?",
                options: [
                    "Un nombre aléatoire entre 0 et 100",
                    "Un nombre aléatoire entre 0 et 1",
                    "Un nombre entier aléatoire",
                    "Un nombre aléatoire négatif",
                    "Un nombre aléatoire supérieur à 1"
                ],
                correct: "Un nombre aléatoire entre 0 et 1",
                nbrePoints: 2
            },
            {
                question: "Comment afficher un message dans la console ?",
                options: [
                    "print()",
                    "log()",
                    "console.log()",
                    "alert()",
                    "echo()"
                ],
                correct: "console.log()",
                nbrePoints : 1
            },
            {
                question: "Quel opérateur est utilisé pour la comparaison stricte ?",
                options: [
                    "==",
                    "===",
                    "=",
                    "!==",
                    "=>"
                ],
                correct: "===",
                nbrePoints : 1.5
            },
            {
                question: "Comment vérifier si une variable est un tableau ?",
                options: [
                    "typeof variable === 'array'",
                    "variable instanceof Array",
                    "Array.isArray(variable)",
                    "Les deux B et C",
                    "variable.isArray()"
                ],
                correct: "Les deux B et C",
                nbrePoints : 0.5
            },
            {
                question: "Quelle méthode permet de supprimer le dernier élément d’un tableau ?",
                options: [
                    "pop()",
                    "shift()",
                    "splice()",
                    "remove()",
                    "delete()"
                ],
                correct: "pop()",
                nbrePoints : 3
            },
            {
                question: "Comment écrire un commentaire sur une seule ligne ?",
                options: [
                    "# commentaire",
                    "// commentaire",
                    "/* commentaire */",
                    "<!-- commentaire -->",
                    "-- commentaire"
                ],
                correct: "// commentaire",
                nbrePoints : 1.5
            },
            {
                question: "Quelle valeur est considérée comme 'falsy' en JavaScript ?",
                options: [
                    "0",
                    "'' (chaîne vide)",
                    "null",
                    "Toutes les réponses ci-dessus",
                    "true"
                ],
                correct: "Toutes les réponses ci-dessus",
                nbrePoints : 2.5
            },
            {
                question: "Quelle est la portée d’une variable déclarée avec 'var' ?",
                options: [
                    "Portée de bloc",
                    "Portée de fonction",
                    "Portée de module",
                    "Portée globale seulement",
                    "Portée de fichier"
                ],
                correct: "Portée de fonction",
                nbrePoints : 1
            },
            {
                question: "Que fait la méthode 'forEach()' ?",
                options: [
                    "Modifie le tableau original",
                    "Parcourt le tableau sans retourner de valeur",
                    "Retourne un nouveau tableau",
                    "Supprime les éléments du tableau",
                    "Trie le tableau"
                ],
                correct: "Parcourt le tableau sans retourner de valeur",
                nbrePoints : 2.5
            },
            {
                question: "Comment créer une fonction fléchée ?",
                options: [
                    "function maFonction() {}",
                    "() => {}",
                    "=> function() {}",
                    "def () {}",
                    "(=>) {}"
                ],
                correct: "() => {}",
                nbrePoints : 2
            },
            {
                question: "Que retourne 'NaN === NaN' ?",
                options: [
                    "true",
                    "false",
                    "undefined",
                    "Erreur",
                    "NaN"
                ],
                correct: "false",
                nbrePoints : 3
            }
        ];
    }

    get tabQuestion() {
        return this._tabQuestion;
    }

    set tabQuestion(value) {
        this._tabQuestion = value;
    }
}

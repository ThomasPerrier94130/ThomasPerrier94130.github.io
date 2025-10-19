"use strict"

//Mettre votre code JS ici


// OBJ questionJSON
let quizz;
let compteurQU = 0;
let compteurClickFin = 0;
let nbrePoints = 0;
let reponse = null;
let pMessageNote;


function demarrerQuizz() {
    zoneDonnees.style.display = "block";
    quizz = choisirQuHasard();

    creerBouton();
    placeOptions();
    placeTitre();
    creerNumeroQU();

    creerBoutonSuivant();
    creerBoutonAbandon();
    verifieReponseJuste();
}


function quizzContinu() {
    if (compteurQU < 5) {
        supprimerDerniereQU();
        supprimerDernierTitre();
        remettreStyleDefaut();

        const btnSuivant = document.getElementById("btnSuivant");
        if(compteurQU === 4){
            btnSuivant.textContent = "C’est terminé, voyez vos résultats !";
        }

        placeTitre();
        creerNumeroQU();
        placeOptions();
    } else {
        pageResultat();
    }
}

function quizzAbandon() {
        zoneDonnees.style.display = "none";
        if (divResultatFaux) divResultatFaux.style.display = "none";

        let divResultatAbandon = document.createElement("div");
        divResultatAbandon.id = "divResultatAbandon";
        divResultatAbandon.style.display = "block";

        let h1 = document.createElement("h1");
        h1.id = "titreAbandon";
        h1.textContent = "Voici votre resultat meme si vous venez d'abandonner !";

        let p = document.createElement("p");
        p.id = "paraAbandon";
        p.textContent =  "Vous avez " + nbrePoints+" points sur "+ returnNbrePointsTotal() +" cumulés, mais chaque échec est une chance d’apprendre 🌱\n" +
            "Reprenez le quiz et montrez de quoi vous êtes capable ! 🚀"

        let btnRejouer = document.createElement("button");
        btnRejouer.id = "btnRejouer";
        btnRejouer.type = "radio";
        btnRejouer.textContent = "Rejouer ! ";

    btnRejouer.addEventListener("click", () => {cliqueRejouer()});
    // Réafficher ou recréer l’écran d’accueil

    divResultatAbandon.appendChild(h1);
    divResultatAbandon.appendChild(p);
    divResultatAbandon.appendChild(btnRejouer);
    main.appendChild(divResultatAbandon);
}


function cliqueRejouer(){
    // Réinitialiser les variables globales
    compteurQU = 0;
    nbrePoints = 0;
    compteurClickFin = 0;
    reponse = null;
    pMessageNote = "";
    quizz = null;

    // Supprimer les éléments créés pendant le quiz
    const divResultatFaux = document.getElementById("resultat-faux");
    if (divResultatFaux) divResultatFaux.remove();

    const divResultatQuizz = document.getElementById("divResultatQuizz");
    if (divResultatQuizz) divResultatQuizz.remove();

    const divResultatAbandon = document.getElementById("divResultatAbandon");
    if (divResultatAbandon) divResultatAbandon.remove();

    // ️Vider seulement le contenu du questionnaire (pas le reste)
    zoneDonnees.innerHTML = "";
    zoneDonnees.style.display = "none";


    divAcceuil.style.display = "block";
}

function pageResultat() {
    if (compteurClickFin < 1) {
        // div
        let divResultatQuizz = document.createElement("div");
        divResultatQuizz.id = "divResultatQuizz";
        divResultatQuizz.style.display = "block";

        // h1
        let titreResultat = document.createElement("h1");
        titreResultat.id = "titreResultat";
        titreResultat.textContent = "🎯 Voici votre resultat ! ";

        // p
        let p = document.createElement("p");
        p.id = "messageEncouragement";
        p.textContent = "Votre note est de "+ calculNoteFinal() + " sur 100 \n\n" + pMessageNote ;
        divResultatQuizz.appendChild(titreResultat);
        divResultatQuizz.appendChild(p);

        // btn
        let btnRejouer = document.createElement("button");
        btnRejouer.id = "btnRejouer";
        btnRejouer.type = "radio";
        btnRejouer.textContent = "Rejouer ! ";

        divResultatQuizz.appendChild(btnRejouer);
        main.appendChild(divResultatQuizz);

        //enleve les deux autres div
        if (divResultatFaux){
            divResultatFaux.style.display = "none";
        }
        zoneDonnees.style.display = "none";
        compteurClickFin++;
    }
    let btnRejouer = document.getElementById("btnRejouer");
    btnRejouer.addEventListener("click", () => {cliqueRejouer()});
}


//---------------------------------------FIN  function demarrage-----------------------------------

function choisirQuHasard() {
    let questionTab = new Question();
    questionTab = questionTab.tabQuestion;

    let QuTab = [];
    let dejaPris = [];

    while (QuTab.length < 5) {
        let positionQU = Math.floor(Math.random() * 15);
        if (!dejaPris.includes(positionQU)) {
            dejaPris.push(positionQU);
            QuTab.push(questionTab[positionQU]);
            console.log(positionQU);
        }
    }
    // quizz stocke 5 questions
    return new Quiz(QuTab[0], QuTab[1], QuTab[2], QuTab[3], QuTab[4]);
}


//---------------------------------------Supprimer Derniere Question----------------------------------------------------
function supprimerDerniereQU() {
    let tabP = document.querySelectorAll("main #zoneDeDonnees p");
    for (let p of tabP) {
        let input = p.querySelector("input");
        p.textContent = ""; // efface tout le texte et balises
        if (input) p.prepend(input); // remet l'input au début
    }
}

function supprimerDernierTitre() {
    let titre = document.getElementById("questionTitre");
    titre.textContent = "";
}

function remettreStyleDefaut() {
    let inputs = document.querySelectorAll("input");

    let p;
    let divResultatFaux = document.querySelector("#resultat-faux");
    let suiviQU = document.getElementById("suiviQU");

    for (let input of inputs) {
        input.disabled = false;
        input.checked = false;
        p = input.parentElement;
        p.style.color = "";
        p.style.textDecoration = "";
    }
    if (divResultatFaux) {
        divResultatFaux.remove();
    }

    suiviQU.remove();

}

//---------------------------------------FIN Supprimer Derniere Question----------------------------------------------------


//----------------------------Algo REPONSE

// il faut recuperer le texte liee a l'input
function verifieReponseJuste() {
    const inputs = document.querySelectorAll(".pOptions input");
    const v = quizz.recupererTabQuestion;
    let juste  = document.createElement("span");


    for (let input of inputs) {
        input.addEventListener("click", (e) => {
            let compteurClick = 0;
            if (compteurClick >= 1) return;
            compteurClick++;

            const p = e.target.parentElement;
            const reponseChoisie = p.textContent.trim();
            const reponseCorrecte = v[compteurQU].correct.trim();
            p.appendChild(juste);

            // Vérifie la réponse
            if (reponseChoisie === reponseCorrecte) {
                p.style.color = "green";
                juste.textContent = " ✓";
                reponse = true;
                nbrePoints += v[compteurQU].nbrePoints;
            } else {
                p.style.color = "red";
                reponse = false;
                p.style.textDecoration = "line-through";
                juste.textContent = " ✘";

                ajouteDivResultat(v);
            }

            // desactive tout les boutons
            for (let btn of inputs) {
                btn.disabled = true;
            }

            // Passer à la question suivante
            compteurQU++;
        });
    }
}

function calculNoteFinal() {
    let noteFinal = parseFloat((nbrePoints / returnNbrePointsTotal()) * 100);

    if (noteFinal >= 0 && noteFinal < 30){
        pMessageNote = "😅 C'est un début, ne t'inquiète pas ! Il y a encore de la place pour t'améliorer. Essaie encore et tu vas y arriver 💪";
    } else if (noteFinal >= 30 && noteFinal < 60){
        pMessageNote = "📘 Pas mal, mais il y a encore du travail ! Félicitations pour tes efforts 👏. Prends le temps d'étudier un peu plus et tu vas bientôt progresser 🚀";
    } else if (noteFinal >= 60 && noteFinal < 70){
        pMessageNote = "👍 Bien joué ! Tu es sur la bonne voie 🛣️. Un peu plus de révision et tu obtiendras un excellent score la prochaine fois 🏆";
    } else if (noteFinal >= 70 && noteFinal < 85){
        pMessageNote = "🔥 Super boulot ! Tu es presque là 🎯. Continue sur cette lancée et tu vas atteindre l'excellence très bientôt ⭐";
    } else if (noteFinal >= 85 && noteFinal < 95){
        pMessageNote = "🥳 Excellent travail ! Tu as presque tout maîtrisé 💥. Un petit effort supplémentaire et tu seras au top 💫";
    } else if (noteFinal >= 95 && noteFinal <= 100){
        pMessageNote = "🏅 Félicitations ! Tu as fait un travail exceptionnel 🌟. Tu es une vraie star 🌈 Continue comme ça, tu es au sommet 🦾";
    } else {
        pMessageNote = "❌ Note invalide !";
    }

    return noteFinal.toFixed(2);
}

function returnNbrePointsTotal() {
    let nbrePointsTotal = 0;
        nbrePointsTotal += quizz._questionUn.nbrePoints;
        nbrePointsTotal += quizz._questionDeux.nbrePoints;
        nbrePointsTotal += quizz._questionTrois.nbrePoints;
        nbrePointsTotal += quizz._questionQuatre.nbrePoints;
        nbrePointsTotal += quizz._questionCinq.nbrePoints;
    return nbrePointsTotal;
}
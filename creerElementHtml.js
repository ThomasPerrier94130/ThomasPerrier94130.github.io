"use strict"


const divAcceuil = document.createElement("div");
divAcceuil.id = "divAcceuil";
const zoneDonnees = document.getElementById("zoneDeDonnees");
const paraPresentation = document.createElement("p");
const main = document.getElementById("contenuPrincipal")
let divResultatFaux;

lancerCreation();

function lancerCreation (){
    // acceuil
    creerTittreAcceuil();
    creerParaDivAcceuil();
    creerBoutonJouer();
}

//------------------------------------------------Page Acceuil-----------------------------------------------------
function creerTittreAcceuil() {
    let titrePresentation = document.createElement("h1");
    titrePresentation.id = "titrePresentation";
    titrePresentation.textContent = "JEUX QUESTIONNAIRE :)";
    divAcceuil.prepend(titrePresentation);
}


function creerParaDivAcceuil(){
    paraPresentation.id = "paraPresentation";
    paraPresentation.innerHTML = "Je vous invite a participer a un petit jeu-questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions" +
        ". Chaque bonne reponse vous donne un certain nombre de points. A la fin de ce jeux questionnaire. Vous aurez votre resultat final.<br><br> En souhaitant que cela vous plaise <br><br> Bonne chance !";
    divAcceuil.append(paraPresentation);
}

function creerBoutonJouer() {
    let btnJouer = document.createElement("button");
    btnJouer.id = "btnJouer";
    btnJouer.append("Jouer !");
    divAcceuil.append(paraPresentation);
    divAcceuil.append(btnJouer);
    main.append(divAcceuil);

    btnJouer.addEventListener("click", () => {demarrerQuizz();divAcceuil.style.display = "none"});
}
//------------------------------------------------FIN Page Acceuil-----------------------------------------------------

//------------------------------------------------Page Questionnaire-----------------------------------------------------


function creerNumeroQU() {
    let suiviQU = document.createElement("h1");
    suiviQU.id = "suiviQU";

    let v = quizz.recupererTabQuestion;

        suiviQU.textContent = "Question " + (compteurQU + 1)+ " sur 5, pour " + v[compteurQU].nbrePoints + " points !";
        suiviQU.style.textDecoration = "underline";
        zoneDonnees.prepend(suiviQU);
}



// place le titre de chaque qu dans le h2
function placeTitre() {
    let titreQu = document.createElement("h2");
    titreQu.id = "questionTitre";

    let v = quizz.recupererTabQuestion;

    for (let i = 0; i < 1; i++) {
        titreQu.textContent += v[compteurQU].question;
    }
    zoneDonnees.prepend(titreQu);
}


function creerBouton() {
    // porter a voir ici
    divAcceuil.style.display = "none";

    let btnUn;
    let p;
    for (let i = 0; i < 5; i++) {
        btnUn = document.createElement("input");
        btnUn.type = "radio";
        btnUn.name = "reponse";
        btnUn.disabled = false;

        // on met l'input dans le p
        p = document.createElement("p");
        p.className = "pOptions";
        p.append(btnUn);

        // on met le p dans la div
        zoneDonnees.prepend(p);
    }
}

function creerBoutonSuivant() {
    let btnSuivant = document.createElement("button");
    btnSuivant.textContent = "Passer a la prochaine question";
    btnSuivant.id = "btnSuivant";
    zoneDonnees.append(btnSuivant);

    btnSuivant.addEventListener("click", () => {quizzContinu();});
}



function creerBoutonAbandon() {
    let btnAbandonner = document.createElement("button");
    btnAbandonner.id = "btnAbandonner";
    btnAbandonner.textContent = "Abandonner le questionnaire";
    zoneDonnees.append(btnAbandonner);

    btnAbandonner.addEventListener("click", () => {quizzAbandon();});
}

// place les options de chaque qu dans chaque p
function placeOptions() {
    let v = quizz.recupererTabQuestion;
    let tabP = document.querySelectorAll("main #zoneDeDonnees p");

    // place les choix dans dans chaque ligne
    for (let j = 0; j < tabP.length; j++) {
        // afficher sur chaque ligne l'option
        let texte = document.createTextNode(v[compteurQU].options[j]);
        tabP[j].appendChild(texte);
    }
}


// creer la solution si faux
function ajouteDivResultat(tabQuizz) {
    // ajout de la div resultat
    divResultatFaux = document.createElement("div");
    divResultatFaux.id = ("resultat-faux");
    let pSolution = document.createElement("p");
    pSolution.textContent = "La bonne reponse est : " + tabQuizz[compteurQU].correct;

    divResultatFaux.appendChild(pSolution);
    main.appendChild(divResultatFaux);
}


//------------------------------------------------FIN Page Questionnaire-----------------------------------------------------




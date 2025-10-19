"use strict"

class Quiz {

    _questionUn;
    _questionDeux;
    _questionTrois;
    _questionQuatre;
    _questionCinq;



    constructor(questionUn, questionDeux, questionTrois, questionQuatre, questionCinq) {
        this._questionUn = questionUn;
        this._questionDeux = questionDeux;
        this._questionTrois = questionTrois;
        this._questionQuatre = questionQuatre;
        this._questionCinq = questionCinq;
    }


    get questionUn() {
        return this._questionUn;
    }

    set questionUn(value) {
        this._questionUn = value;
    }

    get questionDeux() {
        return this._questionDeux;
    }

    set questionDeux(value) {
        this._questionDeux = value;
    }

    get questionTrois() {
        return this._questionTrois;
    }

    set questionTrois(value) {
        this._questionTrois = value;
    }

    get questionQuatre() {
        return this._questionQuatre;
    }

    set questionQuatre(value) {
        this._questionQuatre = value;
    }

    get questionCinq() {
        return this._questionCinq;
    }

    set questionCinq(value) {
        this._questionCinq = value;
    }

    get recupererTabQuestion (){
        return [this.questionUn,this.questionDeux, this.questionTrois, this.questionQuatre, this.questionCinq];
    }



}

popupInfo("On va apprendre à utiliser l'aide. \n L'aide sera toujours présente si jamais tu es bloqué. Si jamais tu ne trouves \n pas ta réponse demande alors de l'aide aux animateurs. \n Utilise le bouton \"Aide\" en haut pour afficher l'aide.")

// To check the answer
var stringAnswer;

function initAnswer() {
   stringAnswer = "";
}

function checkAnswer() {
    if(stringAnswer === "CHIEN") {
        enable_next();
    }
    else {
        not_good();
    }
}

//------------------------------------------------//
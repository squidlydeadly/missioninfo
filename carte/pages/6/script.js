bootbox.alert({
    message: '<div class="text-center">' + displayInfo("Maintenant, je vais t’apprendre à repérer ce \n qui doit être placé dans une boucle. Commence \n par faire cette activité en utilisant seulement \n les blocs \"Avancer\" et \"Changer la direction\".", true) + '</div>',
    size: "xlarge",
    backdrop: true,
    callback: function(){popupInfo("\nFais ce niveau en utilisant seulement les blocs \n de déplacement \"Avancer\" et \"Changer la direction\".",-1,1);}
});

page_map = [
    {row: 8, col: 8, data: {style: "deb", type: 3}},
    {row: 8, col: 7, data: {style: "2", type: 0}},
    {row: 7, col: 7, data: {style: "2", type: 2}},
    {row: 7, col: 6, data: {style: "2", type: 0}},
    {row: 6, col: 6, data: {style: "2", type: 2}},
    {row: 6, col: 5, data: {style: "2", type: 0}},
    {row: 5, col: 5, data: {style: "2", type: 2}},
    {row: 5, col: 4, data: {style: "2", type: 0}},
    {row: 4, col: 4, data: {style: "2", type: 2}},
    {row: 4, col: 3, data: {style: "2", type: 0}},
    {row: 3, col: 3, data: {style: "2", type: 2}},
    {row: 3, col: 2, data: {style: "2", type: 0}},
    {row: 2, col: 2, data: {style: "fin", type: 2}}
];

infoList = [
    "As-tu pensé à vérifier les consignes ? Pour les consulter, appuie sur le bouton \"info\" !",
    "As-tu pensé à vérifier si ton programme respecte les demandes de Robotino ?",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
    "As-tu pensé demander de l'aide à une autre équipe ?",
    "As-tu pensé demander à ton enseignant ?",
];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}
popupInfo("\nIci, tu dois aider Robotino à se rendre jusqu'à l'antenne.\n **Attention, tu as le droit à un maximum de 18 blocs !**");

page_map = [
    {row: 2, col: 0, data: {style: "deb", type: 1}},
    {row: 2, col: 1, data: {style: "1", type: 1}},
    {row: 2, col: 2, data: {style: "2", type: 2}},
    {row: 3, col: 2, data: {style: "1", type: 0}},
    {row: 4, col: 2, data: {style: "2", type: 0}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "2", type: 2}},
    {row: 5, col: 4, data: {style: "1", type: 0}},
    {row: 6, col: 4, data: {style: "4", type: 0}},
    {row: 6, col: 5, data: {style: "2", type: 3}},
    {row: 5, col: 5, data: {style: "1", type: 0}},
    {row: 4, col: 5, data: {style: "2", type: 1}},
    {row: 4, col: 6, data: {style: "1", type: 1}},
    {row: 4, col: 7, data: {style: "2", type: 2}},
    {row: 5, col: 7, data: {style: "1", type: 0}},
    {row: 6, col: 7, data: {style: "2", type: 0}},
    {row: 6, col: 8, data: {style: "1", type: 1}},
    {row: 6, col: 9, data: {style: "2", type: 2}},
    {row: 7, col: 9, data: {style: "1", type: 0}},
    {row: 8, col: 9, data: {style: "fin", type: 0}},

    {row: 7, col: 4, data: {style: "1", type: 0}},
    {row: 8, col: 4, data: {style: "roche", type: 3}},
    {row: 6, col: 3, data: {style: "1", type: 1}},
    {row: 6, col: 2, data: {style: "roche", type: 0}},

    // {row: 2, col: 6, data: {style: "3", type: 2, treasure: true}},


];

Maxblock = 18;

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
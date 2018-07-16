popupInfo("\n Fais avancer et tourner Robotino, jusqu’à la case verte, \n à l’aide du bloc avancer et du bloc changer la direction !");

page_map = [
    {row: 4, col: 2, data: {style: "deb", type: 1}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "1", type: 1}},
    {row: 4, col: 5, data: {style: "1", type: 1}},
    {row: 4, col: 6, data: {style: "fin", type: 3}}
];

function allLoaded() {  // Changer et mettre a jour le bon nombre de progressions dans l'activité (modifié 2018-07-16)
    createButtons(9);
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
    autoResize();
}
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}
popupInfo("J'ai ma tête et mon corps, mais il me manque mon petit chapeau, \net mes yeux ! Mon chapeau est constitué de petits ronds oranges \net mes yeux sont bleus, retrouve-les !\n**Utilises les blocs \"OU\" et \"ET\" et un maximum de trois blocs \"si...faire\" !**",4);

required_box.push({"name":"OU","value":"||"});
required_box.push({"name":"ET","value":"&&"});

bucketsExercise = {
    elems: [
        new TextShape("Chapeau ou Oeil", "#ffffff"),
        new TextShape("Autre Oeil",      "#ffffff"),
        new TextShape("Autre chapeau",   "#ffffff"),
    ],
    rules: [
        "return item.shape == \"eye\" && item.color == \"#0000ff\" || item.shape == \"hat\" && item.color == \"#ffa500\";",
        "return item.shape == \"eye\" && item.color != \"#0000ff\";",
        "return item.shape == \"hat\" && item.color != \"#ffa500\";",
    ]
};

infoList =[

    "As-tu pensé regarder si tu respectes les consignes que Robotino t’as donné ? Si tu ne t’en souviens plus, va voir dans info !",
    "As-tu bien pris connaissance de toutes les conditions disponibles (exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert) ? ",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
    "As-tu pensé demander de l'aide à une autre équipe ?",
    "As-tu pensé demander à ton enseignant ?",
];

logicExercise = new LogicSystem(bucketsExercise);

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

maxBlocks = 3;

function _preload(){
    items.push({"img_url":"../../assets/img/eye.png"             ,"shape":"eye"       ,"color":"#0000ff"});
    items.push({"img_url":"../../assets/img/eye_white.png"       ,"shape":"eye"       ,"color":"#ffffff"});
    items.push({"img_url":"../../assets/img/eye_green.png"       ,"shape":"eye"       ,"color":"#00ff00"});
    items.push({"img_url":"../../assets/img/hat.png"             ,"shape":"hat"       ,"color":"#ffa500"});
    items.push({"img_url":"../../assets/img/hat_red.png"         ,"shape":"hat"       ,"color":"#ff0000"});
    items.push({"img_url":"../../assets/img/hat_graduation.png"  ,"shape":"hat"       ,"color":"#000000"});
    items.push({"img_url":"../../assets/img/hat_blue.png"        ,"shape":"hat"       ,"color":"#0000ff"});

}
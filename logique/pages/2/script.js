popupInfo("\nIl y a beaucoup de choses à trier ... \nRépartis les objets en fonction de leur forme !");

bucketsExercise = {
    elems: [
        new TextShape("Tête", "#fff"),
        new TextShape("Bras",  "#fff"),
        new TextShape("Corps", "#fff"),
        new TextShape("Roue", "#fff"),
    ],
    rules: [
        "return item.shape === \"head\";",
        "return item.shape === \"arm\";",
        "return item.shape === \"body\";",
        "return item.shape === \"leg\";",
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

maxBlocks = 4;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/arm.png"         ,"shape":"arm"    ,"color":"orange"});
    items.push({"img_url":"../../assets/img/body.png"        ,"shape":"body"   ,"color":"white"});
    items.push({"img_url":"../../assets/img/head.png"        ,"shape":"head"   ,"color":"blue"});
    items.push({"img_url":"../../assets/img/helmet_r2d2.png" ,"shape":"head"   ,"color":"blue"});
    items.push({"img_url":"../../assets/img/body_other.png"  ,"shape":"body"   ,"color":"white"});
    items.push({"img_url":"../../assets/img/wheel.png"       ,"shape":"leg"    ,"color":"grey"});
    items.push({"img_url":"../../assets/img/human_head.png"  ,"shape":"head"   ,"color":"beige"});
    items.push({"img_url":"../../assets/img/cylon_head.png", "shape":"head", "color":"blue"});
}
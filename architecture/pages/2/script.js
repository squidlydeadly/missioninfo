// To check the answer
var stringAnswer;
var canvas;
var past_code;

var solution = [
    {"type":"crayon_color","value":"#0000ff"},
    {"type":"avancer","value":4},
    {"type":"tourner","value":90},
    {"type":"avancer","value":4},
    {"type":"tourner","value":90},
    {"type":"avancer","value":4},
    {"type":"tourner","value":90},
    {"type":"avancer","value":4},
    {"type":"crayon_leve","value":true},
    {"type":"avancer","value":2},
    {"type":"crayon_leve","value":false},
    {"type":"crayon_color","value":"#ffff00"},
    {"type":"avancer","value":4},
    {"type":"tourner","value":90},
    {"type":"avancer","value":4},
    {"type":"tourner","value":90},
    {"type":"avancer","value":4},
    {"type":"tourner","value":90},
    {"type":"avancer","value":4}
];
var Crayon;

function initAnswer() {
    console.log("---------------- ANSWER -- ");
    if(past_code===undefined){
        stringAnswer="NOPE";
        return;
    }
    for(var i=0;i<solution.length;i++){
        if(past_code[i]===undefined || past_code[i]["type"]!=solution[i]["type"] || past_code[i]["value"]!=solution[i]["value"]){
            stringAnswer="NOPE";
            return;
        }
        console.log("PASSED N°"+(i));
    }
    stringAnswer = "OK";
}

function checkAnswer() {
    if(stringAnswer === "OK") {
        enable_next();
    }
    else {
        not_good();
    }
}

//------------------------------------------------//
///////////////// Create exercise /////////////////
var axisWidthLength = 16;
var axisHeightLength = 14;
var pxUnit = 50;

const START_COORD = {"x":10,"y":4};

var draw_saved = [];

function setup() {
    var canvas = createCanvas(axisWidthLength * pxUnit, axisHeightLength * pxUnit);
    canvas.parent('sketch-holder');
    noLoop();

    reset(true);
}
function reset(b){
    if(b===undefined){
        b=false;
    }
    fill(250);
    rect(0,0,width,height);
    drawSpaceIndicators();
    drawExercise();
    if(b){
        x=START_COORD['x'];
        y=START_COORD['y'];
        Crayon["rotation"] = 0;
        drawCursor(x,y);
        draw_saved = [];
    }
    fill(0, 0, 0).stroke(0, 0, 0);
}

function drawSpaceIndicators() {
    var sizeSpaceIndicators = 20;
    textAlign(CENTER);
    for (var i = 1; i < axisHeightLength; i++) {
        fill(0, 0, 0).stroke(0, 0, 0).strokeWeight(4)
        line(0, i * pxUnit, sizeSpaceIndicators, i * pxUnit);
        line((axisWidthLength * pxUnit) - sizeSpaceIndicators, i * pxUnit, axisWidthLength * pxUnit, i * pxUnit);

        fill(0, 0, 0).stroke(0, 0, 0, 20).strokeWeight(1)
        line(0, i * pxUnit, axisWidthLength * pxUnit, i * pxUnit);

        fill(0, 0, 0).strokeWeight(0).textSize(18)
        text((axisHeightLength - i), 40, i * pxUnit + 8);

    }
    for (var i = 1; i < axisWidthLength; i++) {
        fill(0, 0, 0).stroke(0, 0, 0).strokeWeight(4)
        line(i * pxUnit, 0, i * pxUnit, sizeSpaceIndicators);
        line(i * pxUnit, (axisHeightLength * pxUnit) - sizeSpaceIndicators, i * pxUnit, axisHeightLength * pxUnit);

        fill(0, 0, 0).stroke(0, 0, 0, 20).strokeWeight(1)
        line(i * pxUnit, 0, i * pxUnit, axisHeightLength * pxUnit);

        fill(0, 0, 0).strokeWeight(0).textSize(18)
        text(i, i * pxUnit, (axisHeightLength * pxUnit) - 30);
    }
    fill(50, 50, 255).strokeWeight(0).textSize(24).textStyle(BOLD);
    text('X', (axisWidthLength * pxUnit) / 2, (axisHeightLength * pxUnit) - 60);
    text('Y', 60, (axisHeightLength * pxUnit) / 2 + 8);
}

function drawExercise() {
    fill(255, 255, 0, 45).noStroke();
    rect(
        4*pxUnit-pxUnit/6,
        (axisHeightLength-8)*pxUnit,
        pxUnit/3,
        4*pxUnit,
        20
    );
    rect(
        4*pxUnit,
        (axisHeightLength-8)*pxUnit-pxUnit/6,
        4*pxUnit,
        pxUnit/3,
        20
    );
    rect(
        8*pxUnit-pxUnit/6,
        (axisHeightLength-8)*pxUnit,
        pxUnit/3,
        4*pxUnit,
        20
    );
    rect(
        4*pxUnit,
        (axisHeightLength-4)*pxUnit-pxUnit/6,
        4*pxUnit,
        pxUnit/3,
        20
    );
    fill(0, 0, 255, 45).noStroke();
    rect(
        10*pxUnit,                              // 10 = Coordonnée X
        (axisHeightLength-4)*pxUnit-pxUnit/6,   // 4  = Coordonnée Y
        4*pxUnit,
        pxUnit/3,
        20
    );
    rect(
        10*pxUnit-pxUnit/6,
        (axisHeightLength-8)*pxUnit,
        pxUnit/3,
        4*pxUnit,
        20
    );
    rect(
        10*pxUnit,
        (axisHeightLength-8)*pxUnit-pxUnit/6,
        4*pxUnit,
        pxUnit/3,
        20
    );

    rect(
        14*pxUnit-pxUnit/6,
        (axisHeightLength-8)*pxUnit,
        pxUnit/3,
        4*pxUnit,
        20
    );
}

function run_exercice_code(obj){
    var past_time_max = time_max;

    updateMaxRange(obj.length+1);

    todo_step = obj.slice(0);
    past_code = obj.slice(0);
    reset(true);
    example_demo = false;
    timer_interval = setInterval(__draw,TIME_BETWEEN_INTERVAL);
    setTimeout(function(){
        example_demo = true;
        todo_step = [];
        updateMaxRange(past_time_max);
        initAnswer();
        checkAnswer();
    },TIME_BETWEEN_INTERVAL*time_max)
}

// /////////////////////////////////////////////////////
// PlayTimer
var current_time = 0;
var time_max = 16;
const TIME_BETWEEN_INTERVAL = 500;

var timer_interval;
var todo_step = null;
var current_step = null;

var example_demo = true;

function updateMaxRange(max){
    time_max = max;
    document.querySelector("#anim-slider").setAttribute("max",max);
}
document.querySelector("#anim-slider").oninput = updateTextRanger;
function updateTextRanger(){
    document.querySelector("#anim-slider-text").innerHTML="Temps = "+(("0"+ document.querySelector("#anim-slider").value).slice(-2));
}

function playAnim(){
    updateMaxRange(solution.length+1);
    todo_step = solution.slice(0);
    draw_saved = [];
    timer_interval = setInterval(__draw,TIME_BETWEEN_INTERVAL);
}

function __draw(){
    current_time++;
    setRange(current_time);
    if(current_time>time_max){
        current_time = 0;
        clearInterval(timer_interval);
        reset(true);
        return;
    }
    current_step = todo_step.shift();
    if(current_step===undefined){
        return;
    }
    console.log(current_step);
    reset();
    for(var i =0;i<draw_saved.length;i++){
        eval(draw_saved[i]);
    }
    switch(current_step["type"]){
        case "avancer":
            var start_x = x;
            var start_y = y;

            x += (Math.sin(radians(Crayon["rotation"]))*current_step["value"]);
            y += (Math.cos(radians(Crayon["rotation"]))*current_step["value"]);

            if(!example_demo && !Crayon["leve"]){
                stroke(Crayon["color"]);
                strokeWeight(14);
                line(start_x*pxUnit,(axisHeightLength-start_y)*pxUnit,x*pxUnit,(axisHeightLength-y)*pxUnit);
                var cmd = "stroke('"+Crayon["color"]+"');strokeWeight(14);line("+start_x+"*pxUnit,(axisHeightLength-"+start_y+")*pxUnit,"+x+"*pxUnit,(axisHeightLength-"+y+")*pxUnit);";
                console.log(cmd);
                draw_saved.push(cmd);
            }
        break;
        case "tourner":
            Crayon["rotation"]+=current_step["value"];
        break;
        case "crayon_leve":
            Crayon["leve"] = current_step["value"];
        break;
        case "crayon_color":
            Crayon["color"] = current_step["value"];
        break;
    }
    drawCursor(x,y);
    console.log("-----------------");
}
function setRange(n){
    var t = document.querySelector("#anim-slider");
    if(n>time_max){
        t.value=0;
    }else{
        t.value=n;
    }
    updateTextRanger();
}
// /////////////////////////////////////////////////////
// Cursor
const SIZE_CURSOR       = 40;

var x = 4;
var y = 4;

function drawCursor(x,y) {
    x = x * pxUnit;
    y = (axisHeightLength - y) * pxUnit;


    translate(x,y);
    rotate(radians(Crayon["rotation"]));
    if(example_demo){
        fill(200,50,50);
    }else{
        fill(100,220,50);
    }

    stroke(0);
    strokeWeight(2);
    var middle_height = Math.sqrt(Math.pow(SIZE_CURSOR,2)-Math.pow(SIZE_CURSOR/2,2));
    triangle(
        0,-middle_height/2,
        SIZE_CURSOR/2,middle_height/2,
        -SIZE_CURSOR/2,middle_height/2
    );

    rotate(radians(-Crayon["rotation"]));
    translate(-x,-y);
}

Crayon = {
    "leve":false,
    "color":"#000000",
    "rotation":0
};


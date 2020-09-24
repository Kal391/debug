/*
    debug exercise
*/

var faceSize = 312;
var x =290;
var y= 250;
function setup() {
    createCanvas(640,480);
}
    function draw() {
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(355, 280, faceSize); // face

    fill(255);
    ellipse (420, 250, 100); // right eye
    ellipse(x, y, 100); // left eye
    ellipse(x, y + 100, 100, 50); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text ("Nice work!", 65, 110);
}

var r = randomNumber(0,255);
var g = randomNumber(0,255);
var b = randomNumber(0,255);


function setup(){
  createCanvas(400,400);
}
function draw(){
r = map(mouseX,0,400,0,255);
g = map(mouseX,100,300,0,255);
b = map(mouseX,200,400,0,255)
background(r,g,b);
ellipse(mouseX,mouseY,50,50);

}

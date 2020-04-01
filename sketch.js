const engine = matter.engine;
const world= matter.world;
const bodies = matter.bodies;



var r = 0;
var g = 50;
var b=255;
var ellipse = 250;


function setup(){
 
  createCanvas(1200,400);
  engine=  engine.create();
  world = engine.world;

  world.add(r);
  world.add(g);
  world.add(b);
  world.add(ellipse);


  r = createSprite(300,200,60,50);
  r.shapColor = red;
  g  =createSprite(360,250,50,60);
  g.shapeColor = green;
  b = createSprite(100,150,70,80);
  b.shapeColor = blue;
  ellipse = createSprite(100,340,20,10);
  ellipse.shapeColor = yelollw;



function draw(){
background("0,0,0");

ellipse.velocityX = World.mouseX;
ellipse.velocityY = World.mouseY;

  if(isTouching(ellipse,r)){
    background.shapeColor = "red";
  }

  else{
    background.shapeColor = "white";  
  }

  if(isTouching(ellipse,g)){
    background.shapeColor = "green";
  }

  else{
    background.shapeClor = "white";
  }

  if(isTouching(ellipse,b)){
    background.shapecolor = "blue";
  }

  else{
    background.shapeColor = "white";
  }

}
};

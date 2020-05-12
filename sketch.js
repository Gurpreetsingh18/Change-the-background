 /*var Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;*/


var ellipse2 = 0;
var ellipse3 = 50;
var ellipse4=255;
var ellipse;
var Engine;
var Matter;
var background;

/*ellipse.velocityX = 2;
ellipse.velocityY = 2;*/

function setup(){
  createCanvas(400,400);
 /* Engine = engine.create();
  World = Engine.world;*/
 
  ellipse2 = createSprite(200,60,10,20);
  ellipse2.shapeColor = "red";
  ellipse3 = createSprite(10,250,10,20);
  ellipse3.shapeColor = "green";
  ellipse4 = createSprite(300,250,10,20);
  ellipse4.shapeColor = "blue";
  ellipse =  new Ellipse(mouseX,mouseY,10,20);
  ellipse.shapeColor = "yellow";
 

}

/*function keyDown(){

    if(keyDown("LEFT_ARROW")) {
    ball.velocityX = -2;
    ball.velocityY = 0;
   }
    
    if(keyDown("RIGHT_ARROW")) {
    ellipse.velocityX = 2;
    ellipse.velocityY = 0; 
    }
    
    if(keyDown("DOWN_ARROW")) {
    ellipse.velocityX = 0;
    ellipse.velocityY = 2;
   } 
   if(keyDown("UP_ARROW")) {
    ellipse.velocityX = 0;
    ellipse.velocityY = -3;
   }
}*/



function isTouching(){
 if(ellipse.isTouching(ellipse2)){
    background("red");
  }

  else{
    background("black");  
  }

  if(ellipse.isTouching(ellipse3)){
    background("green");
  }

  else{
    background("black");
  }

  if(ellipse.isTouching(ellipse4)){
    background("blue");
  }

  else{
    background("black");
  }
}


function draw(){
background("black");
//Engine = engine.update();
ellipse2.display();
ellipse3.display();
ellipse4.display();
ellipse.display();
}

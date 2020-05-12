class Ellipse{
constructor(x,y,width,height){
var options = {
  restitution : 1.0,
  density : 1.0
}

ellipse  = createSprite(mouseX,mouseY,40,options);
//World.add(world,ellipse.body);
//ellipse.position.x = mouseX;
//ellipse.body.position.y = mouseY;
}

display(){
fill("yellow");    
rectMode(CENTER);
rect(mouseX,mouseY,10,20);
}

}

var car,wall
var speed,weight

function setup() {
  createCanvas(800,800);
speed=random(55,90)
weight=random(400,800)
 car=createSprite(50, 200, 50, 50);
 car.velocityX=speed
 wall=createSprite(700,200,60,height/2)
}

function draw() {
  background("pink"); 
 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    
    var deformation=0.5*weight*speed*speed/22509
    text("deformation ="+deformation,200,100)

    if(deformation>180){
      car.shapeColor=color(225,0,0)
      text("car colour is red",150,100)
    }
    
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
      text("car colour is yellow",150,200)

    }

if(deformation<100){
  car.shapeColor=color(0,250,0)
  text("car colour is green",150,300)

}
  }

  
    drawSprites();
}
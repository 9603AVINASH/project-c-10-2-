var ship,ship_moving,edges;
var seaImage;

function preload(){
ship_moving= loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.scale=0.3;
    



  ship=createSprite(50,160,20,50);
  ship.addAnimation("moving",ship_moving);
  edges=createEdgeSprites();

  ship.scale=0.18;
  
  
  
  
}

function draw() {
  background("blue");
  sea.velocityX=-2
  console.log(sea.x);
  if (sea.x<0){
    sea.x=sea.width/8;
  }


 
  drawSprites();

 
}
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;

function preload() {
  trex_running = loadAnimation(
    "assets/trex1.png",
    "assets/trex3.png",
    "assets/trex4.png"
  );
  groundImage = loadImage("assets/ground2.png");

  cloudImage=loadImage("assets/cloud.png");

}

function setup() {
  createCanvas(600, 200);

  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);

  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50;

  //crie um sprite ground (solo)
  ground = createSprite(300, 180, 600, 20);
  ground.addImage(groundImage);
  ground.x = ground.width / 2;
  
  invisibleGround=createSprite(300,190,600,10);
  invisibleGround.visible=false;  
  
}

function draw() {
  background("darkgray");
ground.velocityX= -4;

  //pular quando a tecla espaço for pressionada
  if (keyDown("space") && trex.y >= 160) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;
  if (ground.x < 0){
  ground.x=ground.widht/2;

  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  drawSprites();
  Clouds();
}

function Clouds(){
if(frameCount % 60 ===0){
cloud=createSprite(600,100,50,20);
cloud.velocityX=-3;
cloud.addImage(cloudImage);
cloud.scale=0.9;
cloud.y=Math.round(random (5,350)360,50,50);

}

}


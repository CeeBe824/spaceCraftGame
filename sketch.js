var backgroundImg,iss_Img,Iss,spaceCraft,spaceCraftImg,spaceCraftImg2;



function preload(){
  backgroundImg = loadImage("spacebg.jpg");
  spaceCraftImg = loadImage("spacecraft1.png");
  spaceCraftImg2 = loadImage("spacecraft2.png");
  iss_Img = loadImage("iss.png");
  
  
  }
function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(359,365,50,50);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.2;
  spaceCraft.velocityY = 0;
  
  
  Iss = createSprite(400,200,50,50);
  Iss.addImage(iss_Img);
  Iss.scale=0.6;
}
function draw() {
  background(backgroundImg);  
  console.log(spaceCraft.y);

  if(keyDown(UP_ARROW)){
  spaceCraft.velocityY = -3;
  spaceCraft.addImage(spaceCraftImg2);
  }
  if(spaceCraft.y < 260){
    spaceCraft.velocityY = 0;
    spaceCraft.addImage(spaceCraftImg);
  }
  
  
  
  
  
  drawSprites();
}
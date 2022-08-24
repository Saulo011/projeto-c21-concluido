
var barco2,barco2Img;
var iceberg,icebergImg;
var mar1,mar1Img;

function preload(){
 barco2Img = loadImage("barco2.png");
 icebergImg = loadImage("iceberg.png");
 mar1Img = loadImage("mar1.png");
}

function setup() {

  createCanvas(600,400);

  mar1 = createSprite(500,200);
  mar1.addImage("mar1",mar1Img);
  mar1.scale = 0.5;

  //defina uma posição y inicial
  mar1.y = 100;

  barco2 = createSprite(300,320,20,20);
  barco2.addImage(barco2Img);
  barco2.scale = 0.2;
  
}

 
 function draw() {
  
  background("black");

  //dê velocidade ao mar
  mar1.velocityY = 7

  //trace a condição para reconfigurar para posição inicial
  if (mar1.y>400){
    mar1.y = 100;
  }

  barco2.x = mouseX;
   
  iceberg();
 
  /*if (iceberg.isTouching(barco2)){
    barco2.destroy()
    iceberg.destroy()
    mar1.velocityY = 0
    text("FIM DE JOGO",300,100)
    textSize(20)
  }*/

  drawSprites();

  textSize(15)
  text("sem titulo",300,100,50,50)
}

function iceberg(){
  if (frameCount % 60 === 0){
    rand = Math.round(random(50,400));
    iceberg = createSprite(rand,1,20,20);
    iceberg.addImage(icebergImg);
    iceberg.scale = 0.1;
    iceberg.velocityY=10;
  }
 }
 

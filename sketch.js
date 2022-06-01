var path,boy,cash,diamonds,jewelry,sword,car,spd;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg,carImg,spdImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup,carG,spdG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  carImg = loadImage("download-removebg-preview.png");
  spdImg = loadImage ("boots.png")
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.setCollider ("rectangle",0,0,0,0)
boy.debug = true;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
carG=new Group();
spdG = new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(swordGroup.isTouching(boy) || carG.isTouching(boy)) {
    gameState=END;
  }
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();
    createCar();
    createpwr();


    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();
      treasureCollection= treasureCollection + 150;

    }else if (spdG.isTouching(boy)){
      path.velocityY = path.velocityY *2
      cashG.setVelocityYEach = cashG.setVelocityYEach *4
      diamondsG.setVelocityYEach = diamondsG.setVelocityYEach *4
      jewelryG.setVelocityYEach = jewelryG.setVelocityYEach *4
      swordGroup.setVelocityYEach = swordGroup.setVelocityYEach *4
      carG.setVelocityYEach = carG.setVelocityYEach *4
      spdG.destroyEach();

    } 
       }else if(gameState === END){

        boy.addAnimation("SahilRunning",endImg);

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jewelryG.destroyEach();
        swordGroup.destroyEach();
        spdG.destroyEach();
        carG.destroyEach();
        
        cashG.setVelocityYEach=0;
        diamondsG.setVelocityYEach=0;
        jewelryG.setVelocityYEach=0;
        swordGroup.setVelocityYEach=0;
     
    }

  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }


function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 300;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 300;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 300;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 300;
  swordGroup.add(sword);
  }
}

function createCar(){
  if (World.frameCount % 600 == 0) {
  var car = createSprite(Math.round(random(50, 190)) || Math.round(random(210, 340))  ,40, 10, 10);
  car.addImage(carImg);
  car.scale=0.85;
  car.velocityY = 5;
  car.lifetime = 300;
  carG.add(car);
  }
}

function createpwr(){
  if (World.frameCount % 500 == 0) {
  var spd = createSprite(Math.round(random(50, 350),40, 10, 10));
  spd.addImage(spdImg);
  spd.scale=0.35;
  spd.velocityY = 3;
  spd.lifetime = 300;
  spdG.add(spd);
  }
}
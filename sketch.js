
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var back, backImage;
var bananaGroup, obstacleGroup
var edges;

var score = 0;

function preload(){
  
  backImage = loadImage("jungle.jpg");
  monkey_running = loadAnimation(
  "Monkey_01.png",
  "Monkey_02.png",
  "Monkey_03.png",
  "Monkey_04.png",
  "Monkey_05.png",
  "Monkey_06.png",
  "Monkey_07.png",
  "Monkey_08.png",
  "Monkey_09.png",
  "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}

function setup() {
  
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  back = createSprite(300,200);
  back.addImage(backImage)
  ground=createSprite(400,380,900,10);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}


function draw() {
background("lightgreen");
  
  if(keyDown("space")){
     monkey.velocityY=-15;
   }
 
  monkey.velocityY=monkey.velocityY + 0.75;
  monkey.collide(ground);
  
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  if(monkey.isTouching(bananaGroup)){
    
    bananaGroup.destroyEach();
    score = score+2;
    monkey.scale= monkey.scale+0.001;
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
    
    obstacleGroup.destroyEach();
    score = score-1;
    monkey.scale= monkey.scale-0.002;
   
  }

  if(score<0){
    
    fill("red")
    textSize(20);
    text("you lose",250,225);
    
    bananaGroup.destroyEach();
    bananaGroup.visible=false;
    
    obstacleGroup.destroyEach();
    obstacleGroup.visible=false;
    back.visible = false;
    monkey.destroy();
    monkey.velocityY = 0;
      
  }
  
  if(score>19){
    fill("blue")
    textSize(20);
    text("you win",250,225);
    
    bananaGroup.destroyEach();
    
    
    obstacleGroup.destroyEach();
    
    back.visible = false;
    monkey.destroy();
    monkey.velocityY = 0;
    
  }
  ground.visible = false;
  
  back.velocityX=-3;
  
  if (back.x < 100){
      back.x = back.width/2;
    }
  
  monkey.depth = back.depth;
  monkey.depth +=1;
  
  createBanana();
  createObstacle();
  
  drawSprites();
  
  fill("blue")
  textSize(20);
  text("score: "+ score , 450,50);
  
  
}

function createBanana(){
  if (frameCount % 80 === 0) { 
    
    banana = createSprite(600,250,40,10); 
    banana.y = random(100,180);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6.5;
    
    bananaGroup.add(banana);
    bananaGroup.lifetimeEach=92;
  }
  
}
function createObstacle(){
  if (frameCount % 300 === 0) { 
    
    obstacle = createSprite(600,250,40,10); 
    obstacle.y = random(280,330);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-6.5;
    
    obstacleGroup.add(obstacle);
    obstacleGroup.lifetimeEach=92;
  }
}

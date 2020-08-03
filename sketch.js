//Global Variables
var banana , bananaImage , bananaGroup;
var obstacle , obstacleImage , obstacleGroup;
var back , backgroundImage;
var Score = 1;
var player , playerAnimation , player_running;
var ground,invisibleGround;
function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
}
  function setup() {
  createCanvas(600,300);
  backgroundImage = createSprite(300,300,20,20);
  backgroundImage.addImage("back",backgroundImage);
  backgroundImage.velocityX = -8;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

}


function draw(){
 background(255); 
 if(bananaGroup.isTouching(player)){
  bananaGroup.destroyEach();
   count = count+2;
   switch(Score){
    case 10: player.scale = 0.12;
    case 20: player.scale = 0.14;
    case 30: player.scale = 0.16;
    case 40: player.scale = 0.18;
   }
   if(obstacleGroup.isTouching(player)){
     player.scale = 0.2;
   }
 }
 drawSprites();
}

strocke("white");
textSize(20);
fill("white");
text("Score :",Score,500,50);
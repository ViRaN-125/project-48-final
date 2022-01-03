var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg, zombie, zombieGroup;
var bullets = 6;
var gameState = "beggining";
var life = 5;
var score = 0;

function preload(){
  
  shooterImg = loadAnimation("assets/ani1.png","assets/ani4.png");
  
  shooter_shooting = loadAnimation("assets/ani2.png","assets/ani3.png");

  zombieAni = loadAnimation("assets/zombieAni1.png",
  "assets/zombieAni2.png",
  "assets/zombieAni3.png",
  "assets/zombieAni4.png",
  "assets/zombieAni5.png",
  "assets/zombieAni6.png",);

  healthbar1Ani = loadAnimation(
  "assets/healthbarAni.png",
  "assets/healthbarAni2.png",
  "assets/healthbarAni3.png",
  "assets/healthbarAni4.png",
  "assets/healthbarAni5.png",
  "assets/healthbarAni6.png",
  "assets/healthbarAni7.png",
  "assets/healthbarAni8.png",
  "assets/healthbarAni9.png",
  "assets/healthbarAni10.png",
  "assets/healthbarAni11.png",
  "assets/healthbarAni12.png",
  "assets/healthbarAni13.png",
  "assets/healthbarAni14.png",
  "assets/healthbarAni15.png",);

  bulletImg = loadImage("assets/bulet.png");

  healthbar2Img = loadImage("assets/healthbar2.png");
  healthbar3Img = loadImage("assets/healthbar3.png");
  healthbar4Img = loadImage("assets/healthbar4.png");
  healthbar5Img = loadImage("assets/healthbar5.png");

  ammobar1Img = loadImage("assets/ammobar.png");
  ammobar2Img = loadImage("assets/ammobar2.png");
  ammobar3Img = loadImage("assets/ammobar3.png");
  ammobar4Img = loadImage("assets/ammobar4.png");
  ammobar5Img = loadImage("assets/ammobar5.png");
  ammobar6Img = loadImage("assets/ammobar6.png");

  bgImg = loadImage("assets/bg.png")

  begginingImg = loadImage("assets/beggining.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.3;
  

//creating the player sprite
player = createSprite(displayWidth-1350, displayHeight-300, 50, 50);

begginner = createSprite(displayWidth/2-20,displayHeight/2-40, 50, 50);
begginner.addImage("begginer1",begginingImg);

   player.scale = 1.5;
   player.setCollider("circle",60,0,50);
   


   zombieGroup = new Group();

   healthbar1 = createSprite(displayWidth-450,40,20,20)
   healthbar1.visible = false
    healthbar1.addAnimation("healthbar1",healthbar1Ani);
    healthbar1.scale = 0.7;

    healthbar2 = createSprite(displayWidth-450,40,20,20)
    healthbar2.visible = false
    healthbar2.addImage("healthbar2",healthbar2Img)
    healthbar2.scale = 0.7

    healthbar3 = createSprite(displayWidth-450,40,20,20)
    healthbar3.visible = false
    healthbar3.addImage("healthbar3",healthbar3Img)
    healthbar3.scale = 0.7

    healthbar4 = createSprite(displayWidth-450,40,20,20)
    healthbar4.visible = false
    healthbar4.addImage("healthbar3",healthbar4Img)
    healthbar4.scale = 0.7

    healthbar5 = createSprite(displayWidth-450,40,20,20)
    healthbar5.visible = false
    healthbar5.addImage("healthbar3",healthbar5Img)
    healthbar5.scale = 0.7

    ammobar1 = createSprite(displayWidth-450,100,20,20)
    ammobar1.visible = true
    ammobar1.addImage("ammobar1",ammobar1Img)
    ammobar1.scale = 0.5

    ammobar2 = createSprite(displayWidth-450,100,20,20)
    ammobar2.visible = false
    ammobar2.addImage("ammobar2",ammobar2Img)
    ammobar2.scale = 0.5

    ammobar3 = createSprite(displayWidth-450,100,20,20)
    ammobar3.visible = false
    ammobar3.addImage("ammobar3",ammobar3Img)
    ammobar3.scale = 0.5
    
    ammobar4 = createSprite(displayWidth-450,100,20,20)
    ammobar4.visible = false
    ammobar4.addImage("ammobar4",ammobar4Img)
    ammobar4.scale = 0.5

    ammobar5 = createSprite(displayWidth-450,100,20,20)
    ammobar5.visible = false
    ammobar5.addImage("ammobar5",ammobar5Img)
    ammobar5.scale = 0.5

    ammobar6 = createSprite(displayWidth-450,100,20,20)
    ammobar6.visible = false
    ammobar6.addImage("ammobar6",ammobar6Img)
    ammobar6.scale = 0.5

    bulletGroup = new Group()

}

function draw() {
  background(0); 

  if (gameState === "beggining"){

begginner.visible = true;

ammobar1.visible = false;

if(keyDown("RIGHT_ARROW")){

gameState = "play";
begginner.visible = false;
}

  }

if (gameState === "play") {

  healthbar1.visible = true;
  ammobar1.visible = true;

  if(life===5){
    healthbar1.visible = true
    healthbar2.visible = false
    healthbar3.visible = false
    healthbar4.visible = false
    healthbar5.visible = false
  }
  if(life===4){
    healthbar1.visible = false
    healthbar2.visible = true
    healthbar3.visible = false
    healthbar4.visible = false
    healthbar5.visible = false
  }
  if(life===3){
    healthbar1.visible = false
    healthbar2.visible = false
    healthbar3.visible = true
    healthbar4.visible = false
    healthbar5.visible = false
  }
  if(life===2){
    healthbar1.visible = false
    healthbar2.visible = false
    healthbar3.visible = false
    healthbar4.visible = true
    healthbar5.visible = false
  }
  if(life===1){
    healthbar1.visible = false
    healthbar2.visible = false
    healthbar3.visible = false
    healthbar4.visible = false
    healthbar5.visible = true
  }
  if(life===0){
    gameState = "lost" 
  }

  if(bullets===5){
    ammobar1.visible = true
    ammobar2.visible = false
    ammobar3.visible = false
    ammobar4.visible = false
    ammobar5.visible = false
  }
  if(bullets===4){
    ammobar1.visible = false
    ammobar2.visible = true
    ammobar3.visible = false
    ammobar4.visible = false
    ammobar5.visible = false
  }
  if(bullets===3){
    ammobar1.visible = false
    ammobar2.visible = false
    ammobar3.visible = true
    ammobar4.visible = false
    ammobar5.visible = false
  }
  if(bullets===2){
    ammobar1.visible = false
    ammobar2.visible = false
    ammobar3.visible = false
    ammobar4.visible = true
    ammobar5.visible = false
  }
  if(bullets===1){
    ammobar1.visible = false
    ammobar2.visible = false
    ammobar3.visible = false
    ammobar4.visible = false
    ammobar5.visible = true
    
  }
  if(bullets===0){
    ammobar1.visible = false
    ammobar2.visible = false
    ammobar3.visible = false
    ammobar4.visible = false
    ammobar5.visible = false
    ammobar6.visible = true
    gameState = "lost" 
  }

  if(score==75){
    gameState = "won"
    fill("blue");
    textSize(100);
    text ("You Win!", displayWidth/2 - 150, displayHeight/2);
    zombieGroup.destroyEach();
    zombieGroup.velocityX(0);
    player.destroy();
  }
  
  if (gameState === "lost") {
    fill("red");
    textSize(100);
    text ("You Lost.", displayWidth/2 - 150, displayHeight/2);
    zombieGroup.destroyEach();
    zombieGroup.velocityX(0);
    player.destroy();
    }

    fill ("red");
textSize(50);
    text("score = "+ score,displayWidth-550,175 )
    score.visible = true;
  
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-40
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+40
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.changeAnimation("shooter",shooter_shooting);
 
  bullet = createSprite(player.x + 175,player.y - 25,20,10)
  bullet.addImage("bullet1",bulletImg)
  bullet.scale = 0.1
  bullet.velocityX = 40;
  
  bulletGroup.add(bullet)
  bullets = bullets-1
}


//player goes back to original standing image once we stop pressing the space bar
else {
  player.addAnimation("shooter1", shooterImg);
  player.scale = 1.5;
}



if(zombieGroup.isTouching(player)){
 
  for(var i=0;i<zombieGroup.length;i++){     
       
   if(zombieGroup[i].isTouching(player)){
       zombieGroup[i].destroy();
       life = life -1;
        } 
  }

 }

 if(zombieGroup.isTouching(bulletGroup)){
  for(var i=0;i<zombieGroup.length;i++){     
      
   if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy()
        bulletGroup[i].destroy()
       bullets = bullets + 1;
       score = score + 3;
        } 
  
  }

}

console.log(score);
console.log (bullets);
}

enemy();
drawSprites();

}

function enemy(){
  if(gameState === "play" && frameCount%60===0){

    //giving random x and y positions for zombie to appear
    zombie = createSprite(random(1200,1600),random(100,700),40,40)

    zombie.addAnimation("zombieAnimation", zombieAni)
    zombie.scale = 0.5;
    zombie.velocityX = random(-10, -20);
    
    zombie.setCollider("rectangle",0,0,200,250)
   
    zombie.lifetime = 400
   zombieGroup.add(zombie)
  }

}

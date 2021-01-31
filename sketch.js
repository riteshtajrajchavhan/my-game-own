var backImg;
var score=0;
var gamestate="level1"
var end = 0;


function preload(){
backImg=loadImage("back/ground.png");
roadImg1=loadImage("back/road.png");
roadImg2=loadImage("back/road2.png");
tintImg=loadImage("player/tint.png")
hI=loadImage("back/house.png");
hI2=loadImage("back/house2.png");
playerImg=loadImage("player/player.png");
playerImg2=loadImage("player/player2.png");
playerImg3=loadImage("player/player3.png");
playerImg4=loadImage("player/player4.png");
playerCar=loadImage("player/playerC.png");
aimImg=loadImage("player/aim.png");
wallImg=loadImage("back/wall.png");
housesImg=loadImage("back/houses.png");
housesImg2=loadImage("back/houses2.png");
tImg=loadImage("back/track.png");
trainImg=loadImage("back/train.png");
zombieImg=loadImage("image/zombie.png");
bulletImg=loadImage("image/bullet.png");
leftImg=loadImage("image/left.png");
rightImg=loadImage("image/right.png");
song=loadSound("song.mp3");
shootImg=loadImage("player/shoot.png");
over=loadImage("image/over.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  back=createSprite(displayWidth/2,displayHeight/2-500);
  back.addImage(backImg);
  back.scale=6.9;

  back2=createSprite(displayWidth/2,displayHeight/2-3900);
  back2.addImage(backImg);
  back2.scale=6.9;

  back3=createSprite(displayWidth/2,displayHeight/2-360*20);
  back3.addImage(backImg);
  back3.scale=6.9;


//createing  the road

r1 = new Road(displayWidth/2,displayHeight/2);
r2 = new Road(displayWidth/2-6,displayHeight/2-100*10+30);
r3 = new Road(displayWidth/2-11,displayHeight/2-100*20+40);
r4 = new Road(displayWidth/2-17,displayHeight/2-100*30+50);
r5 = new Road(displayWidth/2-23,displayHeight/2-3900);
r6 = new Road(displayWidth/2-29,displayHeight/2-4900+20);
r7 = new Road(displayWidth/2-26,displayHeight/2-5900+40);
r8 = new Road(displayWidth/2-31,displayHeight/2-6900+60);
r9 = new Road(displayWidth/2-37,displayHeight/2-7900+80);


//createing  houses

h1 = new House1(displayWidth/2-530,displayHeight/2-200);
h2 = new House2(displayWidth/2+430,displayHeight/2-200);
h3 = new House1(displayWidth/2-530,displayHeight/2-2000);
h4 = new House2(displayWidth/2+430,displayHeight/2-2000);
h5 = new House1(displayWidth/2-530,displayHeight/2-3850);
h6 = new House2(displayWidth/2+430,displayHeight/2-3850);
h7 = new House1(displayWidth/2-530,displayHeight/2-5650);
h8 = new House2(displayWidth/2+430,displayHeight/2-5650);
h9 = new House1(displayWidth/2-530,displayHeight/2-7550);
h10 = new House2(displayWidth/2+430,displayHeight/2-7550);

// track and train

t1=createSprite(displayWidth/2,displayHeight/2-1000);
t1.addImage(tImg);
t1.scale=1.8;

t2=createSprite(displayWidth/2,displayHeight/2-500*6+150);
t2.addImage(tImg);
t2.scale=1.8;

t3=createSprite(displayWidth/2,displayHeight/2-4700);
t3.addImage(tImg);
t3.scale=1.8;

t4=createSprite(displayWidth/2,displayHeight/2-6550);
t4.addImage(tImg);
t4.scale=1.8;

train=createSprite(displayWidth/2-400,displayHeight/2-1125);
train.addImage(trainImg);
train.scale=1.0;

train2=createSprite(displayWidth/2-400,displayHeight/2-500*6-8);
train2.addImage(trainImg);
train2.scale=1.0;

train3=createSprite(displayWidth/2-400,displayHeight/2-4840);
train3.addImage(trainImg);
train3.scale=1.0;

train4=createSprite(displayWidth/2-400,displayHeight/2-6670);
train4.addImage(trainImg);
train4.scale=1.0;

//createing  player

player=createSprite(displayWidth/2,displayHeight/2+200);
player.addImage(playerCar);
player.scale=0.5;

if(gamestate == "level1"){
player.velocityY=-19
}
//create  invisible wall

wall=createSprite(displayWidth/2-200,displayHeight/2-200*9,5,4000);
wall.visible=false;

wall2=createSprite(displayWidth/2+200,displayHeight/2-200*9,5,4000);
wall2.visible=false;

wall3=createSprite(displayWidth/2-140,displayHeight/2-1100,5,170);
wall3.visible=false;

wall4=createSprite(displayWidth/2-140,displayHeight/2-500*6+30,5,170);
wall4.visible=false;

wall5=createSprite(displayWidth/2,displayHeight/2+350,400,5);
wall5.visible=false;

wall6=createSprite(displayWidth/2-200,displayHeight/2-400*9,5,2000);
wall6.visible=false;

wall7=createSprite(displayWidth/2+200,displayHeight/2-400*9,5,2000);
wall7.visible=false;

wall8=createSprite(displayWidth/2-25,displayHeight/2-600*9+40,450,20);
wall8.shapeColor="lightyellow";

wall9=createSprite(displayWidth/2+180,displayHeight/2-900*7,5,4800);
wall9.visible=false;

wall10=createSprite(displayWidth/2-210,displayHeight/2-900*7,5,4800);
wall10.visible=false;

wall11=createSprite(displayWidth/2-150,displayHeight/2-900*7-330,5,200);
wall11.visible=false;


shoot=createSprite(displayWidth/2,displayHeight/2);
 shoot.addImage(shootImg);
  shoot.scale=0.1;
  shoot.x=player.x+500;

  tint=createSprite(displayWidth/2,displayHeight/2);
  tint.addImage(tintImg);
  tint.scale=0.3;
   tint.x=shoot.x;
  

   health=createSprite(displayWidth/2+500,0,100,20);
    health.shapeColor="red";
    health.tint = "rgba(255, 255, 255, 0.5)";



left=createSprite(displayWidth/2-520,displayHeight/2);
left.addImage(leftImg);
 left.scale=0.2;

 right=createSprite(displayWidth/2-420,displayHeight/2);
 right.addImage( rightImg);
 right.scale=0.2;


 //song.play();
  

// extra

 

player.depth=wall11.depth+6;


zombieGroup = new Group();
bulletGroup = new Group();



}

function draw() { 
  background("pink");
  drawSprites();


if(gamestate === "level1"){

// move the player

  if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+10;
    
     }
       
   if (keyDown(LEFT_ARROW)) {
    player.x=player.x-10;  
   
     } 
     

     if (keyDown(UP_ARROW)) {
      player.y=player.y-30;  
     
       } 
  
       if (keyDown(DOWN_ARROW)) {
        player.y=player.y+30;  
       
         } 


if(mousePressedOver(left)){
  player.x=player.x-10;  
}

if(mousePressedOver(right)){
  player.x=player.x+10;  
}


  // add camera to player
 
 if(player.y<displayHeight/2+300 && player.y>displayHeight/2-7740){
  camera.y=player.y-180;
 }
  
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
 
//spawnZombies

  if (frameCount % 20 === 0) {
     zombie = createSprite(600,120,40,10);
   zombie.x = Math.round(random(displayWidth/2-100,displayWidth/2+100));
     zombie.y = player.y-700
    zombie.addImage(zombieImg);
    zombie.scale = 0.3;
   zombie.velocityY = 3;
    zombie.lifetime=500;
   zombieGroup.add(zombie);
  }

 
  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup.get(i).isTouching(bulletGroup)){
      zombieGroup.get(i).destroy();
    score=score+1;
    bulletGroup.destroyEach();
    }
  }


for(var i = 0; i < zombieGroup.length; i++){
  if(zombieGroup.get(i).isTouching(player)){
    zombieGroup.get(i).destroy();
  score=score+1;
health.width=health.width-10;
  }
}

textSize(30);
fill("black")
text("zombie Killed : "+score,displayWidth/2-620,player.y-500)

shoot.y=player.y;
tint.y=player.y-500;
health.y=tint.y+60;
left.y=player.y;
right.y=player.y;

if(mousePressedOver(shoot) && frameCount % 10 === 0){
  Bullet();
}


if(health.width ===10){
  gamestate=end;
  
  }


r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
r6.display();
r7.display();
r8.display();
r9.display();

h1.display();
h2.display();
h3.display();
h4.display();
h5.display();
h6.display();
h7.display();
h8.display();
h9.display();
h10.display();



}// level1 end

else if (gamestate === end){
 // background(over);

train.destroy();
train2.destroy();
train3.destroy();
train4.destroy();

t1.destroy();
t2.destroy();
t3.destroy();
t4.destroy();

wall.destroy();
wall2.destroy();
wall3.destroy();
wall4.destroy();
wall5.destroy();
wall6.destroy();
wall7.destroy();
wall8.destroy();
wall9.destroy();
wall10.destroy();
wall11.destroy();


player.velocityY=0;

}//end



}//funtion draw end


function Bullet(){
  bullet = createSprite(0,0);
  bullet.x=player.x;
  bullet.y=player.y;
bullet.addImage(bulletImg);
bullet.scale=0.055;
bullet.velocityY=-30
bullet.lifetime = 200;

bulletGroup.add(bullet);
}


var tutorialMap, bg, playerImage, player, W, A, S, D, WE, AE, DE;
var gameState = "startState";
var textState = 1;
var dungeonMap, dungeonTransition, cavemenTransition;
var time = 30;
var time2 = 30
var level = 1;
var cavemenMapGround;
var caveman1;
var attack;
var face;
var matatata;
var startImage;
var playImage;

function preload() {

  tutorialMap = loadImage("Tutorial.png");
  dungeonMap = loadImage("Dungeon.png");
  cavemenMapGround = loadImage("CavemenGround.png");
  
  playerImage = loadImage("Player.png");
  W = loadAnimation("W1.png", "W2.png");
  A = loadAnimation("A1.png", "A2.png");
  S = loadAnimation("S1.png", "S2.png");
  D = loadAnimation("D1.png", "D2.png");

  WE = loadImage("WE.png");
  AE = loadImage("AE.png");
  DE = loadImage("DE.png");

  dungeonTransition = loadAnimation("DungeonT2.png", "DungeonT1.png");
  cavemenTransition = loadAnimation("CavemenT1.png", "CavemenT2.png");

  attack = loadAnimation("Attack1.png", "Attack2.png");

  startImage = loadImage("boi.PNG");

  playImage = loadImage("playImage.PNG");

}

function setup() {

  createCanvas(400, 400);

  bg = createSprite(200, 200, 400, 400);
  bg.addImage("cross_buns", tutorialMap);
  bg.addImage("lmao", dungeonMap);
  bg.addImage("boom", cavemenMapGround);
  bg.scale = 8.0;

  player = createSprite(200, 200, 50, 50);
  player.addImage("hot_dogs", playerImage);
  player.addAnimation("pichu", A);
  player.addAnimation("pikachu", D);
  player.addAnimation("hi", S);
  player.addAnimation("pika", W);
  player.addImage("salamance", WE);
  player.addImage("raichu", AE);
  player.addImage("live", DE);
  player.scale = 1.75;
  
  transition = createSprite(200, 200, 400, 400);
  transition.addAnimation("pidgeot", dungeonTransition);
  transition.addAnimation("charizard", cavemenTransition);
  transition.visible = false;
  transition.scale = 12.5;

  caveman1 = createSprite(-150, -80, 50, 50);
  caveman1.visible = false;

  matatata = createGroup();

}

function draw() {

  background("brown");

  if(keyDown("W")) {
    player.y = player.y-10
    player.changeAnimation("pika", W);
    face = "W";
  }

  if(keyWentUp("W")) {
    player.changeImage("salamance", WE);
    face = "W";
  }

  if(keyDown("A")) {
    player.x = player.x-10
    player.changeAnimation("pichu", A);
    face = "A";
  }

  if(keyWentUp("A")) {
    player.changeImage("raichu", AE);
    face = "A";
  }

  if(keyDown("S")) {
    player.y = player.y+10
    player.changeAnimation("hi", S);
    face = "S";
  }

  if(keyWentUp("S")) {
    player.changeImage("hot_dogs", playerImage);
    face = "S";
  }

  if(keyDown("D")) {
    player.x = player.x+10
    player.changeAnimation("pikachu", D);
    face = "D";
  }

  if(keyWentUp("D")) {
    player.changeImage("live", DE);
    face = "D"
  }

  if(gameState === "startState") {

    var startbg = createSprite(200, 200, 400, 400);
    startbg.addImage("YEET", startImage);
    
    var play = createSprite(200, 300, 100, 50);
    play.addImage("F", playImage);
    play.scale = 0.3;

    if(mousePressedOver(play)) {
      startbg.visible = false;
      play.visible = false;
      gameState = "tutorialState";
    }
    
  }

  if(gameState === "tutorialState") {

    var block1 = createSprite(200, 38, 400, 25);
    block1.visible = false;
    player.bounceOff(block1);

    var block2 = createSprite(392, 200, 25, 350);
    block2.visible = false;
    player.bounceOff(block2);

    var block3 = createSprite(200, 362, 400, 25);
    block3.visible = false;
    player.bounceOff(block3);

    var block4 = createSprite(8, 200, 25, 350);
    block4.visible = false;
    player.bounceOff(block4);
      
  }
  
  if(frameCount%5 === 0 && textState>=9) {
    time = time - 1;
  }else if(time<=30 && time>29 && textState>=9) {
    transition.visible = true;
  }else if(time<20 && textState>=9) {
    transition.visible = false;
    gameState="dungeonState";
  }

  if(gameState === "dungeonState") {
    

    bg.changeImage("lmao", dungeonMap);
    bg.scale = 3.25;

    var block5 = createSprite(35, 60, 75, 25);
    block5.visible = false;
    player.bounceOff(block5);

    var block6 = createSprite(392, 200, 25, 275);
    block6.visible = false;
    player.bounceOff(block6);

    var block7 = createSprite(200, 325, 400, 25);
    block7.visible = false;
    player.bounceOff(block7);

    var block8 = createSprite(8, 200, 25, 275);
    block8.visible = false;
    player.bounceOff(block8);

    var block11 = createSprite(260, 60, 275, 25);
    block11.visible = false;
    player.bounceOff(block11);

    //block1.destroy();
    //block2.destroy();
    //block3.destroy();
    //block4.destroy();

    if(level === 1) {

      var block9 = createSprite(285, 200, 250, 260);
      block9.visible = false;
      player.bounceOff(block9);
  
      var block10 = createSprite(80, 265, 160, 130);
      block10.visible = false
      player.bounceOff(block10);
  
    }

    if(player.x<125 && player.y<50 ) {
      gameState = "trans";
    }
  }
 
  if(gameState==="trans"){

      
    if(frameCount%5 === 0) {
      time2 = time2 - 1;
    }

    if(time2>25 && time2<30 ) {
      bg.visible = false;
      transition.changeAnimation("charizard", cavemenTransition);
      transition.visible = true;
    }
    
    if(time2<=25 && gameState==="trans"){
      gameState="cavemen"
    }
  }

  if(gameState === "cavemen") {

    /*block1.destroy();
    block2.destroy();
    block3.destroy();
    block4.destroy();
    block5.destroy();
    block6.destroy();
    block7.destroy();
    block8.destroy();
    block9.destroy();
    block10.destroy();
    block11.destroy();*/

    camera.x = player.x;
    camera.y = player.y;
   
    transition.visible = false;

    bg.visible = true;
    bg.scal = 5
    bg.x = 50;
    bg.y = -350;
    bg.changeImage("boom", cavemenMapGround);
    bg.scale = 2;

    caveman1.visible = true;
    caveman1.debug = true;
    caveman1.setCollider("circle", 0, 0, 200);

    if(caveman1.isTouching(player)) {
      caveman1.setCollider("circle", 0, 0, 15);
      caveman1.velocityX = random(-10, 10);
      caveman1.velocityY = random(-10, 10);
    }

    if(matatata.isTouching(caveman1)) {
      caveman1.destroy();
      matatata.destroyEach();
    }

    mousePressed();
    
  }

  console.log(gameState);

  drawSprites();

  textSize(20);
  textFont("Times New Roman");
  fill("red");

  if(textState === 1) {
    text("Hi! Press Enter to keep reading.", 60, 300);
    if(keyWentDown(ENTER)) {
     textState = 2;
    } 
  } else if(textState === 2) {
    text("Now, do you remember your name?", 50, 300);
    if(keyWentDown(ENTER)) {
      textState = 3;
    } 
  } else if(textState === 3) {
    text("I suppose not.", 140, 300);
    if(keyWentDown(ENTER)) {
      textState = 4;
    } 
  } else if(textState === 4) {
    text("What, you don't remember your gender?", 25, 300);
    if(keyWentDown(ENTER)) {
      textState = 5;
    } 
  } else if(textState === 5) {
    text("Well, do you remember how to move?", 35, 300);
    if(keyWentDown(ENTER)) {
      textState = 6;
    } 
  } else if(textState === 6) {
    text("NO?! THOMPSON, WHAT'D I SAY ABOUT ", 10, 300);
    text("EXPERIMENTING... *COUGH-COUGH*", 20, 325);
    if(keyWentDown(ENTER)) {
      textState = 7;
    } 
  } else if(textState === 7) {
    text("Experiment, dear?", 120, 300);
    text(" Pretty sure you READ that wrong.", 45, 325);
    if(keyWentDown(ENTER)) {
      textState = 8;
    } 
  } else if(textState === 8) {
    text("Oh, um, try to move using the WASD keys", 10, 300);
    text("and press enter when you've learned how to", 10, 325);
    text("move.", 180, 350);
    if(keyWentDown(ENTER)) {
      textState = 9;
      player.x = 50;
      player.y = 150;
    }
  } else if(textState === 9) {
    gameState = "dungeonState";
    text("Alright, welcome to the dungeon!", 50, 300);
    if(keyWentDown(ENTER)) {
      textState = 10;
    } 
  } else if(textState === 10) {
    text("This is from where you can travel in time.", 25, 300);
    if(keyWentDown(ENTER)) {
      textState = 11;
    } 
  } else if(textState === 11) {
    text("You'll notice 5 doors. Inside all of them", 25, 300);
    text("is a different time period.", 100, 325);
    if(keyWentDown(ENTER)) {
      textState = 12;
    } 
  } else if(textState === 12) {
    text("Now, only 1 is open right now, for you must", 10, 300);
    text(" complete it to access the rest.", 65, 325);
    if(keyWentDown(ENTER)) {
      textState = 13;
    } 
  } else if(textState === 13) {
    text("Why don't you try walking through the open", 10, 300);
    text("one right now?", 135, 325);
    if(keyWentDown(ENTER)) {
      textState = 14;
    } 
  }

}

function mousePressed() {

  if(mouseWentDown("leftButton")) {

    if(face === "W") {
      var atatata = createSprite(player.x, player.y);
      atatata.addAnimation("smalama", attack);
      atatata.velocityY = -25;
      matatata.add(atatata);
    }else if(face === "A") {
      var atatata = createSprite(player.x, player.y);
      atatata.addAnimation("smalama", attack);
      atatata.velocityX = -25;
      matatata.add(atatata);
    }else if(face === "S") {
      var atatata = createSprite(player.x, player.y);
      atatata.addAnimation("smalama", attack);
      atatata.velocityY = 25;
      matatata.add(atatata);
    }else if(face === "D") {
      var atatata = createSprite(player.x, player.y);
      atatata.addAnimation("smalama", attack);
      atatata.velocityX = 25;
      matatata.add(atatata);
    }

  }

}


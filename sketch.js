var gameState=1;
var play;
var hp,rw,hg,dm;
var hpB,rwB,hgB,dmB;
var edges;
var fb1,fb2,fb4,fb5;
var button=0;
var wall;
var snitch;

function preload(){
    background1=loadImage("welcome background.PNG")
    background2=loadImage("background1.PNG")
    play_button=loadImage("play button.PNG")
    harry_potter=loadImage("harry potter1.png")
    ron_weasley=loadImage("rw.webp")
    hermionie_granger=loadImage("hg.png")
    draco_malfoy=loadImage("dm.png")
    f1=loadImage("fireball.png")
    snitch1=loadImage("snitch1.PNG")
}

function setup(){
   var canvas = createCanvas(1200,600)

   edges = createEdgeSprites();

   play = createSprite(600,430,20,10)
   play.addImage(play_button)
   play.scale = 0.25;
   hp=createSprite(550,200,20,10);
   hp.addImage(harry_potter)
   hp.scale=0.1;
   rw=createSprite(400,200,0.5,10);
   rw.addImage(ron_weasley);
   rw.scale=0.8;
   hg=createSprite(700,200,20,10);
   hg.addImage(hermionie_granger);
   hg.scale=0.3;
   dm=createSprite(845,200,20,10);
   dm.addImage(draco_malfoy);
   dm.scale=0.6;

   snitch=createSprite(1100,400,20,15);
   snitch.addImage(snitch1);
   snitch.scale=0.25;

   player=createSprite(100,450,40,80);

    fb1=createSprite(1200,100,50,50);
    fb1.velocityX=random(-6,-10)
    fb1.addImage(f1);
    fb1.scale=0.1;
    
    fb2=createSprite(1200,200,50,50);
    fb2.velocityX=random(-6,-10)
    fb2.addImage(f1);
    fb2.scale=0.1;

    fb4=createSprite(1200,400,50,50);
    fb4.velocityX=random(-6,-10)
    fb4.addImage(f1);
    fb4.scale=0.1;
    
    fb5=createSprite(1200,500,50,50);
    fb5.velocityX=random(-6,-10)
    fb5.addImage(f1);
    fb5.scale=0.1;
    
    
    
   
 

}

function draw(){
    background(background1)
    drawSprites();

    fill("white");
    text("x:"+mouseX,50,50);
    text("y:"+mouseY,50,70);

    if(gameState === 1){
    
    strokeWeight(3)
    fill("white")
    stroke("white")
    textSize(50)
    text("Welcome",500,200);

    hp.visible=false;
    rw.visible=false;
    hg.visible=false;
    dm.visible=false;

    player.visible=false;

    fb1.visible=false;
    fb2.visible=false;
    fb4.visible=false;
    fb5.visible=false;

    snitch.visible=false;

    if(mousePressedOver(play)){
        gameState=2;
        
    }

    }
    else if(gameState === 2){

     fill("white");
     textSize(20);
     text("Select the Player Name",500,50);

    play.destroy();

    hp.visible=true;
    rw.visible=true;
    hg.visible=true;
    dm.visible=true;

    player.visible = false;
    fb1.visible=false;
    fb2.visible=false;
    fb4.visible=false;
    fb5.visible=false;
  
    snitch.visible=false;

   // if(button){

    hpB=createButton('Harry Potter');
    hpB.position(510,400)
    rwB=createButton('Ron Weasely');
    rwB.position(350,400)
    hgB=createButton('Hermione Granger');
    hgB.position(640,400)
    dmB=createButton('Draco Malfoy');
    dmB.position(815,400)
   //button=1

    

    hpB.mousePressed(function (){
        hpB.hide();
        gameState=3;
        player.addImage(harry_potter);
        player.scale=0.04;
    })
    rwB.mousePressed(function(){
        gameState=3;
        player.addImage(ron_weasley);
        player.scale=0.3;
        
    })
    hgB.mousePressed(function(){
        gameState=3;
        player.addImage(hermionie_granger);
        player.scale=0.1;
    })
    dmB.mousePressed(function(){
        gameState=3;
        player.addImage(draco_malfoy);
        player.scale=0.25;
    })

    }
    else if(gameState===3){

    background(background2);
    drawSprites();

    text("x:"+mouseX,50,50);
    text("y:"+mouseY,50,70);

    player.visible=true;

    hpB.hide();
    rwB.hide();
    hgB.hide();
    dmB.hide();

    hp.destroy();
    rw.destroy();
    hg.destroy();
    dm.destroy();

    fb1.visible=true;
    fb2.visible=true;
    fb4.visible=true;
    fb5.visible=true;

    snitch.visible=true;
   
    fb1.bounceOff(edges);
    fb2.bounceOff(edges);
    fb4.bounceOff(edges);
    fb5.bounceOff(edges);

    if(keyDown(RIGHT_ARROW)){
        player.velocityX=4;
        player.velocityY=0;
    }

    if(keyDown(UP_ARROW)){
        player.velocityY=-4;
        player.velocityX=0;
    }

    if(keyDown(DOWN_ARROW)){
        player.velocityY=4;
        player.velocityX=0;
    }
   
    player.collide(edges[2]);
    player.collide(edges[3]);

    if(fb1.isTouching(player)||fb2.isTouching(player)||fb4.isTouching(player)||fb5.isTouching(player)){
        gameState=4
       
        
    }

    if(player.isTouching(snitch)){
        gameState=5;
    }

    
    }
 
             
    else if(gameState===4){
        player.destroy();
        fb1.destroy();
        fb2.destroy();
        fb4.destroy();
        fb5.destroy();
        snitch.destroy();
        textSize(40);
        fill("white")
        text("You Lose",450,260)

     }
      else if(gameState===5){
        player.destroy();
        fb1.destroy();
        fb2.destroy();
        fb4.destroy();
        fb5.destroy();
        snitch.destroy();
        textSize(40);
        fill("white")
        text("You Win",450,260)

      }
        

   
 
}


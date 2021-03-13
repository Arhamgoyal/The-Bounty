const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var form,canvas;
var database,game;
var backdrop;
var gameState=0;

function preload(){

 backgroundImg=loadImage("wood.jpg");
  h=loadImage("Hunter.png");
  o=loadImage("Officer.png");
  b=loadImage("Back.png");
  p=loadImage("Play.png");
  a=loadImage("Arsenal.png");
  op=loadImage("Options.png");
}

function setup(){

    canvas = createCanvas(displayWidth-20, displayHeight-20);

    database=firebase.database();
    engine = Engine.create();
    world = engine.world;

   game=new Game(displayWidth,displayHeight);
    game.getState();
   
   backdrop=createSprite(width/2,height/2,4000,1400);
      backdrop.addImage(backgroundImg);
      backdrop.scale=1.5;

   form=new Form(displayWidth,displayHeight);
}

function draw(){
   
  Engine.update(engine);

   form.display();
    drawSprites();
}
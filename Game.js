
class Game{

    constructor(){
      this.buttonT=createButton("Choose");
      this.buttonT2=createButton("Choose");
    }

hide(){
  this.buttonT.hide();
  this.buttonT2.hide();
  }

display(){
  this.buttonT.position(250,300);
  this.buttonT2.position(1150,300);
  }

getState(){
  var gameStateRef=database.ref('gameState');  
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
  }

update(state){
    database.ref('/').update({
      gameState: state
    });
  }

async start(){
   var hunter=createSprite(280,200,50,50);
    hunter.scale=0.3;
    hunter.addImage(h);

   var officer=createSprite(1140,200,50,50);
    officer.scale=0.06;
    officer.addImage(o);

    form.hide();

    this.buttonT.position(250,300);
    this.buttonT2.position(1110,300);

    this.buttonT.mousePressed(()=>{
      hunter.x=500;
      hunter.y=displayHeight-500;
      officer.x=displayWidth;
      officer.y=displayHeight;
      this.buttonT.hide();
      this.buttonT2.hide();
    })

    this.buttonT2.mousePressed(()=>{
      officer.x=500;
      officer.y=displayHeight-500;
      hunter.x=displayWidth;
      hunter.y=displayHeight;
      this.buttonT.hide();
      this.buttonT2.hide();
    })
  }
}

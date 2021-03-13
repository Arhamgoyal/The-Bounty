class Form{

    constructor() {
      this.button = createButton("Play");
      this.button2 = createButton("Arsenal");
      this.button3 = createButton("Options");
      this.title = createElement('h1');
      this.button4 = createButton("Tutorial");
      this.button5 = createButton("Multiplayer");
      this.button6 = createButton("Back");
      this.b = false;
    }
    hide(){
      this.button.hide();
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      this.title.hide();
    }
  
   
  
 
    display(){
      this.title.html("The Bounty");
      this.title.position(displayWidth/2 - 50, 0);
      this.button.position(760,200);
      this.button2.position(755,250);
      this.button3.position(755,300);
      
     
      if(this.b===false){
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      }
      
      this.button.mousePressed(()=>{
      this.b=true;
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.show();
        this.button5.show();
        this.button6.show();
        this.button4.position(250,300);
        this.button5.position(1100,300);
        this.button6.position(20,20);
      })

      this.button2.mousePressed(()=>{
      
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.show();
        
        var pistol=createElement("h1");
        pistol.html("Pistol");
        pistol.position(100,100);

        var AR=createElement("h1");
        AR.html("Assault Riffle");
        AR.position(300,100);

        var Shotgun=createElement("h1");
        Shotgun.html("Shotgun");
        Shotgun.position(600,100);

        var SMG=createElement("h1");
        SMG.html("Submachine Gun");
        SMG.position(900,100);

        var Stun_Gun=createElement("h1");
        Stun_Gun.html("Stun Gun(Police only)");
        Stun_Gun.position(1200,100);

        var Upgrade=createButton("Upgrade Pistol");
        Upgrade.position(100,300);

        var Upgrade2=createButton("Upgrade Assault Riffle");
        Upgrade2.position(300,300);

        var Upgrade3=createButton("Upgrade Shotgun");
        Upgrade3.position(600,300);

        var Upgrade4=createButton("Upgrade Submachine Gun");
        Upgrade4.position(900,300);

        var Upgrade5=createButton("Upgrade Stun Gun");
        Upgrade5.position(1200,300);
      })

      this.button3.mousePressed(()=>{
      
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
       
      })
  this.button4.mousePressed(()=>{
    game.start();
  })
 this.button6.mousePressed(()=>{
      this.title.show();
      this.button.show();
      this.button2.show();
      this.button3.show();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
})
 

}
} 
class Dustbin {
 
    constructor(x,y,width,height){

        var options={
            isStatic:true,
            restitution:1,
            friction:0.2
        }
   
        this.width=width;
        this.height=height;
   
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("dustbingreen.png");

        World.add(world,this.body);
   
   
   
   
       }
   
       display(){
   
          var pos=this.body.position;
       //   var angle=this.body.angle;
   
         // angleMode(RADIANS);
   
          push();
      //  translate(pos.x,pos.y);
          //rotate(angle);
         // rectMode(CENTER);
          
         // translate(pos.x,pos.y);

          imageMode(CENTER);
          image(this.image,480,330, 120, 120);
           


       //  rect(0,0,this.width,this.height);
   
          pop();
   
   
   
       }
       


}
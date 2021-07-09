class Paper {
    
    constructor(x,y){
    
         var options={
             isStatic:false,
             restitution:0.8,
             friction:0.2,
             density:1.2
         }
    
        // this.width=20;
        // this.height=20;
             
         this.body=Bodies.circle(x,y,20,options);
         this.image=loadImage("Paper.png");
         
         World.add(world,this.body);

   }
    
        display(){
    
           var pos=this.body.position;
         //  var angle=this.body.angle;
    
          // angleMode(RADIANS);
    
           push();
           fill("blue");
         //  circle(pos.x,pos.y,20);

           imageMode(CENTER);
           image(this.image,pos.x,pos.y, 50, 50);
            
           pop();
    
    
        }

}
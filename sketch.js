
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;


function preload()
{
	
}

function setup() {
	createCanvas(600, 400);
  
	engine = Engine.create();
	world = engine.world;
     
    var options={
    isStatic:true,
    
}
    ground=Bodies.rectangle(300,390,600,10,options);
    World.add(world,ground);

   
	//Create the Bodies Here.
  paper = new Paper(30,200);
  dustbin1 = new Dustbin(430,348,15,75);
  dustbin2 = new Dustbin(485,379,95,15);
  dustbin3 = new Dustbin(540,348,15,75);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(253,253,253);
  
    
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    paper.display();
    fill("green");
    rect(ground.position.x,ground.position.y,600,10) ;




  
  text(mouseX+" , "+mouseY,mouseX,mouseY);

}

function keyPressed() {
    if (keyCode === UP_ARROW){

       Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60});
      console.log('keyPressed');
    }


}


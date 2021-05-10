
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground; 
var trashbin,trashbin2,trashbin3;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(150,599,10);
 
  ground = new Ground(420,620,780,5);
trashbin = new Dustbin(470,560,20,100);
trashbin2 = new Dustbin(520,600,100,20);
trashbin3 = new Dustbin(580,560,20,100);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine); 
paper.display();
  trashbin.display();
  trashbin2.display();
  trashbin3.display();
ground.display();


  drawSprites();
 
}
function keyPressed(){

  if(keyDown(space)){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y: -25});
  
  }
  }



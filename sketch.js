
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;
roof=new Roof()
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




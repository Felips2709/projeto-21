
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var chao;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(350,350,25);
	World.add(ball);

	Engine.run(engine);
		chao=new Ground(400,400,800,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 chao.display();
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dub;
var paper1;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20);
	
	//rec1 = createSprite(830, 630, 10, 60  );

	//rec2 = createSprite(880, 655, 90, 10  );
   
	
	//rec3 = createSprite (920, 630, 10, 60 );
	paper1=new paper(200, 450, 50)

	dub=new dustbin(830, 660)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);


  background("white");
 
 paper1.display()
 ground.display()
 dub.display()
 drawSprites();
}
function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:33,y:-35});
  
	}
}




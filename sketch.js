
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, box, rope1, rope2, rope3, rope4, rope5;

function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(255,560,55)
	bob2 = new Bob(310,560,55)
	bob3 = new Bob(365,560,55)
	bob4 = new Bob(420,560,55)
	bob5 = new Bob(475,560,55)
	
	box = new Box(365,75,275,35)

	rope1 = new Rope(bob1.body,box.body)
	rope2 = new Rope(bob2.body,box.body)
	rope3 = new Rope(bob3.body,box.body)
	rope4 = new Rope(bob4.body,box.body)
	rope5 = new Rope(bob5.body,box.body)

	Engine.run(engine);
  
}


function draw() {

  background("black");
  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  box.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  /* else {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0.09,y:0})
  } */

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	{
	  Matter.Body.setStatic(bob1.body,false)
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.1,y:0})
	} 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var base1;
var bobDiameter =100

function preload(){
	bg=loadImage("bg.jpg")
}

function setup() {
	createCanvas(1000,900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base1 = new Base(200,0,2000,5)

	bob1 = new Bob(300,600,100)
	bob2 = new Bob(400,600,100)
	bob3 = new Bob(500,600,100)
	bob4 = new Bob(600,600,100)
	bob5 = new Bob(700,600,100)

	rope1 = new Rope(bob1.body,base1.body,100,0)
	rope2 = new Rope(bob2.body,base1.body,200,0)
	rope3 = new Rope(bob3.body,base1.body,300,0)
	rope4 = new Rope(bob4.body,base1.body,400,0)
	rope5 = new Rope(bob5.body,base1.body,500,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  
  
  base1.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}





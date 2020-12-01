const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3, bobObj4,bobObj5, roofObj;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObj=new roof(750,100,750,60);

	bobObj1=new bob(550,550,100);
	bobObj2=new bob(650,550,100);
	bobObj3=new bob(750,550,100);
	bobObj4=new bob(850,550,100);
	bobObj5=new bob(950,550,100);

	rope1=new rope(bobObj1.body,roofObj.body,-200, 0)
	rope2=new rope(bobObj2.body,roofObj.body,-100, 0)
	rope3=new rope(bobObj3.body,roofObj.body,0, 0)
	rope4=new rope(bobObj4.body,roofObj.body,100, 0)
	rope5=new rope(bobObj5.body,roofObj.body,200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObj.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-200,y:-195});
	}
}


function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
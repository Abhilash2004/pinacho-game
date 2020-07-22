 
 
const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	
 
ground=new Ground(100,780,7000,10)
blocks=new division(10,680,10,190)
blocks1=new division(110,680,10,190)
blocks2=new division(210,680,10,190)
blocks3=new division(310,680,10,190)
blocks4=new division(410,680,10,190)
blocks5=new division(510,680,10,190)
blocks6=new division(610,680,10,190)
blocks7=new division(710,680,10,190)
blocks8=new division(810,680,10,190)
blocks9=new division(910,680,10,190)
blocks10=new division(1010,680,10,190)
blocks11=new division(1110,680,10,190)
blocks12=new division(1210,680,10,190)
particle1= new Particle (400,100,3,3)
particle2= new Particle (100,100,3,3)
particle3= new Particle (500,100,3,3)
particle4= new Particle (1000,100,3,3)
pinacho1=new Pinocho(100,100,130,130)

  
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
 ground.display();
 blocks.display();
 blocks1.display();
 blocks2.display();
 blocks3.display();
 blocks4.display();
 blocks5.display();
 blocks6.display();
 blocks7.display();
 blocks8.display();
 blocks9.display();
 blocks10.display();
 blocks11.display();
 blocks12.display();
 particle1.display();
 particle2.display();
 particle3.display();
 particle4.display();
 pinacho1.display
  drawSprites();
 
}
 




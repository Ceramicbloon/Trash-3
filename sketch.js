
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var trash, trash1
var technoblade
var trashSprite
function preload() {
	trash1=loadImage("trashcan.png")
}

function setup() {
	createCanvas(1000, 400);
	// trashSprite = createSprite(700,323,20,20)
	// trashSprite.addImage(trash1)
	// trashSprite.scale = 0.4
	
	//keyPressed();
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20);
	ball1 = new Ball(300, 70, 30)
	wall1 = new Wall(700, 380, 100, 20)
	wall2 = new Wall(640, 325, 20, 130)
	wall3 = new Wall(760, 325, 20, 130)
	Technoblade = new SlingShot(ball1.body, {x:300, y:70})

}

// function keyPressed(){
// 	if (keyCode === UP_ARROW){
// 		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:125.5,y:-155})
// 	}
// }


function draw() {
	rectMode(CENTER);
	background("#ECECEC");
	imageMode(CENTER)
	
	Engine.update(engine)
	Technoblade.display()
	wall1.display();
	ground.display();
	ball1.display();
	// wall2.display();
	// wall3.display();
	// ball1.display();
	image(trash1, 700, 315, 140, 150)
	
	
	drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    Technoblade.fly();
   
}





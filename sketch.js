const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pedra
var Pedrag
var ground1
var ground

var engine,world

function preload(){
Pedrag = loadImage("Pedraf.png");
ground1 = loadImage("ground.png"); 
}

function setup() {
createCanvas(800, 750);

engine = Engine.create();
world = engine.world;

var Options = {
 isStatic: true
}

ground = Bodies.rectangle(800,100,800,10);
World.add(world,ground);


pedra = Bodies.circle(200,100,10);

World.add(world,pedra);
}


function draw() {
  background();
  ellipse(200,100,10);
  
  image(this.ground1,ground.position.x,ground.position.y,800,10);
  image(this.Pedrag,pedra.position.x,pedra.position.y,10,10);

  Engine.update(engine);

  drawSprites();

}


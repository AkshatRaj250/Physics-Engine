const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1;
var object2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground = {
    isStatic:true
  }

  var ball = {
   restitution:1.2
  }
  object1 = Bodies.rectangle(200,380,20,20,ground);
  object2 = Bodies.circle(200,200,20,ball);

  World.add(world,object1);
  World.add(world,object2);

  console.log(object2.position.x);
  console.log(object2.position.y);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(object2.position.x,object2.position.y,20,20);
  //drawSprites();
}
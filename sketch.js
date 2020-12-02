//nameSpacing

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine,world;
var ball;
var ground;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,380,400,10,{isStatic : true});
  World.add(world,ground);
  
  var opt = {
    restitution : 0.8

  }
  ball = Bodies.circle(200,10,30,opt);
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30)
}  
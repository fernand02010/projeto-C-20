const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var ball2,rock;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var rock_option = {
    restitution : 0.85
  }
  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300,20,10,rock_option);
  World.add(world,ball2);
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  rock = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 ellipse(ball2.position.x,ball2.position.y,20);
 rect(rock.position.x,rock.position.y,200,10);
}


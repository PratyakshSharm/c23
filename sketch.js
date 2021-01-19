const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var box1;
var box2;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
  world=engine.world;


  box1 = new Box(200,200,50,50);
  box2 = new Box(240,100,50,100);
  ground = new Ground(200,390,400,10);
   // var ground_properties ={
   // isStatic:"true"
//  }
 // ground=Bodies.rectangle(200,380,400,20,ground_properties);
//World.add(world,ground);

//console.log(ground);

// var ball_properties ={
//   restitution:"1"
// }

// ball=Bodies.circle(200,200,10,ball_properties);
// World.add(world,ball);
// console.log(ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);

  box1.display();
  box2.display();
  ground.display();
 // rect(ground.position.x,ground.position.y,400,20);

//ellipse(ball.position.x,ball.position.y,20,20);
}
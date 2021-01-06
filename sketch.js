const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myEngine,myWorld,ground,ball;
var options_gnd,options_ball;

function setup() {
  createCanvas(400,400);
myEngine=Engine.create();
myWorld=myEngine.world;
options_gnd={
  isStatic:true,
}
ground=Bodies.rectangle(200,380,400,20,options_gnd);
World.add(myWorld,ground);

options_ball={
  restitution:0.8,
}
ball=Bodies.circle(200,100,20,options_ball);
World.add(myWorld,ball);
console.log(ball);

}

function draw() {
  background("black");
  Engine.update(myEngine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);
}


  
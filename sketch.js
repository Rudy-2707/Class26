const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box

function setup(){
    var canvas = createCanvas(1435,780);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,200,250,50)
    ball1 = new Ball(200,200,10)
    ball2 = new Ball(200,220,10)
    ball3 = new Ball(200,240,10)
    ball4 = new Ball(200,260,10)
}

function draw(){
    background("grey");
    Engine.update(engine);

    box.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
  ballImg = loadImage("Wrecking-ball.jpg")
  bg = loadImage("sky.jpg")
  brickImg = loadImage("brick.jpg")
}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER)
  ellipseMode(RADIUS)
  
  
  ground = new Ground(width/2,height-10,width,20)

  ball = new Ball(150,350,50)
  

  rope = new Rope(ball.body,{x:485,y:150})

  brick1 = new Bricks(700,100,70,70)
  brick2 = new Bricks(700,100,70,70)
  brick3 = new Bricks(700,100,70,70)
  brick4 = new Bricks(700,100,70,70)
  brick5 = new Bricks(700,100,70,70)
  brick6 = new Bricks(700,100,70,70)
  brick7 = new Bricks(700,100,70,70)
  brick8 = new Bricks(825,100,70,70)
  brick9 = new Bricks(825,100,70,70)
  brick10 = new Bricks(825,100,70,70)
  brick11 = new Bricks(825,100,70,70)
  brick12 = new Bricks(825,100,70,70)
  brick13 = new Bricks(825,100,70,70)
  brick14 = new Bricks(825,100,70,70)
  brick15 = new Bricks(950,100,70,70)
  brick16 = new Bricks(950,100,70,70)
  brick17 = new Bricks(950,100,70,70)
  brick18 = new Bricks(950,100,70,70)
  brick19 = new Bricks(950,100,70,70)
  brick20 = new Bricks(950,100,70,70)
  brick21 = new Bricks(950,100,70,70)


      
}


function draw() 
{
  Engine.update(engine);
  //background(bg);
  image(bg,0,0,2000,1000)
  push()
  fill("white")
  ground.show()
  pop()
  push ()
  fill ("green")
  
  brick1.show()
  brick2.show()
  brick3.show()
  brick4.show()
  brick5.show()
  brick6.show()
  brick7.show()
  brick8.show()
  brick9.show()
  brick10.show()
  brick11.show()
  brick12.show()
  brick13.show()
  brick14.show()
  brick15.show()
  brick16.show()
  brick17.show()
  brick18.show()
  brick19.show()
  brick20.show()
  brick21.show()

  pop ()

  push ()
  ball.show()
  pop ()

  push ()
  stroke(0)
  rope.show()
  pop ()

  textSize(30);
    stroke(3);
    fill("black");
    text("Demolishing Buildings !! ", width/2,height-660)

    textSize(30);
    stroke(4);
    fill("black");
    text("CLICK ON SPACEBAR TO MOVE THE BALL !! ", 490,height-600)

}

function keyPressed(){
  if (keyIsDown(32)){
    Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.1,y:0})
   }
  
}


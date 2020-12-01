
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,d1,d2,d3,d4,d5,d6,d7,d8
var plinkos = [];
var particles = [];


function setup() {
  
  createCanvas(480,700);

  engine = Engine.create();
	world = engine.world;

	d1 = new Ground(470,670,10,480);
	d2 = new Ground(402,670,10,480);
	d3 = new Ground(334,670,10,480);
	d4 = new Ground(266,670,10,480);
	d5 = new Ground(198,670,10,480);
	d6 = new Ground(130,670,10,480);
	d7 = new Ground(62,670,10,480);
  d8 = new Ground(5,670,10,480);
  
  ground = new Ground(240,690,480,15);
  
  for (var j = 15; j <=width; j=j+70) {
   plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 15; j <=width-10; j=j+70) {
    plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 15; j <=width; j=j+70) {
   plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 15; j <=width-10; j=j+70) {
   plinkos.push(new Plinko(j,375,10));
     
  }

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();

  ground.display();
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
 }

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-50,width/2+50),8,8))
 }

 for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}

  strokeWeight(15);
  stroke("brown"); 
  line(480,700,480, 0);
  line(0,700,0,0);
  line(480,700,0,700);
  line(480,0,0,0);

  drawSprites();
 
}




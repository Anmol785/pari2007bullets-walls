var bullet , wall;
var speed , weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

speed = random(55,90);
weight = random(400,1500);
thickness=random(22,83);

bullet=createSprite(50,200,10,50);
bullet.shapeColor = color(255);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

bullet.velocityX=speed;


}

function draw() {
  background(0);  

  if (wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0;

  var damage=0.5 * bulletweight * bulletspeed * bulletspeed/thickness*thickness*thickness;
  if(damage>10)
  {
    bullet.shapeColor=color(255,0,0);
  }
  if(deformation<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}
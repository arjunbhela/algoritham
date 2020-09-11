var frect
var mrect
var rect1
var rect2
function setup() {
createCanvas(800,400);

frect = createSprite(300,150,50,100);
frect.shapeColor = "yellow";

mrect = createSprite(500,350,50,100)
mrect.shapeColor = "skyblue";

frect.debug = true;
mrect.debug = true;

rect1 = createSprite(200,200,50,100);
rect2 = createSprite(600,200,50,100);

rect1.shapeColor = "red";
rect2.shapeColor = "orange";

rect1.debug = true;
rect2.debug = true;

rect1.velocityX = 4;
rect2.velocityX = -4;
}
function draw() {

background(0);  

mrect.x = mouseX;
mrect.y = mouseY;

if (mrect.x-frect.x < mrect.width/2+frect.width/2 &&
   frect.x-mrect.x < mrect.width/2+frect.width/2 &&
    mrect.y-frect.y < mrect.height/2+frect.height/2 &&
    frect.y-mrect.y < mrect.height/2+frect.height/2) {
mrect.shapeColor = "lightgreen";
frect.shapeColor  = "purple";
} else {
mrect.shapeColor = "skyblue";
frect.shapeColor = "yellow";
}

if (rect1.x-rect2.x < rect1.width/2+rect2.width/2 &&
  rect2.x-rect1.x < rect1.width/2+rect2.width/2) {
    rect1.velocityX = rect1.velocityX*(-1)
    rect2.velocityX = rect2.velocityX*(-1)
}

if (rect1.y-rect2.y < rect1.height/2+rect2.height/2 &&
  rect2.y-rect1.y < rect1.height/2+rect2.height/2) {
    rect1.velocityY = rect1.velocityY*(-1)
    rect2.velocityY = rect2.velocityY*(-1)
}
  drawSprites();
}
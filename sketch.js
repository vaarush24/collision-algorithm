var fixedRec, movingRec;

function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(600, 400, 50, 80);
  movingRec = createSprite(800,400,80,50)
  movingRec.shapeColor = "green";
  fixedRec.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  
if (movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width/2
  && movingRec.y - fixedRec.y < fixedRec.height/2 + movingRec.height/2
  && fixedRec.y - movingRec.y < fixedRec.height/2 + movingRec.height/2
  && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width/2) {
  movingRec.shapeColor = "red";
  fixedRec.shapeColor = "red";
} else {
  movingRec.shapeColor = "green";
  fixedRec.shapeColor = "green";
}

  movingRec.y = World.mouseY
  movingRec.x = World.mouseX
  drawSprites();
}
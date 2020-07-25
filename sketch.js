var movingRect, fixedRect, object1, object2

function setup() {
  createCanvas(800,400);

  object1 = createSprite(200,100,50,50);
  object1.velocityY = 5;
  object1.shapeColor = "white";

  object2 = createSprite(200,400,50,50);
  object2.velocityY = -5;
  object2.shapeColor = "red";

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "white";
  fixedRect.visible = false;

  movingRect = createSprite(40,10,100,45);
  movingRect.shapeColor = "blue";
  movingRect.visible = false;

}

function draw() {
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "blue";
  }

  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2) {

    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }

  if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2) {

    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
    }

  drawSprites();
}
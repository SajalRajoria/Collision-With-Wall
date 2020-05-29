
 var fixedRect ,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect =  createSprite(400, 200, 80, 50);
  movingRect = createSprite(400, 200, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
movingRect.shapeColor = "red";
        fixedRect.shapeColor = "red";
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 && 
    object2.y - object1.y < object2.height/2 + object1.height/2) {
       return true ,
       }
  else {
    return false,
     
 }
}
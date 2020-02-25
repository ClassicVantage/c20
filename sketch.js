var fixedrect;
var movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 50);
  movingrect=createSprite(400, 200, 80, 30);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}

function draw() {
  background(0,0,0);
  movingrect.y=World.mouseY; 
  movingrect.x=World.mouseX;
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="cyan";
    fixedrect.shapeColor="purple";
    
  } 
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  }
  drawSprites();
}
var movingrect,fixedrect,go1,go2;


function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(200, 200, 50, 80);
  fixedrect=createSprite(400,200,80,30);
  go1=createSprite(100,100,50,50);
  go2=createSprite(200,100,50,50);
  go1.shapeColor="green";
  go2.shapeColor="green";
  movingrect.shapeColor= "green";
  fixedrect.shapeColor= "green";
}

function draw() {
  background(0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,go1))
  {
  
    movingrect.shapeColor= "red";
  go1.shapeColor= "red";
  }
  else{
    movingrect.shapeColor= "green";
  go1.shapeColor= "green";
  } 
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
      return true;
      
    }
    else{
    return false;
    }
    
}
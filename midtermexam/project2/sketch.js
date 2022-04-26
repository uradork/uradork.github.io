let x = 0, y = 0, x1 = 0, y1 = 0;
function setup() {
  createCanvas(400, 400);
  background(0); 
  x=width/2;
  y=height-40;
}
function draw() {
    background(0);
   if (keyIsDown(LEFT_ARROW)) {
      x -= 5;
    } 
    if (keyIsDown(RIGHT_ARROW)) {
     x += 5;
    } 
    if (keyIsDown(UP_ARROW)) {
      y -= 5;
    } 
    if (keyIsDown(DOWN_ARROW)) {
      y += 5;
    }
    ellipse(x, y, 50, 50);
  }
  function draw() {
      background(0);
      if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
      } 
      if (keyIsDown(RIGHT_ARROW)) {
       x += 5;
      } 
      if (keyIsDown(UP_ARROW)) {
        y -= 5;
      } 
      if (keyIsDown(DOWN_ARROW)) {
        y += 5;
      }
       push();
      fill(255, 255, 0);
      circle(x1, y1, 10);
      pop();
      ellipse(x, y, 50, 50);
    }
    function keyPressed()
{
 if( keyCode == 90){  
 x1 = x; 
 y1 = y; 
 }
}
function draw() {
   background(0);
   if (keyIsDown(LEFT_ARROW)) {
   x -= 5;
   } 
   if (keyIsDown(RIGHT_ARROW)) {
  x += 5;
   } 
   if (keyIsDown(UP_ARROW)) {
   y -= 5;
   } 
   if (keyIsDown(DOWN_ARROW)) {
   y += 5;
   }
   y1 -= 5; 
   push();
   fill(255, 255, 0);
   circle(x1, y1, 10);
   pop();
   ellipse(x, y, 50, 50);
   } 
  
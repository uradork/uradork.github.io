function setup() {
   createCanvas(500, 500);
   background(0);
  }
  function draw() {
   strokeWeight(random(50));
   stroke(random(255), random(255), random(255));
   point(mouseX, mouseY);
  } 
  
  
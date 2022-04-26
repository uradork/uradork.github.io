function setup() {
   createCanvas(500, 500);
   background(200);
  }  
  
  function draw() { 
    if (mouseIsPressed)
   stroke(255, 255, 0);
   line(pmouseX, pmouseY, mouseX, mouseY); 
  }  

  
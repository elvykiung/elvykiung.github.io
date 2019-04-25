//1. function run once only
function setup() {
  //width, height
  createCanvas(400, 300);
  //background() mean only apprea once
  background(250, 250, 100);
}
//2. draw is loops
function draw() {
  //backgrounf 0 = black, the the loops so it will redraw over
  // background(100);

  rectMode(CENTER);
  //rectagular
  // fill(0, 0, 255);
  // stroke(0, 255, 0);
  // strokeWeight(4);
  // rect(200, 150, 150, 150);
  //ellips
  fill(255, 0, 0, 175);
  noStroke();
  // build in keywords mouseX mouseY= follow the mouse
  ellipse(mouseX, mouseY, 50, 50);
}
//3. event function happen on event
function mousePressed() {
  background(250, 250, 100);
}

//4. declarel variable, inital value, use ==> var name = ;

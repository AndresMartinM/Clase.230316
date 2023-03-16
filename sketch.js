function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index : -1;');
  createA("https://github.com/AndresMartinM","Click","_blank").class('link');
  background(255);
    frameRate(60);
}

function draw() {
  text("a",random(0,windowWidth),random(0,windowHeight));
}

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}
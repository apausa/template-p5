let value = 255;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(value);
}

function mouseMoved() {
  value -= 1;
}

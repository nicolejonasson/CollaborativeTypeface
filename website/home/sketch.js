let angle = 0;
let letters;
let rotateMouse;
let rotateMouseY;
let zoom;
let canvas;

function preload(){
  letters = loadModel("letters1.obj");
}

function setup() {

  canvas= createCanvas(windowWidth+700,windowHeight+600,WEBGL);
  // canvas.parent("canvas-container");
  canvas.position(0,0);
  canvas.style("z-index","-1");
  background(150);

}

function draw() {
  background(255,255,255,0.1);
  // let camX = map(mouseX,0, width, -200,200);
  //
  let zoom = mouseY;
  camera(0,0,zoom,0,0,0,0,1,0);

  ambientLight(255,255,255);
  // directionalLight(255,0,255,1,-1,0);
  rotateX(3.08);
  rotateY(angle+rotateMouse);
  // rotateZ(rotateMouseY);
  angle += -0.001;
  rotateMouse = (mouseX * 0.01);
  // box(100);
  fill(255,255,255);
  stroke(0);
  strokeWeight(0.5);
  model(letters);




}

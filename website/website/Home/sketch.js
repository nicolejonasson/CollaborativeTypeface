let angle = 0;
let letters;
let rotateMouse;
let rotateMouseY;
let canvas;

function preload(){
  letters = loadModel("letters1.obj");
}

function setup() {
  canvas= createCanvas(windowWidth,windowHeight,WEBGL);
  canvas.position(0,0);
  canvas.style("z-index","-1");
  background(150);

}

function draw() {
  background(255);
  let camX = map(mouseX,0, width, -200,200);
  camera(0,0,mouseY,0,0,0,0,1,0);

  ambientLight(255,255,255);
  directionalLight(255,0,255,1,-1,0);
  rotateX(3.08);
  rotateY(angle+rotateMouse);
  // rotateZ(rotateMouseY);
  angle += -0.001;
  rotateMouse = (mouseX * 0.01);
  rotateMouseY = (mouseY * 10);
  // box(100);
  model(letters);




}


let canvas;


function setup() {
  canvas= createCanvas(windowWidth,1500,WEBGL);
  canvas.position(0,0);
  canvas.style("z-index","-10");
  background(150);

}

function draw() {
  background(255,255,255,0.1);

  let rotateMouse = (mouseX * 0.01);
  let mouse= mouseY-300;

  for (let x = 100; x<350; x+=50){
    push();
    translate(x,-mouse,mouse);
    rotateY(rotateMouse);
    fill(220,220,220, 0.5);
    strokeWeight(1);
    plane(200);
  }

}

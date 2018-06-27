let canvas;




function setup() {
  canvas= createCanvas(2200,windowHeight,WEBGL);
  // canvas.position(0,0);
  canvas.position(0,0);
  canvas.parent("canvasContainer");
  canvas.style("z-index","-1");
  //


}

function draw(){
  background(255);

  let rotateMouse = (mouseX * 0.01);
  let mouse= mouseY-100;
  let z = -mouseY+200;
  for (let x = -0; x<50; x+=50){
    push();
    translate(x*mouse,x,700+z);
    rotateY(rotateMouse);
    fill(250,250,250,0.5);
    strokeWeight(1);
    box(200);

    pop();

  }

  translate(100,mouseY);

}

let canvas;




function setup() {
  canvas= createCanvas(2200,windowHeight,WEBGL);
  canvas.position(0,0);
  canvas.parent("canvasContainer");
  canvas.style("z-index","-1");

}

function draw(){
  background(255,255,255,0.5);

  let rotateMouse = (mouseX * 0.01);
  let mouse= mouseY*0.5;
  ambientLight(100);

  for (let x = -150; x<50; x+=50){
    push();
    translate(0,0,mouse);
    rotateY(rotateMouse*2);
    rotateX(mouse*0.01);

    fill(220,220,220,0.5);
    strokeWeight(0.5);
    stroke(0);
    box(150);





  }



}

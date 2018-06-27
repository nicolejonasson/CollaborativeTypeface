
// let canvas;
let database;
let drawing = [];
let path = [];
let currentPath = [];
let isDrawing= false;
let strokeW = 2;
let canvas;
let backColor = 0;
let strokeColor = 255;


function setup(){
  canvas = createCanvas(1000,800);

  canvas.parent("canvasContainer");
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);

  // let button = select("#size");
  // button.mousePressed(increaseSize);


  let saveButton = select("#save");
  saveButton.mousePressed(saveDrawing);


  let color = select("#colorCanvas");
  color.mousePressed(colorCanvas);


  let clearButton = select ("#clear");
  clearButton.mousePressed(clearDrawing);

  var config = {
    apiKey: "AIzaSyDTLvn12YhyZ86R_zHw2AauWa8swoJwRZc",
    authDomain: "collab-6fa95.firebaseapp.com",
    databaseURL: "https://collab-6fa95.firebaseio.com",
    projectId: "collab-6fa95",
    storageBucket: "collab-6fa95.appspot.com",
    messagingSenderId: "942968685131"

  };
  firebase.initializeApp(config);
  database = firebase.database();



  let ref = database.ref("DrawingCanvas");
  ref.on("value", gotData, errData);

}


function startPath(){
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath(){
  isDrawing = false;
}





function draw(){
  background(backColor);

  if (isDrawing){
    let point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }
  stroke(strokeColor);
  strokeWeight(5);
  noFill();



  for (let i = 0; i < drawing.length; i++){
    let path = drawing[i];
    beginShape();
    for (let j = 0; j < path.length; j++){
      vertex (path[j].x, path[j].y)
    }
  endShape();
  }

}

// function increaseSize(){
//   console.log(strokeW);
//   strokeW ++;
// }





function saveDrawing(){
  let ref = database.ref("DrawingCanvas");
  let data = {
    name: "nicole",
    drawing: drawing
  };

  let result = ref.push(data, dataSent);
  console.log(result.key);

  function dataSent(status){
    console.log(status);
  }
}


function gotData(data){

  var elements = selectAll(".listing");
  for (var i = 0; i< elements.length; i++){
    elements[i].remove();
  }
  let drawing = data.val();
  let keys = Object.keys(drawing);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];

    let name = drawing[key].name;
    console.log(name);

    let li = createElement("li", " ");
    li.class("listing");
    let ahref = createA("#drawing-container", key);
    ahref.mousePressed(showDrawing);
    ahref.parent(li);

    // let perma = createA("?id=" + key, "permalink");
    // perma.parent(li);

    li.parent("drawingList");
    console.log(key);
  }

}


function errData(err){
  console.log(err);

}

function showDrawing(key){

  if ( key instanceof MouseEvent){
       key = this.html();
  }

    // firebase.database().ref("DrawingCanvas")
  //
  let ref = database.ref("DrawingCanvas/" + key);
  ref.once("value", oneDrawing, errData);




  function oneDrawing(data){

    let dbdrawing = data.val();
    drawing = dbdrawing.drawing;

    console.log(drawing);

  }
  // console.log(this.html());
}

function clearDrawing(){
  console.log("clearing");
  drawing = [];
}


function colorCanvas(){
  if (backColor == 0) {
    backColor = 255;
    strokeColor = 0;
  }
  else{
    backColor = 0;
    strokeColor = 255;
  }
}

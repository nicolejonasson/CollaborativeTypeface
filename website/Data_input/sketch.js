let canvas;
let score;
let database;
let initialInput;
let submit;

function setup(){
  canvas = createCanvas(600,500);
  canvas.parent("canvasContainer");

  score = 0;
  createP("click and brat your score");
  button = createButton("click");
  button.mousePressed(increaseScore);
  initialInput = createInput("initials");
  submitButton = createButton("submit");
  submitButton.mousePressed(submitScore);


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

  let ref = database.ref("scores");
  ref.on("value", gotData, errData);


}

function gotData(data){
  // console.log(data.val());
  let scoreListings = selectAll('.scoreListing');
  for (var i = 0; i < scoreListings.length; i++){
    scoreListings[i].remove();
  }


  let scores = data.val();
  var keys = Object.keys(scores);
  // console.log(keys);

  for(let i= 0; i< keys.length; i++){
    let k = keys[i];
    let initial = scores[k].initial;
    let score = scores[k].score;
    // console.log(initial, score);

    let li = createElement("li", initial + " : " + score);
    li.class ( "scoreListing")
    // li.parent('scoreList');

  }
}


function errData(err){
  console.log("ERROR!");
  console.log(err);
}

function submitScore(){
  init = initialInput.value();
  console.log(init);
  let data = {
    initial: init,
    score:score
  }
  let ref = database.ref("scores");
  ref.push(data);
  console.log(data);
}



function increaseScore(){
  score ++;
}

function draw(){
  background(255);
  textAlign(CENTER);
  textSize(score);
  text(score, width/2, height/2);


}

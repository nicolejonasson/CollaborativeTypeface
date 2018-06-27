function getRandomInt (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
  this.each(function() {
    var image = $(this);

    // Viewport Dimensions
    var vpHeight = $(window).height();
    var vpWidth = $(window).width();

    // Image Position
    var xPos = getRandomInt(0, vpWidth - image.width());
    var yPos = getRandomInt(0, vpHeight - image.height());
    var zIndex = getRandomInt(0,13);

    // Animation Duration
    if(animate) var dur = 500;
    else var dur = 0;

    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
  });
};

//Setup
$('img').randomOrder(false);
$('img').draggable({stack: "img"});

// Change after 10 Seconds
setInterval(function(){
  $('img').randomOrder(true);
}, 10000);

//beeep

audio = ["../beep/beep-01.mp3", "../beep/beep-02.mp3", "../beep/beep-03.mp3", "../beep/beep-04.mp3", "audio-5.mp3"];

function getRandomAudio() {
    var max = audio.length;
    return Math.floor(Math.random() * (max + 1));
}

$btn.on('mouseover', function(){
  var index = getRandomAudio(); // random index
  $audio.attr('src', audio[index]); // change src
  $audio.get(0).play();
});

$btn.on('mouseout', function() { $audio.get(0).pause() });



//sound

//var Audio = $("#yay")[0];
//$("#bue")
//	.mouseenter(function() {
//		Audio.play();
//	});
//
//
//var yayAudio = document.getElementById("yay"); 
//
//function playYay() { 
//    yayShotAudio.play(); 
//} 
//item.addEventListener('mouseleave', yayShotAudio.playYay, false);

//sound


  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
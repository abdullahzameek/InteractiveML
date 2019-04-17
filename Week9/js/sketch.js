let video, style, output, reference;
let transfer = false;
let audio;
let w = window.innerWidth;
let h = window.innerHeight;

function preload(){
  audio = loadSound('assets/Pokemon.mp3');
}

function setup() {
  // put setup code here
  createCanvas(w, h);
  reference = createCapture(VIDEO);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  reference.hide()

  style = ml5.styleTransfer("../models/pokemodel", video, function () {
    console.log("model is loaded...");
  });

  output = createImg('');
  output.hide();
}

function draw() {
  // put drawing code here
  if (!transfer) {
    console.log("show camera source...");
    image(video, w/5, h/6);
  } else {
    console.log("show styled result...");
    if(style.ready){
      style.transfer(function (err, result) {
        output.attribute('src',result.src);
      });
    }
    image(output, w/5, h/6, 640, 480);
    console.log(output.width + ":" + output.height);
  }
}

function keyPressed() {
  if (key === ' ') {
    transfer = !transfer;
    if(audio.isPlaying()){
      audio.stop();
    }
    else{
      audio.play();
    }
  }
}

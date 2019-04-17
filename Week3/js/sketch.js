let img;
let classifier;
let name;
let probability;

function preload(){
  img = loadImage("img/moon.jpg");
  
}
function setup() {
  createCanvas(400, 400);
  background(0);
  classifier = ml5.imageClassifier('MobileNet', modelReady)
}


function draw() {
  image(img, 0,0,400,400);
}

function classifyImage(){
  classifier.predict(img, gotResult);
}

function gotResult(err,results){

}
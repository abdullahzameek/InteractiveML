let text;
let features;
let classifier;
let imgArray = [];


function preload(){
  
  console.log("Pre load works?");
  text = loadStrings("pokemonList.txt");
  for(let i=0; i<6;i++){
    console.log("Adding an image now...");
    imgArray[i] = loadImage('../pokemon/'+i.toString()+'.png');
  }
  
}

function setup() {
  features = ml5.featureExtractor('MobileNet');
  classifier = features.classification();
  createCanvas(1280, 720);
  background(255);
}
  


function imageAdded()
{
  console.log("Training Model right now.."); 
  classifier.train();
  console.log("Training completed!!");
}


function gotResult(labels) {
  console.log(labels);
}

function draw() {
  for(let j=0; j<6; j++){
    image(imgArray[j],255*j,100,250,250);
    console.log(text[j]);
    classifier.addImage(imgArray[j],text[j]);
}

imageAdded();
console.log("done training"); 
classifier.classify(imgArray[0], gotResult);
noLoop();
}



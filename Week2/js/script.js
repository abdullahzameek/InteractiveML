//var allows redefinitions of variables
//let doesnt allow redefinitions of variables

//var allows access of a variable from outside of its
//scope


let videoStream;
let poseNet;
let poses;

function setup() {
    createCanvas(640, 480);
    background(255, 0, 0);
    videoStream = createCapture(VIDEO);
    videoStream.hide() //hides the video html element

    poseNet = ml5.poseNet(videoStream, modelLoaded);
    // Listen to new 'pose' events
    poseNet.on('pose', function (results) {
        poses = results;
    });
}

function draw() {
    background(0);
    image(videoStream, 0, 0); //image(img, x,y, w, h)

    console.log(poses);
    if (poses != undefined) {
        for (let i = 0; i < poses.length; i++) {
            for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
                let x = poses[i].pose.keypoints[j].position.x;
                let y = poses[i].pose.keypoints[j].position.y;
            
                fill(255,255,0);
                noStroke();
                ellipse(x,y,5,5)
            }
        }
    }
}

function modelLoaded() {
    console.log('Model Loaded!');
}
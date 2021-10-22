function preload(){}

function setup(){
    canvas = createCanvas(400, 325);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 325);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 325);
}

function take_snapshot(){
    save('CarNose_Filter_Image.png');
}

function modelLoaded(){
    console.log("PoseNet initialized")
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("Nose X:" + result[0].pose.nose.x + "; Nose Y:" + result[0].pose.nose.y);
    }
}
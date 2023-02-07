function setup(){
    canvas=createCanvas(500,500);
    canvas.position(570,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model is loaded!!!");
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
    }
}
function draw(){
    background("lightblue");
    fill("darkslateblue");
    textSize(25);
    text("Trisha",50,70);
}
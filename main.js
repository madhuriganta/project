musX=0;
musY=0;
function preload() {
    mus = loadimage("R.jpg")
}

function setup() {
    canvas = createCanvas(300 , 300)
    canvas.center();
    video = createCanvas(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}

function modelLoaded() {
    console.log("PoseNet Is Initialized")
}

function draw() {
    image(video , 0, 0, 300 , 300);
    fill(255,0,0);
    image(mus , musX , musY , 30 , 30)
}

function take_snapshot(){
    save('myFilterImage.png')
}

function gotPoses() {
    if(result.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nos.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("mus x = " + musX);
        console.log("mus y = " + musY);
    }
}
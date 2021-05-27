var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var noseX = 0;
var noseY = 0;
var scoreLeft = 0;
var scoreRight = 0;
var scoreNose = 0;
var song1_status = "";
var song2_status = "";
var song3_status = "";
var One = "";
var Taylor = "";
var Alan = "";

function preload(){
    One = loadSound("1D.mp3");
    Taylor = loadSound("Taylor_Swift.mp3");
    Alan = loadSound("Alan.mp3");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(650, 250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
if(results.length > 0){
    

    console.log(results);
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
}
}

function draw(){
    image(video, 0, 0, 400, 400);

    song1_status = One.isPlaying();
    song2_status = Taylor.isPlaying();
    song3_status = Alan.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeft > 0.2){
        circle(leftWristX, leftWristY, 30);
        Taylor.stop();
        Alan.stop();
       if(song1_status == false){
           One.play();
           document.getElementById("song_name").innerHTML = "Playing They Don't Know About Us";
       }
}

        if(scoreRight > 0.2){
        circle(rightWristX, rightWristY, 30);
        One.stop();
        Alan.stop();
        if(song2_status == false){
          Taylor.play();
          document.getElementById("song_name").innerHTML = "Playing Love Story";
      }
}
   

}

      
function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}




/*if(scoreNose > 0.2){
    circle(noseX, noseY, 30);
    One.stop();
    Taylor.stop();

if(song3_status == false){
    Alan.play();
    document.getElementById("song_name").innerHTML = "Playing Faded.  ";
}
}*/
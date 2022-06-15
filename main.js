
noseX=0;
noseY=0;


function preload(){
  wig=loadImage("https://i.postimg.cc/XNmgK70G/wig.png");
  lip=loadImage("https://i.postimg.cc/rs1yvsKz/Picsart-22-06-02-14-57-48-220.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
  if(results.length>0);
  {
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
  }
}
function draw(){
  image(video,0,0,300,300);
  image(wig,noseX-290,noseY-225,210,300);
  image(lip,noseX-197,noseY-94,35,27);
}

function take_snapshot(){
    save('MyFilterImage.png');
}



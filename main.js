function preload(){

}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
   
}
function draw(){
    image(video,100,100,500,400);
    circle(20,30, 45);
    circle(20,375,45);
    circle(480,375,45);
    circle(480,30,45);
    rect(10, 45, 10, 325);
    rect(45, 10, 418, 10);
    rect(460,32,10,325);
    rect(10,375,450,10);
}
function take_snapshot(){
save("Michael.png");
}

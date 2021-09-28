function setup(){
    canvas=createCanvas(590, 340);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 590, 340);
}

function take_snapshot(){
    save('loba.png');
}

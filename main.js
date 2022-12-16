img = "";

function preload() {
  img = loadImage('https://cdn0.rubylane.com/shops/1384268/0387.1L.jpg?20');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

}

function draw() {
  image(img, 0, 0, 300, 300);
  image(video, 50, 50, 100, 100);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
 
var ballOne, ballTwo;
var balls = [];

function setup() {

  
  createCanvas(windowWidth,windowHeight);

for(i=0; i<10; i++) {
  balls[i] = new Ball( random(30, windowWidth-30), random(30, windowHeight-30), 5, 7, "basketball" );
  }


}

function draw() {
  background(255);

  beginShape();

  for(i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].show();
    
    stroke(0,0,0);
    vertex(balls[i].xPos,balls[i].yPos);
    //   if(i<balls.length-1){
    //       fill(255,0,0);
    //         vertex(balls[balls.length].xPos,balls[balls.length].yPos);
    //   }
  }
  endShape(CLOSE);
 
}

function Ball( _xPos, _yPos, xSpeed, ySpeed, type ){
  // this.position = createVector(_xPos, _yPos);
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.xSpeed = random(-1,1);
  this.ySpeed = random(-1,1);
  this.size = random(10,20);
  this.color = color(0,0,0 );
  this.type = type;



}

Ball.prototype.show = function() {
  noStroke();
  fill(this.color, this.color[3]);
  ellipse(this.xPos, this.yPos, this.size, this.size);
}

Ball.prototype.move = function() {

  if((this.xPos > windowWidth-this.size/2) || (this.xPos < this.size/2)) {
    this.xSpeed *= -1;
  }

  if((this.yPos > windowHeight-this.size/2) || (this.yPos < this.size/2)) {
    this.ySpeed *= -1;
  }

  this.xPos += this.xSpeed;
  this.yPos += this.ySpeed;

}


// Ball.prototype.zPos = 10;


var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

var sound

function setup() {
  createCanvas(600, 400);
  sound.play();
}

function preload(){
  sound = loadSound('loco.mp3');
}

function draw() {
  //dash line
  background(200);
  line(300,30,300,0);
  line(300,90,300,60);
  line(300,150,300,120);
  line(300,210,300,180);
  line(300,270,300,240);
  line(300,330,300,300);
  line(300,390,300,360);
  line(300,450,300,420);
  // draw left player
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  ellipse(ballX, ballY, ballSize)
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // TOP
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // EDGE
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // RIGHT
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
  }
  
    // LEFT
  if (ballX < 0 + playerWidth & ballY >= playerL & ballY <= playerL + playerHeight) {
    ballX = 0 + playerWidth
    ballXSpeed = -ballXSpeed
  }
  
   // LEFT
  if (ballX < 0 - playerWidth & ballY >= playerL & ballY <= playerL + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  if (ballX < 0) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
  }
  // Finish game
  if (scoreL === 5 || scoreR === 5){
    noLoop()
  }
}

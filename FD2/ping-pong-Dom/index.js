const blockMain = document.createElement('div');
blockMain.classList.add('block-Main');
document.body.append(blockMain);

const btn = document.createElement('button');
btn.classList.add('btn-style');
btn.innerHTML = 'START';
blockMain.append(btn);

const score = document.createElement('p');
score.classList.add('score-style');
score.innerHTML = '0 : 0'
blockMain.append(score);
let scoreLeft = 0;
let scoreRight = 0;

const field = document.createElement('div');
field.classList.add('field');
blockMain.append(field);

const leftRacket = document.createElement('div');
leftRacket.classList.add('leftRacket-style');
field.append(leftRacket);
const rightRacket = document.createElement('div');
rightRacket.classList.add('rightRacket-style');
field.append(rightRacket);
const ball = document.createElement('div');
ball.classList.add('ball-style');
field.append(ball);

const count = document.createElement('div');
count.classList.add('count-style');
//count.innerHTML = '3';
count.style.display = 'none';
field.append(count);
const countText = document.createElement('span');
countText.classList.add('countText-style');
count.append(countText);
let timerId = null;

let posField = field.getBoundingClientRect();
let posLeftRacket = leftRacket.getBoundingClientRect();
let posRightRacket = rightRacket.getBoundingClientRect();
let posBall = ball.getBoundingClientRect();

let limitsTop = posField.top;
let limitsBottom = posField.top + posField.height - posLeftRacket.height;
let shiftLeft = posField.height/2 - posLeftRacket.height/2;
let shiftRight = posField.height/2 - posRightRacket.height/2;
let shiftBallX = posField.width/2 - posBall.width/2;
let shiftBallY = posField.height/2 - posBall.height/2;
let saveBallX = shiftBallX;
let saveBallY = shiftBallY;

let keys = {};
let posBallXY = {
   posX: shiftBallX, 
   posY: shiftBallY,
   accelX : 0.8,
   accelY : 0.8,
   speedX: getSpeedX(),
   speedY: getSpeedY(),
   update: function() {
      ball.style.left = this.posX + "px";
      ball.style.top = this.posY + "px";
   }
}
function getSpeedX() { //axis X
   let speedX = (Math.floor(Math.random()*2) - 1) * 2;
   //console.log(speedX);
      if (speedX) {  
         return speedX;
      }   else {
         return 2;
      } 
}
function getSpeedY() { //axis Y
   let speedY = (Math.floor(Math.random()*2) - 1) * 3;
      if (speedY) {
         return speedY;
      } else {
         return -2;
      }
}
posBallXY.update();
document.addEventListener("keydown", function (event) {
   keys[event.key] = true;
});
document.addEventListener("keyup", function (event) {
   keys[event.key] = false;
});
function moveRackets() {
   if (keys["z"] || keys["я"]) {
      posLeftRacket = leftRacket.getBoundingClientRect();
      shiftLeft += 5;
      leftRacket.style.top = shiftLeft + "px";
      if (posLeftRacket.top > limitsBottom) {
            shiftLeft = limitsBottom - limitsTop;
            leftRacket.style.top = shiftLeft + "px";
      }
   }
   if (keys["a"] || keys["ф"]) {
      posLeftRacket = leftRacket.getBoundingClientRect();
      shiftLeft -= 5;
      leftRacket.style.top = shiftLeft + "px";
      if (posLeftRacket.top < limitsTop + 1.1) {
            shiftLeft = 0;
            leftRacket.style.top = shiftLeft + "px";
      }
   }
   if (keys["."] || keys["ю"]) {
      posRightRacket = rightRacket.getBoundingClientRect();
      shiftRight += 5;
      rightRacket.style.top = shiftRight + "px";
      if (posRightRacket.top > limitsBottom) {
            shiftRight = limitsBottom - limitsTop;
            rightRacket.style.top = shiftRight + "px";
      }
   }
   if (keys[";"] || keys["ж"]) {
      posRightRacket = rightRacket.getBoundingClientRect();
      shiftRight -= 5;
      rightRacket.style.top = shiftRight + "px";
      if (posRightRacket.top < limitsTop + 1.1) {
            shiftRight = 0;
            rightRacket.style.top = shiftRight + "px";
      }
   }
   requestAnimationFrame(moveRackets);
}
   moveRackets();

btn.onclick = startGame;
function startGame() {
   timerId = requestAnimationFrame(startGame);
   posBallXY.posX += posBallXY.speedX;
   posBallXY.posY += posBallXY.speedY;
   posBall = ball.getBoundingClientRect();
   let elemLeft = document.elementFromPoint(posBall.left - 1, posBall.top + posBall.height/2);
   let elemRight = document.elementFromPoint(posBall.left + posBall.width, posBall.top + posBall.height/2);
   let x = Math.sin(45*Math.PI/180)*(posBall.width/2);
   let y = Math.cos(45*Math.PI/180)*(posBall.height/2);

   if (posBallXY.posY + posBall.height > posField.height - 6) { //bounce off the floor
      posBallXY.speedY = - posBallXY.speedY - posBallXY.accelY;
      posBallXY.posY = posField.height - posBall.height - 6;
   }
   if (posBallXY.posY < 0) {
      posBallXY.speedY = - posBallXY.speedY + posBallXY.accelY; //bounce off the ceiling
      posBallXY.posY = 0;
   }

if (elemLeft === leftRacket) { //rebound from the left racket
   if (posBallXY.posX < posLeftRacket.width + 20) {
      posBallXY.speedX = - posBallXY.speedX + posBallXY.accelX;
      posBallXY.posX = posLeftRacket.width + 20;
   }
}
if (posBallXY.posX < 2) { //misses on the left racket
   cancelAnimationFrame(timerId);
   scoreRight += 1;
   score.innerHTML = `${scoreLeft} : ${scoreRight}`;
   if (scoreRight === 5) {
         gameOver("Right");
   } else {
         setTimeout(counterMake, 1000);
   }
}

if (elemRight === rightRacket) { //rebound from the right racket
   if (posBallXY.posX + posBall.width > posField.width - posRightRacket.width - 20) {
      posBallXY.speedX = - posBallXY.speedX - posBallXY.accelX;
      posBallXY.posX = posField.width - posRightRacket.width - 20 - posBall.width;
   }
}
if (posBallXY.posX + posBall.width > posField.width - 5) { //misses on the right racket
   cancelAnimationFrame(timerId);
   scoreLeft += 1;
   score.innerHTML = `${scoreLeft} : ${scoreRight}`;
   if (scoreLeft === 5) {
      gameOver("Left");
   } else {
         setTimeout(counterMake, 1000);
   }
}
posBallXY.update();
}
function counterMake() {
   ball.remove();
   cancelAnimationFrame(timerId);
   count.style.display = "block";
   countText.innerHTML = "3";

   setTimeout(function() {
      countText.innerHTML = "2";
   }, 1000);
   setTimeout(function() {
      countText.innerHTML = "1";
   }, 2000);
   setTimeout(function() {
      count.style.display = "none";
   }, 3000);
   setTimeout(drawBall, 4000);
}
function drawBall() { //new game
   field.append(ball);
   posBallXY.posX = saveBallX;
   posBallXY.posY = saveBallY;
   posBallXY.update();
   posBallXY.speedX = getSpeedX();
   posBallXY.speedY = getSpeedY();
   btn.onclick = startGame();
}
function gameOver(arg) {
   ball.remove();
   count.style.display = "block";
   count.classList.add('text_ch');
   switch (arg) {
      case "Right":
            countText.innerHTML = ` Win ${arg} player!!!`;
            break;
      case "Left":
            countText.innerHTML = ` Win ${arg} player!!!`;
            break;
   }
}
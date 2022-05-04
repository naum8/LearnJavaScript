const svgNS = "http://www.w3.org/2000/svg";
const block = document.createElementNS(svgNS, "svg");
const objBlock = {
	width: 1000,
	height: 700,
}
const halfBlockWidth = objBlock.width / 2;
const halfBlockHeight = objBlock.height / 2;
block.setAttributeNS(null, "width", `${objBlock.width}px`);
block.setAttributeNS(null, "height", `${objBlock.height}px`);
block.classList.add("block");
document.body.prepend(block);

const board = document.createElementNS(svgNS, "rect");
const objBoard = {
	width: 800,
	height: 500,
	left: 50,
	top: 140,
}
const halfBoardWidth = objBoard.width / 2;
const halfBoardHeight = objBoard.height / 2;
board.setAttributeNS(null, "width", `${objBoard.width}px`);
board.setAttributeNS(null, "height", `${objBoard.height}px`);
board.setAttributeNS(null, "x", `${0}px`);
board.setAttributeNS(null, "y", `${objBoard.top}px`);
board.classList.add("board");
block.append(board);

const buttonStart = document.querySelector(".buttonStart");
const objButtonStart = {
	width: 100,
	height: 40,
	left: 30,
}
buttonStart.style.width = `${objButtonStart.width}px`;
buttonStart.style.height = `${objButtonStart.height}px`;
buttonStart.style.left = `${objButtonStart.left}px`;
buttonStart.style.top = `${(objBoard.top - objButtonStart.height)}px`;

const ball = document.createElementNS(svgNS, "circle");
const objBall = {
	width: 50,
	height: 50,
}
const halfBallWidth = objBall.width / 2;
const halfBallHeight = objBall.height / 2;
ball.setAttributeNS(null, "r", `${halfBallWidth}px`);
ball.setAttributeNS(null, "cx", `${halfBoardWidth}px`);
ball.setAttributeNS(null, "cy", `${halfBoardHeight + objBoard.top}px`);
ball.classList.add("ball");
block.append(ball);

const leftRacket = document.createElementNS(svgNS, "line");
const objLeftRacket = {
	width: 20,
	height: 130,
}
const halfleftRacketWidth = objLeftRacket.width / 2;
const halfleftRacketHeight = objLeftRacket.height / 2;
leftRacket.setAttributeNS(null, "x1", `${halfleftRacketWidth}`);
leftRacket.setAttributeNS(null, "y1", `${halfBoardHeight - halfleftRacketHeight + objBoard.top}`);
leftRacket.setAttributeNS(null, "x2", `${halfleftRacketWidth}`);
leftRacket.setAttributeNS(null, "y2", `${halfBoardHeight + halfleftRacketHeight + objBoard.top}`);
leftRacket.classList.add("leftRacket");
block.append(leftRacket);

const rightRacket = document.createElementNS(svgNS, "line");
const objRightRacket = {
	width: 20,
	height: 130,
}
const halfRightRacketWidth = objRightRacket.width / 2;
const halfRightRacketHeight = objRightRacket.height / 2;
rightRacket.setAttributeNS(null, "x1", `${objBoard.width - halfRightRacketWidth}`);
rightRacket.setAttributeNS(null, "y1", `${halfBoardHeight - halfRightRacketHeight  + objBoard.top}`);
rightRacket.setAttributeNS(null, "x2", `${objBoard.width - halfRightRacketWidth}`);
rightRacket.setAttributeNS(null, "y2", `${halfBoardHeight + halfRightRacketHeight  + objBoard.top}`);
rightRacket.classList.add("rightRacket");
block.append(rightRacket);

const header = document.createElementNS(svgNS, "text");
const objHeader = {
	top: 120,
	left: 40,
	fontSize: 100,
	textLength: 200,
}
let pointLeftPlayer;
let pointRightPlayer;
header.setAttributeNS(null, "font-size", `${objHeader.fontSize}`);
header.setAttributeNS(null, "textLength", `${objHeader.textLength}`);
header.setAttributeNS(null, "text-anchor", "middle");
header.setAttributeNS(null, "x", `${objHeader.left}%`);
header.setAttributeNS(null, "y", `${objHeader.top}`);
header.classList.add("header");
block.append(header);

const counter = document.createElementNS(svgNS, "text");
const objCounter = {
	left: 38,
	fontSizeForCount: 100,
	fontSizeForTextWinner: 80,
	textLength: 100,
}
counter.setAttributeNS(null, "y", `${halfBoardHeight + objBoard.top}`);
counter.setAttributeNS(null, "x", `${objCounter.left}%`);
counter.setAttributeNS(null, "text-anchor", "middle");
counter.append(`${3}`);
counter.classList.add("counter");
block.append(counter);

let pressedKeyForLeftRacket;
let pressedKeyForRightRacket;

document.addEventListener("keydown", function assignNamePressedKeyVariable(event) { 
	switch (event.key) {
		case "Shift":
		case "Control":
			pressedKeyForLeftRacket = event.key;
			break;
		case "ArrowUp":
		case "ArrowDown":
			pressedKeyForRightRacket = event.key;
			break;
	}
});
document.addEventListener("keyup", function clearValueVariable(event) { 
	switch (event.key) {
		case "Shift":
		case "Control":
			pressedKeyForLeftRacket = "";
			break;
		case "ArrowUp":
		case "ArrowDown":
			pressedKeyForRightRacket = "";
			break;
	}
});

let moveLeftRacket = 1; 
let moveRightRacket = 1; 
let xDirection; 
let yDirection; 
let moveBallX; 
let moveBallY; 
const maxPoint = 5;
let racketEvent;
let counterInterval;
let timer0;
let clearCounterInterval;
let continueGame;

restartGame();
buttonStart.addEventListener("click", function start(event) { 
	if(event.target === buttonStart) {
		randomBallDirection();
		restartGame();
		counter.style.display = "";
		ball.style.display = "none";
		timer0 = setTimeout(() => {counterInterval = setInterval(showCountdown, 1000)}, 0);
		clearCounterInterval = setTimeout(() => {clearInterval(counterInterval)}, 3100);
		continueGame = setTimeout(() => {racketEvent = setInterval(startGame, 0.04);}, 3200);
	}
});

function randomBallDirection() { 
	let x = Math.random();
	if(x < 0.5) {
		xDirection = -1;
	} else {
		xDirection = 1;
	}
	randomDirectionBallAlongY();
}
function randomDirectionBallAlongY() {
	let y = Math.random();
	if(y < 0.5) {
		yDirection = -y;
		moveBallY = y;
	} else {
		yDirection = y;
		moveBallY = y;
	}
}
function startGame() { 
	racketAction();
	ballMove();
}
function racketAction() { 
	if(pressedKeyForLeftRacket === "Shift" && (-moveLeftRacket + halfleftRacketHeight < halfBoardHeight + 1)) {
		elemMovement(leftRacket, 0, moveLeftRacket);
		moveLeftRacket -= 1;
	}
	if(pressedKeyForLeftRacket === "Control" && (moveLeftRacket + halfleftRacketHeight < halfBoardHeight + 1)) {
		elemMovement(leftRacket, 0, moveLeftRacket);
		moveLeftRacket += 1;
	}
	if(pressedKeyForRightRacket === "ArrowUp" && (-moveRightRacket + halfRightRacketHeight < halfBoardHeight + 1)) {
		elemMovement(rightRacket, 0, moveRightRacket);
		moveRightRacket -= 1;
	}
	if(pressedKeyForRightRacket === "ArrowDown" && (moveRightRacket + halfRightRacketHeight < halfBoardHeight + 1)) {
		elemMovement(rightRacket, 0, moveRightRacket);
		moveRightRacket += 1;
	}
}
function ballMove() {
	if(xDirection > 0) {
		if(moveBallX >= halfBoardWidth - objRightRacket.width - halfBallWidth && moveBallX <= halfBoardWidth - objRightRacket.width - halfBallWidth && moveBallY >= moveRightRacket - halfRightRacketHeight && moveBallY <= moveRightRacket + halfRightRacketHeight) {
			xDirection = -xDirection;
		} else if(moveBallX + halfBallWidth <= halfBoardWidth) { 
			if(yDirection > 0) { 
				if(moveBallY + halfBallHeight < halfBoardHeight) { 
					moveBallY += yDirection;
					elemMovement(ball, moveBallX, moveBallY);
				} else {
					yDirection = -yDirection;
				}
			}
			if(yDirection < 0) { 
				if(moveBallY - halfBallHeight > -halfBoardHeight) { 
					moveBallY += yDirection;
					elemMovement(ball, moveBallX, moveBallY);
				} else {
					yDirection = -yDirection;
				}
			}
			moveBallX += 1;
		} else {
			clearInterval(racketEvent);
			startingPosition();
			pointLeftPlayer += 1;
			header.textContent = `${pointLeftPlayer}:${pointRightPlayer}`;
			if(pointLeftPlayer === maxPoint) {
				counter.style.display = "";
				ball.style.display = "none";
				counter.setAttributeNS(null, "font-size", `${objCounter.fontSizeForTextWinner}`);
				counter.textContent = "Left Player - Winner";
				return;
			}
			ball.style.display = "none";
			counter.style.display = "";
			timer0 = setTimeout(() => {counterInterval = setInterval(showCountdown, 1000)}, 0);
			clearCounterInterval = setTimeout(() => {clearInterval(counterInterval)}, 3100);
			continueGame = setTimeout(() => {letContinueGame()}, 3200);
		}
	}

	if(xDirection < 0) {
		if(-moveBallX >= halfBoardWidth - objLeftRacket.width - halfBallWidth && -moveBallX <= halfBoardWidth - objLeftRacket.width - halfBallWidth && moveBallY >= moveLeftRacket - halfleftRacketHeight && moveBallY <= moveLeftRacket + halfleftRacketHeight) {
			xDirection = -xDirection;
		} else if(-moveBallX + halfBallWidth <= halfBoardWidth) { 
			if(yDirection > 0) { 
				if(moveBallY + halfBallHeight < halfBoardHeight) { 
					moveBallY += yDirection;
					elemMovement(ball, moveBallX, moveBallY);
				} else {
					yDirection = -yDirection;
				}
			}
			if(yDirection < 0) { 
				if(moveBallY - halfBallHeight > -halfBoardHeight) { 
					moveBallY += yDirection;
					elemMovement(ball, moveBallX, moveBallY);
				} else {
					yDirection = -yDirection;
				}
			}
			moveBallX -= 1;
		} else {
			clearInterval(racketEvent);
			startingPosition();
			pointRightPlayer += 1;
			header.textContent = `${pointLeftPlayer}:${pointRightPlayer}`;

			if(pointRightPlayer === maxPoint) {
				counter.style.display = "";
				ball.style.display = "none";
				counter.setAttributeNS(null, "font-size", `${objCounter.fontSizeForTextWinner}`);
				counter.textContent = "Right Player - Winner";
				return;
			}

			ball.style.display = "none";
			counter.style.display = "";
			timer0 = setTimeout(() => {counterInterval = setInterval(showCountdown, 1000)}, 0);
			clearCounterInterval = setTimeout(() => {clearInterval(counterInterval)}, 3100);
			continueGame = setTimeout(() => {letContinueGame()}, 3200);
		}
	}
}

function elemMovement(elem, x, y) { 
	elem.setAttributeNS(null, "transform", `translate(${x}, ${y})`);
}

function showCountdown() { 
	switch(counter.textContent) {
		case "3":
			counter.textContent = "2";
			break;
		case "2":
			counter.textContent = "1";
			break;
		case "1":
			counter.style.display = "none";
			ball.style.display = "";
			break;
	}
}

function letContinueGame() { 
	xDirection = -xDirection;
	randomDirectionBallAlongY();
	racketEvent = setInterval(startGame, 0.04);
}
function startingPosition() { 
	moveBallX = 0;
	moveBallY = 0;
	moveLeftRacket = 0;
	moveRightRacket	= 0;
	counter.textContent = "3";
	counter.setAttributeNS(null, "font-size", `${objCounter.fontSizeForCount}`);
	elemMovement(ball, 0, 0);
	elemMovement(leftRacket, 0, 0);
	elemMovement(rightRacket, 0, 0);
}
function restartGame() { 
	clearInterval(racketEvent);
	clearInterval(counterInterval);
	clearTimeout(timer0);
	clearTimeout(clearCounterInterval);
	clearTimeout(continueGame);
	pointLeftPlayer = 0;
	pointRightPlayer = 0;
	header.textContent = `${pointLeftPlayer}:${pointRightPlayer}`;
	counter.style.display = "none";
	ball.style.display = "";
	startingPosition();
}
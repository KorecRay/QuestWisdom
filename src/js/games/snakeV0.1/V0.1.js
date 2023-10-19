/* 
	DATE : 2022/6/19 
	Name : Snake Game.JS [JavaScript File]
	Author : Korec Ray
	Version : V0.1 BETA [2022/6/19]
	Description : Snake Game V0.1 BETA
*/

/** @type {HTMLCanvasElement} */

let canvas = document.getElementById("canvas");
let	ctx = canvas.getContext("2d");
canvas.width  = 476;
canvas.height = 476;

let Snake = new Object();


let food = new Object();

function setUp() {
	document.getElementById("play_btn").style.display = "none";
	Snake.length = 3;
	Snake.dir = 'R';
	Snake.body = [ [10, 9, 8] , [10, 10 ,10] ];
	Snake.head = [10, 10];
	setInterval(ketyownEvent, 1);
	generateFood();
	mainLoop();
}

function drawBackgrd() {
	ctx.fillStyle = "#1F2120";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#5E6463";
	for(let j=0 ; j<=19 ; j++){
		for(let k=0 ; k<=19 ; k++){
			ctx.fillRect(k*20 + 4*k, j*20 + 4*j, 20, 20);
		}
	}
}

function snake_move() {
	switch(Snake.dir){
		case 'T':
			Snake.body[0].unshift(Snake.body[0][0]);
			Snake.body[1].unshift(Snake.body[1][0] - 1);
			Snake.body[0].pop();
			Snake.body[1].pop();
			break;
		case 'B':
			Snake.body[0].unshift(Snake.body[0][0]);
			Snake.body[1].unshift(Snake.body[1][0] + 1);
			Snake.body[0].pop();
			Snake.body[1].pop();
			break;
		case 'R':
			Snake.body[0].unshift(Snake.body[0][0] + 1);
			Snake.body[1].unshift(Snake.body[1][0]);
			Snake.body[0].pop();
			Snake.body[1].pop();
			break;
		case 'L':
			Snake.body[0].unshift(Snake.body[0][0] - 1);
			Snake.body[1].unshift(Snake.body[1][0]);
			Snake.body[0].pop();
			Snake.body[1].pop();
			break;
	}
	Snake.head[0] = Snake.body[0][0];
	Snake.head[1] = Snake.body[1][0];
}

function drawSnake() {
	ctx.fillStyle = "rgb(255, 0, 0)";
	for(let k=0 ; k<Snake.body[0].length ; k++){
		ctx.fillRect((Snake.body[0][k]-1)*20 + 4*(Snake.body[0][k]-1), (Snake.body[1][k]-1)*20 + 4*(Snake.body[1][k]-1), 20, 20);
	}
}

function generateFood(x, y) {
	let randomX = Math.floor(Math.random()*20) + 1;
	let randomY = Math.floor(Math.random()*20) + 1;
	food.posX = randomX;
	food.posY = randomY;
}

var drawFood = () => {
	ctx.fillStyle = "rgb(125,125,255)";
	ctx.fillRect((food.posX-1)*20 + 4*(food.posX-1), (food.posY-1)*20 + 4*(food.posY-1), 20, 20);
}
function mainLoop() {
	snake_move();
	drawBackgrd();
	drawSnake();	
	if(Snake.head[0] == food.posX && Snake.head[1] == food.posY){

		Snake.length ++;

		if(Snake.body[0][Snake.body[0].length-1] - Snake.body[0][Snake.body[0].length-2] == 0){
			if(Snake.body[1][Snake.body[0].length-1] - Snake.body[1][Snake.body[1].length-2] > 0){
				Snake.body[1].push(Snake.body[1][Snake.body[1].length-1] + 1);
			}
			else{
				Snake.body[1].push(Snake.body[1][Snake.body[1].length-1] - 1);
			}
			Snake.body[0].push(Snake.body[0][Snake.body[0].length-1]);
		}
		else if(Snake.body[0][Snake.body[0].length-1] - Snake.body[0][Snake.body[0].length-2] > 0){
			Snake.body[0].push(Snake.body[0][Snake.body[0].length-1] + 1);
			Snake.body[1].push(Snake.body[1][Snake.body[1].length-1]);
		}
		else{
			Snake.body[0].push(Snake.body[0][Snake.body[0].length-1] - 1);
			Snake.body[1].push(Snake.body[1][Snake.body[1].length-1]);
		}

		generateFood();
	}
	else{
		drawFood();
	}
	if(Snake.head[0] < 1 || Snake.head[0] > 20 || Snake.head[1] < 1 || Snake.head[1] > 20){
		clearTimeout(mainLoop);
		clearInterval(ketyownEvent);
		ctx.fillStyle = "#f03";
		ctx.font = "40px Arial";
		ctx.fillText("Game Over", 140, 300);
		document.getElementById("play_btn").style.display = "flex";
		document.getElementById("score").innerHTML = "Score: " + (Snake.length - 3).toString();
	}
	else{
		setTimeout(mainLoop, 100);
	}
}

function ketyownEvent() {
	window.onkeydown = () => {
		var event = event || window.event;
		switch(event.keyCode){ 
			case 87: case 38:  //T
				if(Snake.head[1] < 1){
					break;
				}
				else{
					Snake.dir = 'T';
				}
				break;
			case 83: case 40:
				if(Snake.head[1] > 20){
					break;
				}
				else{
					Snake.dir = 'B';
				}
				break;
			case 65: case 37: 
				if(Snake.head[1] < 1){
					break;
				}
				else{
					Snake.dir = 'L';
				}
				break;
			case 68: case 39:  
				if(Snake.head[0] > 20){
					break;
				}
				else{
					Snake.dir = 'R';
				}
				break;
		}
	}
}
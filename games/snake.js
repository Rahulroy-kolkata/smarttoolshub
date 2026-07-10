const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const tileCount = 20;

let snake = [];
let food = {};
let direction = "RIGHT";
let score = 0;
let speed = 180;
let game = null;

function startGame(){

clearInterval(game);

snake = [
    {x:200,y:200}
];

direction = "RIGHT";
score = 0;
speed = 180;

document.getElementById("score").textContent = score;

spawnFood();

game = setInterval(drawGame, speed);

}

function restartGame(){

clearInterval(game);

startGame();

}

function spawnFood(){

food = {

x:Math.floor(Math.random()*tileCount)*gridSize,

y:Math.floor(Math.random()*tileCount)*gridSize

};

}

function setDirection(dir){

if(dir=="LEFT" && direction!="RIGHT") direction="LEFT";

if(dir=="RIGHT" && direction!="LEFT") direction="RIGHT";

if(dir=="UP" && direction!="DOWN") direction="UP";

if(dir=="DOWN" && direction!="UP") direction="DOWN";

}
function drawGame(){

ctx.clearRect(0,0,canvas.width,canvas.height);

// Draw Food
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(food.x+10,food.y+10,8,0,Math.PI*2);
ctx.fill();

// Draw Snake
ctx.fillStyle="#00ff66";

for(let i=0;i<snake.length;i++){

ctx.fillRect(
snake[i].x,
snake[i].y,
gridSize,
gridSize
);

}

let head={
x:snake[0].x,
y:snake[0].y
};

if(direction=="RIGHT") head.x+=gridSize;
if(direction=="LEFT") head.x-=gridSize;
if(direction=="UP") head.y-=gridSize;
if(direction=="DOWN") head.y+=gridSize;

snake.unshift(head);

// Food Collision
if(head.x==food.x && head.y==food.y){

score++;

document.getElementById("score").textContent=score;

spawnFood();

clearInterval(game);
if(score % 10 == 0){
    speed = Math.max(120, speed - 10);
}

game=setInterval(drawGame,speed);

}else{

snake.pop();

}

// Wall Collision
if(
head.x<0||
head.y<0||
head.x>=canvas.width||
head.y>=canvas.height
){

clearInterval(game);

alert("💀 Game Over!\n\n🪙 Coins : "+score);

}

}
document.addEventListener("keydown",function(e){

if(e.key=="ArrowLeft"){
setDirection("LEFT");
}

if(e.key=="ArrowRight"){
setDirection("RIGHT");
}

if(e.key=="ArrowUp"){
setDirection("UP");
}

if(e.key=="ArrowDown"){
setDirection("DOWN");
}

});

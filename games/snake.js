const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;

let snake = [
    {x:200,y:200}
];

let direction = "RIGHT";

let score = 0;

let coin = {
    x: Math.floor(Math.random()*20)*box,
    y: Math.floor(Math.random()*20)*box
};

let game;

function startGame(){

clearInterval(game);

snake=[
{x:200,y:200}
];

direction="RIGHT";

score=0;

document.getElementById("score").innerHTML="🪙 Coins : 0";

coin={
x:Math.floor(Math.random()*20)*box,
y:Math.floor(Math.random()*20)*box
};

game=setInterval(drawGame,180);

}

function drawGame(){

ctx.fillStyle="#000";
ctx.fillRect(0,0,400,400);

ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(coin.x+10,coin.y+10,8,0,Math.PI*2);
ctx.fill();

ctx.fillStyle="#00ff66";

for(let i=0;i<snake.length;i++){

ctx.fillRect(snake[i].x,snake[i].y,20,20);

}

let head={
x:snake[0].x,
y:snake[0].y
};

if(direction=="RIGHT") head.x+=20;
if(direction=="LEFT") head.x-=20;
if(direction=="UP") head.y-=20;
if(direction=="DOWN") head.y+=20;

if(head.x==coin.x && head.y==coin.y){

score++;

document.getElementById("score").innerHTML=
"🪙 Coins : "+score;
clearInterval(game);

let speed = Math.max(60, 180 - (score * 5));

game = setInterval(drawGame, speed);
coin={
x:Math.floor(Math.random()*20)*20,
y:Math.floor(Math.random()*20)*20
};

}else{

snake.pop();

}

snake.unshift(head);
for(let i=1;i<snake.length;i++){

if(head.x==snake[i].x && head.y==snake[i].y){

clearInterval(game);

alert("💀 Game Over!\n\n🪙 Coins : "+score);

return;

}

}
if(
head.x<0||
head.y<0||
head.x>=400||
head.y>=400
){

clearInterval(game);

alert("Game Over\nCoins : "+score);

}

}
document.addEventListener("keydown",function(e){

if(e.key=="ArrowLeft" && direction!="RIGHT"){
direction="LEFT";
}

if(e.key=="ArrowRight" && direction!="LEFT"){
direction="RIGHT";
}

if(e.key=="ArrowUp" && direction!="DOWN"){
direction="UP";
}

if(e.key=="ArrowDown" && direction!="UP"){
direction="DOWN";
}

});

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const player = {
    x: 175,
    y: 200,
    height: 50,
    width: 50,
    speed: -8,
};
const obstacle = {
    x: 500,
    y: 200,
    width: 50,
    height: 200,
}
//make anew obstacle from the top down position
const topObstacle = {
    x: 500,
    y: 0,
    width: 50,
    height: 200,
}


const button = document.getElementById('randomBtn');
button.addEventListener('click', () => {
    player.speed = -8;
    c.clearRect(0, 0, 400, 400);
    c.fillRect(player.x, player.y, player.width, player.height);
});

const leftBtn = document.getElementById('left');
leftBtn.addEventListener('click', () => {
    player.speed = -1;
});

const rightBtn = document.getElementById('right');
rightBtn.addEventListener('click', () => {
    player.speed = 1;
});
function checkBounds(){
    if(player.y > 350 || player.y < 0){
        
    } if (player.x + player.width > topObstacle.x &&
        player.x < topObstacle.x + topObstacle.width &&
        player.y + player.height > topObstacle.y &&
        player.y < topObstacle.y + topObstacle.height) {
        reset();
        alert('u died');
    }
    if(player.x + player.width > obstacle.x &&
         player.x < obstacle.x + obstacle.width &&
         player.y + player.height > obstacle.y &&
         player.y < obstacle.y + obstacle.height){
             reset();
             alert('u died');
    }
    
}

setInterval(() => {
    gameLoop();
}, 20);

function reset() {
    topObstacle.x = 500;
    topObstacle.y = 0;
    obstacle.x = 500;
    obstacle.y = 200;
    player.y = 175;
    player.speed = -6;
}

function render() {
    player.speed += 0.3;
    player.y += player.speed;
    obstacle.x -= 2;
    topObstacle.y += 2;
    c.clearRect(0, 0, 400, 400);
    c.fillRect(player.x, player.y, player.width, player.height);
    c.fillRect(topObstacle.x, topObstacle.y, topObstacle.width, topObstacle.height);
    c.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    if (topObstacle.y + topObstacle.height < 0) {
        topObstacle.y = 0;
    }
    if(obstacle.x + obstacle.width < 0){
        obstacle.x = 500
    }
}

window.addEventListener("keydown",(e)=>{
    if(e.key === " "){
        e.preventDefault();
        player.speed = -6;
    }
    console.log(e.key);
})
function gameLoop(){
    render();
    checkBounds();
}
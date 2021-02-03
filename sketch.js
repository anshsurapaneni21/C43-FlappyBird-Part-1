var player;

var topObstacleGroup, bottomObstacleGroup;

var gameState;

var FlappyBird;


function setup(){
    createCanvas(displayWidth, displayHeight);

    player = createSprite(0,height/2,50,50);
    player.velocityX = 4;

    topObstacleGroup = new Group();

    bottomObstacleGroup = new Group();

    gameState = "PLAY";

}

function draw(){
    background(0);

    if(gameState = "PLAY"){
        //player.x = camera.position.x;
        //player.y = camera.position.y;
        if(keyDown("space")){
            console.log("game");
            player.velocityY = -5;
        }
        player.velocityY+=0.5;
        topObstacles();
        bottomObstacles();

    }

    drawSprites();
}

function topObstacles(){
    if(frameCount%100 === 0){
        var topObstacle = createSprite(width,height/8,50,random(100,350));
        topObstacle.velocityX = -4;
        topObstacle.lifetime = width/4;
        topObstacleGroup.add(topObstacle);
        
    }
}

function bottomObstacles(){
    if(frameCount%100 === 0){
        var bottomObstacle = createSprite(width,height-50,50,random(100,350));
        bottomObstacle.velocityX = -4;
        bottomObstacle.lifetime = width/4;
        topObstacleGroup.add(bottomObstacle);
    }

}
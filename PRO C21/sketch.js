var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "red";

    block3 = createSprite(500,580,170,30);
    block3.shapeColor = "green";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 3;
    ball.velocityX = -3;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    
    if(isTouching(block1, ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }
    if(isTouching(block2, ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        
    }
    if(isTouching(block3, ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        
    }
    if(isTouching(block4, ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
        
    }

    function isTouching(object1, object2){

        if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
            object2.x - object1.x < object2.width/2 + object1.width/2 &&
            object2.y - object1.y < object2.height/2 + object1.height/2 &&
            object1.y - object2.y < object1.height/2 + object2.height/2
             ){
                return true;
         } else{
             return false;
         }
         
    
    }
    
    drawSprites();
}


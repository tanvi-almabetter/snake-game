//game constants and variables
let inputDir ={x:0 , y:0}; //input direction
const foodsound= new Audio('audios/food.wav');
const gameover= new Audio('audios/gameover.wav');
const movesound= new Audio('audios/movement.wav');
const musicsound= new Audio('audios/angrybird.mp3');
let speed=5;
let score=0;
let lastPaintTime=0;
let snakearr=[
    {x:13, y:15, number:""} //The "snakearr" array contains a single object with the properties "x" and "y" both assigned to the values 13 and 15, respectively, and "number" set to an empty string.
]

food={x:6, y:7, number: Math.floor(Math.random() * 10) +1}; //The "food" object contains properties "x" and "y" assigned to the values 6 and 7, respectively, and a "number" property that is assigned a random integer between 1 and 10 (inclusive) using the Math.floor() and Math.random() methods.

//game functions
//The "main" function uses the window.requestAnimationFrame() method to recursively call itself, executing the "gameEngine" function at a rate determined by the "speed" variable. If the time elapsed between consecutive calls to "main" is less than the desired interval, the function simply returns without calling "gameEngine".
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime- lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime= ctime;
    gameEngine();
}

function isCollide(sarr){
    //write a code for - 'if the snake bumps into itself'
    

    //write code for - 'if the snake bumps into the wall'
    
    
}

function gameEngine(){
    //part1: Updating the snake array and food
    if(isCollide(snakearr)){
        gameover.play();
        musicsound.pause();
        inputDir= {x:0, y:0};
        alert("Game Over! Press any key to play again!");
        snakearr=[{x:13, y:15, number: ''}];
        musicsound.play();
        score=0;
    }

    //write code for - 'if snake has eaten the food then increment thefood and regenerate the food'
    if(snakearr[0].y===food.y && snakearr[0].x===food.x){
        foodsound.play();
        score += 1;
        if(score>highscoreval){
            
        }
        scorebox.innerHTML= "Score : "+ score;

        //write code for - 'if the snake eats the food'
        

        //write code for - 'if the snake eats bad food, in this case snake will shrink by a unit length'
        
        
        //write code to generate random food
        
    }

    //write code to move the snake
    


    //part2: Render the snake and food
    //write code to display the snake
    board.innerHTML= "";
    snakearr.forEach((e, index)=>{
        
    })

    //write code to display the food
    
}

//main logic of the game starts here
let highscore= localStorage.getItem("highscore");
if(highscore=== null){
    highscoreval=0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval))
}
else{
    highscoreval= JSON.parse(highscore);
    highscorebox.innerHTML="High Score :"+ highscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir={x:0, y:1} //start the game when a key is press
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x= 0;
            inputDir.y= -1;
            break;
    
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x= 0;
            inputDir.y= 1;
            break;    

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x= -1;
            inputDir.y= 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x= 1;
            inputDir.y= 0;
            break;
        default:
            break;
    }
})
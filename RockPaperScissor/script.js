/*Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

let playerScore = 0;
let computerScore = 0;
let result ="";
const moves = ["rock", "paper", "scissor"];

function computerPlay(){
    
    
    let move = moves[Math.floor(Math.random()*moves.length)];
    return move;;
}
computerPlay();



/*Write a function that plays a single round of Rock Paper Scissors.
 The function should take two parameters - the playerSelection and computerSelection - 
 and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"*/

 function round (playerSelection){


computerSelection = computerPlay();
playerSelection = prompt();

if ((playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock")   ||
    (playerSelection == "scissor" && computerSelection == "paper"))
    {
        playerScore += 1;
        return ("You Win! " + playerSelection + " beats " + computerSelection);
       

    }

else if (playerSelection == computerSelection){
        return "It\'s a tie. You both chose " + playerSelection ;
    }

else {
        computerScore += 1;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }   
    
 }
 
 for (let i = 0; i < 5; i++){

 console.log(round());
 }




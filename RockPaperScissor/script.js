/*Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

let playerScore = 0;
let computerScore = 0;


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
        return ("You Win! " + playerSelection + " beats " + computerSelection + 
        ". Total score is " + playerScore + " - " + computerScore);
       
        if (playerScore === 3){
            
            return ("You Win! Reload page to play again")
        }

    }

else if (playerSelection == computerSelection){
        return ("It\'s a tie. You both chose " + playerSelection +
        ". Total score is " + playerScore + " - " + computerScore);
    }
else if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor")   ||
        (playerSelection == "scissor" && computerSelection == "rock"))
        {
            computerScore += 1;
        return ("You Lose! " + computerSelection + " beats " + playerSelection +
        ". Total score is " + playerScore + " - " + computerScore);

        if (computerScore === 3){
            
            return ("You Lose! Reload page to play again");
        }
       }

else {
    return ("invalid, try again");
    }   
    
 }
 
 while (playerScore < 3){

 console.log(round());
 }




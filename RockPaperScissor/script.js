
function computerPlay(){
    
    const moves = ["rock", "paper", "scissor"];
    let move = moves[Math.floor(Math.random()*moves.length)];   //mossa random per ai
    return move;
}
computerPlay();


 function round (playerSelection){

    computerSelection = computerPlay();    //tolowercase = case insensitive

if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")   ||
    (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"))
    {
        playerScore += 1;
        return ("You Win! " + playerSelection + " beats " + computerSelection + 
        ". Total score is " + playerScore + " - " + computerScore);
       
    }

else if (playerSelection == computerSelection){
        return ("It\'s a tie. You both chose " + playerSelection +
        ". Total score is " + playerScore + " - " + computerScore);
    }
else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor")   ||
        (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock"))
        {
            computerScore += 1;
        return ("You Lose! " + computerSelection + " beats " + playerSelection +
        ". Total score is " + playerScore + " - " + computerScore);

       }

else {
    return ("invalid, try again");
    }   
    
 }

//recursion con funzione play che richiama se stessa invece del loop

 let playerScore = 0;
let computerScore = 0;



 function play (){

  let playerSelection = prompt();
  let computerSelection = computerPlay();
  console.log(round(playerSelection));    //printa l'intera funzione in loop ( if condition ) fino a else/if condition.
    

  if (playerScore < 3 && computerScore < 3){
      play ();
  }
  else if (playerScore == 3 && computerScore < 3){
        console.log("You Win!");
  }
  else {
        console.log("You lose!");
  }
 }
 
 play ();



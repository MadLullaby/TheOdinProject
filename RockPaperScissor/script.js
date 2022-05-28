
function computerPlay(){
    
    const moves = ["rock", "paper", "scissors"];
    let move = moves[Math.floor(Math.random()*moves.length)];   //mossa random per ai
    return move;
}
computerPlay();


 function round (playerSelection){

    computerSelection = computerPlay();    //tolowercase = case insensitive

if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")   ||
    (playerSelection == "scissors" && computerSelection == "paper"))
    {
        playerScore += 1;
        return ("You Win! " + playerSelection + " beats " + computerSelection + 
        ". Total score is " + playerScore + " - " + computerScore);
       
    }

else if (playerSelection == computerSelection){
        return ("It\'s a tie. You both chose " + playerSelection +
        ". Total score is " + playerScore + " - " + computerScore);
    }
else if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")   ||
        (playerSelection == "scissors" && computerSelection == "rock"))
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
 const r = document.getElementsByClassName("r");
 const p = document.getElementsByClassName("p");
 const s = document.getElementsByClassName("s");

r.addEventListener("click", round("rock"));
  


 function play (){

 // let playerSelection = prompt().toLowerCase();
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



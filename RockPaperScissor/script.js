/*Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

const moves = ["rock", "paper", "scissor"];

function computerPlay(){
    let move = moves[Math.floor(Math.random()*moves.length)];
    console.log(move);
}
computerPlay();


/*Write a function that plays a single round of Rock Paper Scissors.
 The function should take two parameters - the playerSelection and computerSelection - 
 and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"*/

function playerPlay(){
    let message= prompt();

    console.log(message);
}
playerPlay();






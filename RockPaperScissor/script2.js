let userScore = 0;
let cpuScore = 0;
const userScoreDom = document.getElementById("userScore");
const cpuScoreDom = document.getElementById("cpuScore");
const resultDom = document.getElementById("phrase");
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");

rockButton.addEventListener("click", function (){
    game("rock");
});
paperButton.addEventListener("click", function(){
    game("paper");
});
scissorsButton.addEventListener("click", function(){
    game("scissors");
});



function game(userChoice) {
   const cpuChoice = getCpuChoice();

    switch(userChoice+cpuChoice){

    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        win(userChoice,cpuChoice);
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        lose(userChoice,cpuChoice);
        break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        tie(userChoice,cpuChoice);
        break;
    };
}


function win(userChoice,cpuChoice) {
    userScore++;
    userScoreDom.innerHTML = userScore;
    resultDom.innerHTML = `Your ${userChoice} beats their ${cpuChoice}. You Win!`;
}

function lose(userChoice,cpuChoice) {
    cpuScore++;
    cpuScoreDom.innerHTML = cpuScore;
    resultDom.innerHTML = `Your ${userChoice} loses to their ${cpuChoice}. You Lose!`;
}

function tie(userChoice, cpuChoice) {
    resultDom.innerHTML = `Your ${userChoice} and their ${cpuChoice} do nothing. It's a tie!`
}






function getCpuChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomMove = Math.floor(Math.random() *3);
    return choices[randomMove];
}
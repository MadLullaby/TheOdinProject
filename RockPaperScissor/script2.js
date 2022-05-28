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
    endOfGame();
}

function lose(userChoice,cpuChoice) {
    cpuScore++;
    cpuScoreDom.innerHTML = cpuScore;
    resultDom.innerHTML = `Your ${userChoice} loses to their ${cpuChoice}. You Lose!`;
    endOfGame();
}

function tie(userChoice, cpuChoice) {
    resultDom.innerHTML = `Your ${userChoice} and their ${cpuChoice} do nothing. It's a tie!`
    endOfGame();
}




function getCpuChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomMove = Math.floor(Math.random() *3);
    return choices[randomMove];
}


function endOfGame () {
    if (userScore < 5 && cpuScore < 5){
        game(userChoice);
    }
    else if (userScore === 5 && cpuScore < 5){
       const container = document.querySelector("#result");
       const para= document.createElement("p");
       para.textContent = "You Win!";
       para.style.cssText = "font-size: 50px; text-align:center";
       container.appendChild(para);
       const div = document.createElement("div")
       para.appendChild(div)
       const endP = document.createElement("button");
       endP.textContent = "Click me to play again!";
       endP.setAttribute= ("style", "text-align: center;");
       div.appendChild(endP);

       
    }
    else if (userScore < 5 && cpuScore === 5) {
       const container = document.querySelector("#result");
       const para= document.createElement("p");
       para.textContent = "You Lose!";
       para.style.cssText = "font-size: 50px; text-align:center";
       container.appendChild(para);
       const div = document.createElement("div")
       para.appendChild(div)
       const endP = document.createElement("button");
       endP.textContent = "Click me to play again!";
       endP.setAttribute= ("style", "text-align: center;");
       div.appendChild(endP);
      
    }
}
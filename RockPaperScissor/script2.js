let user_score= 0 ;
let cpu_score= 0 ;
const userScoreDom = document.getElementById("userScore");
const cpuScoreDom = document.getElementById("cpuScore");
const resultDom = document.getElementById("phrase");
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");
const button = document.querySelectorAll(".button");

rockButton.addEventListener("click", function (){
    endOfGame("rock");
});
paperButton.addEventListener("click", function(){
    endOfGame("paper");
});
scissorsButton.addEventListener("click", function(){
    endOfGame("scissors");
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
    user_score++;
    userScoreDom.innerHTML = user_score;
    resultDom.innerHTML = `Your ${userChoice} beats CPU ${cpuChoice}. You Win!`;
    endOfGame();
}

function lose(userChoice,cpuChoice) {
    cpu_score++;
    cpuScoreDom.innerHTML = cpu_score;
    resultDom.innerHTML = `Your ${userChoice} loses to CPU ${cpuChoice}. You Lose!`;
    endOfGame();
}

function tie(userChoice, cpuChoice) {
    resultDom.innerHTML = `Your ${userChoice} and CPU ${cpuChoice} do nothing. It's a tie!`
    endOfGame();
}




function getCpuChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomMove = Math.floor(Math.random() *3);
    return choices[randomMove];
}


function endOfGame (userChoice) {
    if (user_score < 5 && cpu_score < 5){
        game(userChoice);
    }
    else if (user_score === 5 && cpu_score < 5){
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
       //reload page
       endP.addEventListener("click", function stop(){
        window.location.reload();
       })
       
       div.appendChild(endP);

       //disable button choices
      button.forEach((e) => {
          e.disabled=true;
      })

    


    }
    else  {
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
       
       endP.addEventListener("click", function stop(){
        window.location.reload();
       })
       
       div.appendChild(endP);

       button.forEach((e) => {
        e.disabled=true;
    })

    }
}
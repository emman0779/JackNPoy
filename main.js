let computerChoices = ['Rock', 'Paper', 'Scissors'];
let loader = document.querySelectorAll(".loader");
let yourScore = 0;
let compScore = 0;
let history = document.querySelector("#playHistory");
let yourScoreHistory = document.querySelector("#yourScoreHistory");
let computerScoreHistory = document.querySelector("#computerScoreHistory");
let restart = document.querySelector("#restartTheGame");
restart.addEventListener("click", gameRestart);
history.addEventListener('click', showHistory);

function showHistory(){
    let modal = document.querySelector("#modal");
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function gameRestart(){
    yourScoreHistory.innerHTML = "";
    computerScoreHistory.innerHTML = "";
    yourScore = 0;
    compScore = 0;
    document.querySelector("#computerScore").innerHTML = "0";
    document.querySelector("#yourScore").innerHTML = "0"
    document.querySelector("#imgContainertwo").innerHTML = "";
    document.querySelector("#imgContainer").innerHTML = "";
    document.querySelector("#winLoseContainer").innerHTML = "";
}


function playGame(humanChoice){
    let sampleNum = Math.round(Math.random() * 2);
    let computer = computerChoices[sampleNum];
    loader.forEach(function(element){
        element.style.display = "block";
    });
    let createWinScore = document.createElement("p");
    let createLoseScore = document.createElement("p");
    let createYourTieScore = document.createElement("p");
    let createComputerTieScore = document.createElement("p");
    createWinScore.innerHTML = "Win";
    createLoseScore.innerHTML = "Lose";
    createYourTieScore.innerHTML = "-";
    createComputerTieScore.innerHTML = "-"
    document.querySelector("#imgContainertwo").innerHTML = "";
    document.querySelector("#imgContainer").innerHTML = "";
    if(humanChoice == 'Rock'){
        if(computer == 'Rock'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>Its a tie</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="rocks.png" style="transform: scaleX(-1);">`;}, 1500);
            yourScoreHistory.appendChild(createYourTieScore);
            computerScoreHistory.appendChild(createComputerTieScore);
        }else if(computer == 'Paper'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>You Lose!</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="paper.png" style="transform: scaleX(-1);">`;}, 1500);
            compScore += 1;
            setTimeout(function() {document.querySelector("#computerScore").innerHTML = compScore}, 2000);
            yourScoreHistory.appendChild(createLoseScore);
            computerScoreHistory.appendChild(createWinScore);
        }else if(computer == 'Scissors'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>You Win!</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="scissor.png" style="transform: scaleX(-1);">`;}, 1500);
            yourScore += 1;
            setTimeout(function() {document.querySelector("#yourScore").innerHTML = yourScore}, 2000);
            yourScoreHistory.appendChild(createWinScore);
            computerScoreHistory.appendChild(createLoseScore);
        }
        setTimeout(function() {document.querySelector("#imgContainer").innerHTML = `<img src="rocks.png">`;}, 1500);
    }else if(humanChoice == 'Paper'){
        if(computer == 'Rock'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>You Win!</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="rocks.png" style="transform: scaleX(-1);">`;}, 1500);
            yourScore += 1;
            setTimeout(function() {document.querySelector("#yourScore").innerHTML = yourScore}, 2000);
            yourScoreHistory.appendChild(createWinScore);
            computerScoreHistory.appendChild(createLoseScore);
        }else if(computer == 'Paper'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>Its a tie</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="paper.png" style="transform: scaleX(-1);">`;}, 1500);
            yourScoreHistory.appendChild(createYourTieScore);
            computerScoreHistory.appendChild(createComputerTieScore);
        }else if(computer == 'Scissors'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>You Lose!</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="scissor.png" style="transform: scaleX(-1);">`;}, 1500);
            compScore += 1;
            setTimeout(function() {document.querySelector("#computerScore").innerHTML = compScore}, 2000);
            yourScoreHistory.appendChild(createLoseScore);
            computerScoreHistory.appendChild(createWinScore);
        }
        setTimeout(function() {document.querySelector("#imgContainer").innerHTML = `<img src="paper.png">`;}, 1500);
    }else if(humanChoice == 'Scissors'){
        if(computer == 'Rock'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>You Lose!</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="rocks.png" style="transform: scaleX(-1);">`;}, 1500);
            compScore += 1;
            setTimeout(function() {document.querySelector("#computerScore").innerHTML = compScore}, 2000);
            yourScoreHistory.appendChild(createLoseScore);
            computerScoreHistory.appendChild(createWinScore);
        }else if(computer == 'Paper'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>You Win!</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="paper.png" style="transform: scaleX(-1);">`;}, 1500);
            yourScore += 1;
            setTimeout(function() {document.querySelector("#yourScore").innerHTML = yourScore}, 2000);
            yourScoreHistory.appendChild(createWinScore);
            computerScoreHistory.appendChild(createLoseScore);
        }else if(computer == 'Scissors'){
            setTimeout(function() {document.querySelector("#winLoseContainer").innerHTML = `<h2>Its a tie</h2>`}, 2000);
            setTimeout(function() {loader.forEach(function(element){element.style.display = "none"})}, 1500);
            setTimeout(function() {document.querySelector("#imgContainertwo").innerHTML = `<img src="scissor.png" style="transform: scaleX(-1);">`;}, 1500);
            yourScoreHistory.appendChild(createYourTieScore);
            computerScoreHistory.appendChild(createComputerTieScore);
        }
        setTimeout(function() {document.querySelector("#imgContainer").innerHTML = `<img src="scissor.png">`;}, 1500);
    }
}


function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3) + 1;
    switch (randomN) {
        case 1: return ('ROCK');
        case 2: return ('PAPER');
        case 3: return ('SCISSORS');
    }
}

let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

const playerScoreboard = document.querySelector('.playerScore');
const computerScoreboard = document.querySelector('.computerScore');

function scoreKeeper(outcome) {
    if (playerScore < 5 && computerScore < 5)
        if (outcome === 'computer') {
            computerScore += 1;
            computerScoreboard.textContent = computerScore;
        }
        else if (outcome === 'player') {
            playerScore += 1;
            playerScoreboard.textContent = playerScore;
        }
        else console.log("Tie!");

    if (playerScore === 5) console.log("Player Wins");
    else if (computerScore === 5) console.log("Computer Wins");
}

const btn1 = document.querySelector(".rock");
btn1.addEventListener('click', () => {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    scoreKeeper(outcome);
});
const btn2 = document.querySelector(".paper");
btn2.addEventListener('click', () => {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    scoreKeeper(outcome);
});
const btn3 = document.querySelector(".scissors");
btn3.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    scoreKeeper(outcome);
});


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 'tie';
    }
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'computer';
    }
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'player';
    }
    if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'player';
    }
    if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'computer';
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'computer';
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'player';
    }
}
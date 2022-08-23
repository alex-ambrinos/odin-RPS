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

const playerScoreboard = document.querySelector('#playerScore');
const computerScoreboard = document.querySelector('#computerScore');

const announcements = document.querySelector('.announcements');
const winR = document.createElement('p');
winR.innerHTML = 'You <span class="win">won</span> this round!';
const loseR = document.createElement('p');
loseR.innerHTML = 'You <span class="lose">lost</span> this round!';
const tieR = document.createElement('p');
tieR.innerHTML = 'It was a <span class="tie">tie</span>!';

const winM = document.createElement('p');
winM.innerHTML = 'You <span class="win">won</span> the match! Good job!';
const replayBtn = document.createElement('button');
replayBtn.textContent = "Play Again";
replayBtn.classList.add('replayBtn');
const loseM = document.createElement('p');
loseM.innerHTML = 'You <span class="lose">lost</span> the match! Better luck next time!';

function scoreKeeper(outcome) {
    if (playerScore < 5 && computerScore < 5)
        if (outcome === 'computer') {
            computerScore += 1;
            computerScoreboard.textContent = computerScore;
            announcements.replaceChildren(loseR);
        }
        else if (outcome === 'player') {
            playerScore += 1;
            playerScoreboard.textContent = playerScore;
            announcements.replaceChildren(winR);
        }
        else announcements.replaceChildren(tieR);

    if (playerScore > computerScore) {
        playerScoreboard.className = "win";
        computerScoreboard.className = "lose";
    } else if (playerScore < computerScore) {
        playerScoreboard.className = "lose";
        computerScoreboard.className = "win";
    } else {
        playerScoreboard.className = "tie";
        computerScoreboard.className = "tie";
    }

    if (playerScore === 5) {
        announcements.replaceChildren(winM);
        announcements.appendChild(replayBtn);
    }
    else if (computerScore === 5) {
        announcements.replaceChildren(loseM);
        announcements.appendChild(replayBtn);
    }
}

const btn1 = document.querySelector("button.rock");
btn1.addEventListener('click', () => {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    scoreKeeper(outcome);
});
const btn2 = document.querySelector("button.paper");
btn2.addEventListener('click', () => {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    scoreKeeper(outcome);
});
const btn3 = document.querySelector("button.scissors");
btn3.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    scoreKeeper(outcome);
});

replayBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    computerScoreboard.textContent = computerScore;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.className = "";
    playerScoreboard.className = "";
    announcements.replaceChildren();
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

document.ondblclick = function (e) {
    e.preventDefault();
}
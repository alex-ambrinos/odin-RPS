function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3) + 1;
    switch (randomN) {
        case 1: return ('ROCK');
        case 2: return ('PAPER');
        case 3: return ('SCISSORS');
    }
}

let playerSelection = prompt("Enter Rock, Paper or Scissors").toUpperCase();
while (playerSelection !== 'PAPER' && playerSelection !== 'ROCK' && playerSelection !== 'SCISSORS') {
    playerSelection = prompt("Please enter a valid choise: Rock, Paper or Scissors").toUpperCase();
}
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 'Tie!';
    }
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose! Paper beats Rock!';
    }
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You Win! Rock beats Scissors!';
    }
    if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You Win! Paper beats Rock!';
    }
    if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose! Scissors beats Paper!';
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose! Rock beats Scissors!';
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! Scissors beats Paper!';
    }
}

console.log(`Player choise: ${playerSelection}`);
console.log(`Computer choise: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
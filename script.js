let playerScore = 0
let computerScore = 0

while (playerScore + computerScore < 5) {

let computerChoice = getComputerChoice()

function getComputerChoice() {
    wordlist = ['ROCK', 'PAPER', 'SCISSORS'];
    wordindex = Math.floor(Math.random()* 3);
    return wordlist[wordindex]
}
    
let playerSelection = prompt("Rock, Paper or Scissors? ");
if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'scissors') {
    console.log(playerSelection.toUpperCase(), computerChoice);
} else {
    console.log('Not an option');
}

let player = playerSelection.toUpperCase()

if (player == 'ROCK' && computerChoice == 'SCISSORS') {
    playerScore = (playerScore + 1)
    console.log('Rock beats Scissors, you win!');
} else if (player == 'SCISSORS' && computerChoice == 'PAPER') {
    playerScore = (playerScore + 1)
    console.log('Scissors beats Paper, you win!');
} else if (player == 'PAPER' && computerChoice == 'ROCK') {
    playerScore = (playerScore + 1)
    console.log('Paper beats Rock, you win!');
} else if (player == 'ROCK' && computerChoice == 'PAPER') {
    computerScore = (computerScore + 1)
    console.log('Paper beats Rock, you lose!');
} else if (player == 'SCISSORS' && computerChoice == 'ROCK') {
    computerScore = (computerScore + 1)
    console.log('Rock beats Scissors, you lose!');
} else if (player == 'PAPER' && computerChoice == 'SCISSORS') {
    computerScore = (computerScore + 1)
    console.log('Scissors beats Paper, you lose!');
} else if (player == computerChoice){
    console.log("It's a draw!");
}
}

console.log(playerScore, computerScore);
if (playerScore > computerScore) {
    console.log('You are the winner!');
} else {
    console.log('You are the loser XD!');
}
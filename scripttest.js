wordlist = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0
let computerScore = 0
let round = 0

let playerDisplay = document.getElementById('playerDisplay');
let compuerDisplay = document.getElementById('computerDisplay');
let resultDisplay = document.getElementById('resultDisplay');

function playGame(playerSelection) {

    // while (playerScore + computerScore < 5){

    const computerChoice = wordlist[Math.floor(Math.random()* 3)];
    let choise = ""
        
    if (playerSelection == 'Rock' && computerChoice == 'Scissors') {
        playerScore = (playerScore + 1)
        console.log('Rock beats Scissors, you win!');
    } else if (playerSelection == 'Scissors' && computerChoice == 'Paper') {
        playerScore = (playerScore + 1)
        console.log('Scissors beats Paper, you win!');
    } else if (playerSelection == 'Paper' && computerChoice == 'Rock') {
        playerScore = (playerScore + 1)
        console.log('Paper beats Rock, you win!');
    } else if (playerSelection == 'Rock' && computerChoice == 'Paper') {
        computerScore = (computerScore + 1)
        console.log('Paper beats Rock, you lose!');
    } else if (playerSelection == 'Scissors' && computerChoice == 'Rock') {
        computerScore = (computerScore + 1)
        console.log('Rock beats Scissors, you lose!');
    } else if (playerSelection == 'Paper' && computerChoice == 'Scissors') {
        computerScore = (computerScore + 1)
        console.log('Scissors beats Paper, you lose!');
    } else if (playerSelection == computerChoice){
        console.log("It's a draw!");
    }

}

function RetryGame() {
    round = round * 0
    playerScore = playerScore * 0
    computerScore = computerScore * 0
    display.value = "";
}

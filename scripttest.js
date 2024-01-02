const display = document.getElementById('display')

var round = 0
var playerScore = 0
var computerScore = 0

let playerSelection = null



while (playerScore + computerScore < 5) {

    function displayResult(value) {
        choise = value
        return choise
    }

    let playerSelection = choise

    function getComputerChoice() {
        wordlist = ['Rock', 'Paper', 'Scissors'];
        wordindex = Math.floor(Math.random()* 3);
        return wordlist[wordindex]
    }

    let computerChoice = getComputerChoice()

    // function displayResult(input) {
    //    display.value += input;
    // }
    
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

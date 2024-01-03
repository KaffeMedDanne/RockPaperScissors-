wordlist = ['Rock', 'Paper', 'Scissors'];

//let playerScore = 0
//let computerScore = 0
//let round = 0

let playerDisplay = document.getElementById('playerDisplay');
let computerDisplay = document.getElementById('computerDisplay');
let resultDisplay = document.getElementById('resultDisplay');


function playGame(playerSelection) {

    const computerChoice = wordlist[Math.floor(Math.random()* 3)];
    let result = ""
        
    if (playerSelection === computerChoice) {
        result = "It's a draw!";

    } else {
        switch (playerSelection) {
            case 'Rock':
                result = (computerChoice === 'Scissors') ? 'You win!' : 'You lose!';
                break;
            case 'Paper':
                result = (computerChoice === 'Rock') ? 'You win!' : 'You lose!';
                break;
            case 'Scissors':
                result = (computerChoice === 'paper') ? 'You win!' : 'You lose!';
                break;
        }
    }

    playerDisplay.textContent = ${playerSelection};
    computerDisplay.textContent = ${computerChoice};
    resultDisplay.textContent = result;
}


function RetryGame() {
    round = round * 0
    playerScore = playerScore * 0
    computerScore = computerScore * 0
    display.value = "";
}

/**
 * Declear coonstants for the DOM
 */
const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const messages = document.getElementById('messages');
const choices = ['rock', 'paper', 'scissors'];



/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    })
}


/**
 * The main game function
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoioce]);
}

/**
 * Check to see who the winner is
 */
function checkWinner() {
    if (player == computer) {
        return 'Draw';
    }
    else if (computer == 'rock') {
        return (plaayer == 'paper') ? playerScore++ : computerScore++
    }
    else if (computer == 'paper') {
        return (plaayer == 'scissors') ? playerScore++ : computerScore++
    }
    else if (computer == 'scissors') {
        return (plaayer == 'rock') ? playerScore++ : computerScore++
    }
}
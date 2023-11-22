/**
 * Declear coonstants for the DOM
 */
const buttons = document.getElementsByClassName('control');
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const scoreLimit = 3;

let playerScore = 0;
let computerScore = 0;




/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    });
}


/**
 * The main game function
 * shows choice picked 
 * and adds score to winner
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    if (result === 'playerScore') {
        playerScore++;
        playerScoreElem.textContent = playerScore;
    } else if (result === 'computerScore') {
        computerScore++;
        computerScoreElem.textContent = computerScore;
    }

    if (playerScore === scoreLimit || computerScore === scoreLimit) {
        endGame();
    }

}

/**
 * Message after score limit reached
 */
function endGame() {
    if (playerScore === scoreLimit) {
        alert('Congrats you won! Live long and prosper');
    } else {
        alert('Unlucky you lost! Computers Make Excellent and Efficient Servants');
    }

    playerScore = 0;
    computerScore = 0;
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
}


/**
 * Check to see who the winner is
 */
function checkWinner(computer, player) {
    if (player === computer) {
        return 'Draw';
    } else if (
        (computer === 'rock' && (player === 'scissors' || player === 'lizard')) ||
        (computer === 'paper' && (player === 'rock' || player === 'spock')) ||
        (computer === 'scissors' && (player === 'paper' || player === 'lizard')) ||
        (computer === 'lizard' && (player === 'spock' || player === 'paper')) ||
        (computer === 'spock' && (player === 'rock' || player === 'scissors'))
    ) {
        return 'computerScore';
    } else {
        return 'playerScore';
    }
}

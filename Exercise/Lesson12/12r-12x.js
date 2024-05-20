const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

function playGame(playerMove) {
    let result = '';
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
        if (computerMove === 'rock'){
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock'){
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }
    } else {
        if (computerMove === 'rock'){
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    
    localStorage.removeItem('score');
    updateScoreElement();
}

function showResetConfirmation() {
    document.querySelector('.js-reset-confirmation').innerHTML = `
        Are you sure you want to reset the score?
        <button class="reset-confirm-button js-reset-confirm-yes">
            Yes
        </button>
        <button class="reset-confirm-button js-reset-confirm-no">
            No
        </button>
    `
    document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
        resetScore();
        document.querySelector('.js-reset-confirmation').innerHTML = '';
    })
    document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
        document.querySelector('.js-reset-confirmation').innerHTML = '';
    })
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});
document.querySelector('.js-reset-score-button').addEventListener('click', showResetConfirmation);

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        showResetConfirmation();
    }
})

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);

        isAutoPlaying = true;
        document.querySelector('.auto-play-button').innerHTML = 'Stop Play';
    } else {
        clearInterval(intervalId);
        
        isAutoPlaying = false;
        document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
    }
}

document.querySelector('.js-auto-play-button').addEventListener('click', autoPlay);
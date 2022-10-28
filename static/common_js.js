//      Game counters for users playing 
let playerWins, computerWins, playerTiesComputer;


const rockImage = document.querySelector('.rock');
const paperImage = document.querySelector('.paper');
const scissorsImage = document.querySelector('.scissors');

const scoreCounterContainer = document.querySelector('.running-score-display');
const playerWinsCounter = document.querySelector('.win-counter');
const computerWinsCounter = document.querySelector('.lose-counter');
const playerTiesComputerCounter = document.querySelector('.tie-counter');
resetGame();



function playRock () {
    playRound( 'rock' , getComputerChoice() )
    updateRunningScoreDiv();
}

function playPaper () {
    playRound( 'paper' , getComputerChoice() )
    updateRunningScoreDiv();
}

function playScissors () {
    playRound( 'scissors' , getComputerChoice() )
    updateRunningScoreDiv();
}

function updateRunningScoreDiv () {

    if (playerWins === 0 && computerWins === 0 && playerTiesComputer === 0) {
        scoreCounterContainer.setAttribute('style', 'color: black;')
    } else if (playerWins === 5 || computerWins === 5) {
        endGame();
    } else {
        scoreCounterContainer.setAttribute('style', 'color: white;')
    }
    playerWinsCounter.textContent = `Player Wins: ${playerWins}`
    computerWinsCounter.textContent = `Computer Wins: ${computerWins}`
    playerTiesComputerCounter.textContent = `Ties with Computer: ${playerTiesComputer}`
}

function endGame() {

   rockImage.removeEventListener('click', playRock)
   paperImage.removeEventListener( 'click', playPaper)
   scissorsImage.removeEventListener( 'click', playScissors)

    let gameResultMessage = document.createElement('p');
    gameResultMessage.classList.add('score-informational', 'removable');

    if (playerWins === 5 ) {
        gameResultMessage.textContent = `Congratulations! You bested the machine. They'll think twice before challenging their fleshy superiors again.`
    } else if (computerWins === 5) {
        gameResultMessage.textContent = `Unfortunately the machine has won. It's only matter of time before we are serving them. Pitiful.`
    }
    gameResultMessage.setAttribute('style' , 'color: white;')
    scoreCounterContainer.appendChild(gameResultMessage);


    let resetButton = document.createElement('button');
    resetButton.textContent = 'Reset to play again!';-
    resetButton.classList.add('score-informational','removable');

    resetButton.addEventListener('click' , resetGame);

    scoreCounterContainer.appendChild(resetButton);

    
}

function resetGame() {
    resetGameCounters();
    updateRunningScoreDiv();
    
    rockImage.addEventListener('click' , playRock);
    paperImage.addEventListener('click' , playPaper);
    scissorsImage.addEventListener('click' , playScissors);

    document.querySelectorAll('.removable')
            .forEach((element) => {
                element.remove();
            } )


}

function resetGameCounters() {
    playerWins = 0;
    computerWins = 0;
    playerTiesComputer = 0;
} 

function playRound (playerChoice, computerChoice) {

    const NUMBER_REPRESENTING_A_COMPUTER_PLAYER_TIE = 0;
    const NUMBER_REPRESENTING_PLAYER_VICTORY = 1;
    const NUMBER_REPRESENTING_COMPUTER_VICTORY = 2;

    if (playerChoice === computerChoice) {
        playerTiesComputer++;
        return NUMBER_REPRESENTING_A_COMPUTER_PLAYER_TIE;
    } else if ( playerChoice === "rock" &&
                computerChoice === "scissors") {
        playerWins++;
        return NUMBER_REPRESENTING_PLAYER_VICTORY;
    } else if ( playerChoice === "paper" &&
                computerChoice === "rock") {
        playerWins++;
        return NUMBER_REPRESENTING_PLAYER_VICTORY;
    } else if ( playerChoice === "scissors" &&
                computerChoice === "paper") {
        playerWins++;
        return NUMBER_REPRESENTING_PLAYER_VICTORY;
    } else {
        computerWins++;
        return NUMBER_REPRESENTING_COMPUTER_VICTORY;
    }
}

function getComputerChoice() {
    let generatedNumber = Math.floor(Math.random() * 100) + 1

    if (generatedNumber >= 1 && generatedNumber < 34) {
        //console.log(generatedNumber);
        return "rock"
    } else if (generatedNumber >= 34 && generatedNumber < 67) {
        //console.log(generatedNumber);
        return "paper"
    } else if (generatedNumber >= 67 && generatedNumber <= 100 ) {
        //console.log(generatedNumber);
        return "scissors"
    } else {
        return "Number was not between 1-100"
    }
}
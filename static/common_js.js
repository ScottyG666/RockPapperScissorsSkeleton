game();


function game() {

    let playerWins = 0; 
    let playerLoses = 0;
    let playerTies = 0;

    for (let i = 0 ; i < 5 ; i++) {
        let playerChoice =  getValidPlayerChoice();

        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);

        if (result === 0) {
            playerTies++;
        } else if ( result === 1) {
            playerWins++;
        } else if ( result == 2) {
            playerLoses++;
        } else {
            console.log("Unexpected Result!");
        }

        console.log(result);
    }
    console.log( `Player won ${playerWins} times`);
    console.log( `Player lost ${playerLoses} times`);
    console.log( `Player tied ${playerTies} times`);
}

function playRound (playerChoice, computerChoice) {

    const NUMBER_REPRESENTING_A_COMPUTER_PLAYER_TIE = 0;
    const NUMBER_REPRESENTING_PLAYER_VICTORY = 1;
    const NUMBER_REPRESENTING_COMPUTER_VICTORY = 2;

    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return NUMBER_REPRESENTING_A_COMPUTER_PLAYER_TIE;
    } else if ( playerChoice.toLowerCase() === "rock" &&
                computerChoice.toLowerCase() === "scissors") {
        return NUMBER_REPRESENTING_PLAYER_VICTORY;
    } else if ( playerChoice.toLowerCase() === "paper" &&
                computerChoice.toLowerCase() === "rock") {
        return NUMBER_REPRESENTING_PLAYER_VICTORY;
    } else if ( playerChoice.toLowerCase() === "scissors" &&
                computerChoice.toLowerCase() === "paper") {
        return NUMBER_REPRESENTING_PLAYER_VICTORY;
    } else {
        return NUMBER_REPRESENTING_COMPUTER_VICTORY;
    }
}

function getValidPlayerChoice () {
    let playerChoice =  prompt('What is your choice?');
    let standardizedPlayerChoice = playerChoice.toLowerCase();

    if (standardizedPlayerChoice === 'rock' ||
        standardizedPlayerChoice === 'paper' ||
        standardizedPlayerChoice === 'scissors') {
            return standardizedPlayerChoice;
    } else  {
        let secondPlayerChoice = getValidPlayerChoice();
        return secondPlayerChoice;
    }
}

function getComputerChoice() {
    let generatedNumber = Math.floor(Math.random() * 100) + 1

    if (generatedNumber >= 1 && generatedNumber < 34) {
        //console.log(generatedNumber);
        return "Rock"
    } else if (generatedNumber >= 34 && generatedNumber < 67) {
        //console.log(generatedNumber);
        return "Paper"
    } else if (generatedNumber >= 67 && generatedNumber <= 100 ) {
        //console.log(generatedNumber);
        return "Scissors"
    } else {
        return "Number was not between 1-100"
    }
}

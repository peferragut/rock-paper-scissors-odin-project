function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return -1
        } else if (computerSelection === 'SCISSOR') {
            return 1;
        } else {
            return 0;
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSOR") {
            return -1;
        } else if (computerSelection === "ROCK") {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (computerSelection === "ROCK") {
            return -1;
        } else if (computerSelection === "PAPER") {
            return 1;
        } else {
            return 0;
        }
    }
}

function game() {
    let computerScore = 0, playerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose beween Rock, Paper and Scissor: ");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result > 0) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result < 0) {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log("It's a draw!")
        }
    }
    console.log(`The final score is:
Player ${playerScore} X ${computerScore} Computer`);
    if (playerScore > computerScore) {
        console.log("You won!");
    } else if (playerScore < computerScore) {
        console.log("You lost!");
    } else {
        console.log("It's a tie!");
    }
}

game();
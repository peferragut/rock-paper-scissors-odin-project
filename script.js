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
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 'SCISSOR') {
            return "You win! Rock beats Scissor";
        } else {
            return "It's a draw!";
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSOR") {
            return "You Lose! Scissor beats Paper";
        } else if (computerSelection === "ROCK") {
            return "You win! Paper beats Rock";
        } else {
            return "It's a draw!";
        }
    } else {
        if (computerSelection === "ROCK") {
            return "You Lose! Rock beats Scissor";
        } else if (computerSelection === "PAPER") {
            return "You win! Scissor beats Paper";
        } else {
            return "It's a draw!";
        }
    }
}
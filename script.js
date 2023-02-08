function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}
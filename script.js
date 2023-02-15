function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    
}

console.log(getComputerChoice());


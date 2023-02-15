function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    }
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    }
    
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper"
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
    
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Paper"
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


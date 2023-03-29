function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a Tie!";
    }

    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result = "You Win! Rock beats Scissors";
        }
        else { //computerSelection === "paper"
            result = "You Lose! Paper beats Rock";
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win! Paper beats Rock";
        }
        else { //computerSelection === "scissors"
            result = "You Lose! Scissors beats Paper";
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result = "You Win! Scissors beats Paper";
        }
        else { //computerSelection === "rock"
            result = "You Lose! Rock beats Scissors";
        }
    }

    else {
        result = "";
    }

    return result;

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You Win!");
    } else if (computerScore > playerScore) {
        console.log("Sorry! You Lose!");
    } else {
        console.log("It's a Tie!");
    }
}

game();


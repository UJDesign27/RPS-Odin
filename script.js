function getComputerChoice() {
  let rndNum = Math.floor(Math.random() * 10);
  if (rndNum == 1 || rndNum == 2 || rndNum == 3) {
    if (rndNum == 1) {
      return 'paper';
    } else if (rndNum == 2) {
      return 'rock';
    } else if (rndNum == 3) {
      return 'scissors';
    }
  } else {
    return getComputerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

const playerSelection = prompt('Enter rock, paper, or scissors:');
const computerSelection = getComputerChoice();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper, or scissors:");
        const computerSelection = getComputerChoice();
        
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.startsWith("You win!")) {
            playerScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }
    }
    
    if (playerScore > computerScore) {
        console.log(`You win the game! ${playerScore} to ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! ${computerScore} to ${playerScore}.`);
    } else {
        console.log(`It's a tie! ${playerScore} to ${computerScore}.`);
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log(game())
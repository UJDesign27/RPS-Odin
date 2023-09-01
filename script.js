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

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  // your code here!
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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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
//Play round function
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
let computerSelection = getComputerChoice();
// let playerSelection = '';
// Getting Elements
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//Function to return clicked option
// let result = '';
let counterPlayer = 0;
let counterComp = 0;
function runGame(event) {
  let choice = event.currentTarget.getAttribute('id');
  result = playRound(choice, getComputerChoice());
  //Checking for 5 points
  if (counterPlayer < 5 && counterComp < 5) {
    if (result.includes('win')) {
      counterPlayer += 1;
      dispResult(result);
    } else if (result.includes('lose')) {
      counterComp += 1;
      dispResult(result);
    }
  } else {
    if (counterPlayer === 5) {
      alert('Player has won');
      console.log('Player has won')
    } else if (counterComp === 5) {
      alert('Comp has won');
      console.log('Comp has won')
    }
  }
}

//Create function for text and div
function dispResult(result) {
  let div1 = document.createElement('div');
  let text1 = document.createTextNode(result + " " + counterPlayer +":" + counterComp);
  div1.appendChild(text1);
  document.body.append(div1);
}
//AddEvent
rock.addEventListener('click', runGame);
paper.addEventListener('click', runGame);
scissors.addEventListener('click', runGame);

// if (counterPlayer < 5 || counterComp < 5) {
//   if (result.includes('win')) {
//     counterPlayer += 1;
//     dispResult(result);
//   } else if (result.includes('lose')) {
//     counterComp += 1;
//     dispResult(result);
//   }
// } else {
//   if (counterPlayer == 5) {
//     alert('Player has won');
//   } else if (counterComp == 5) {
//     alert('Comp has won');
//   }
// }

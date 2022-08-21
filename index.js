//This is how we get the random selection between r,p, or s
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    //this is how we get a random selection between 0-2
    const random = Math.floor(Math.random() * 3)
    //selects a random choice
    let computerSelection = choices[random]
    return computerSelection;
}

//This is is defining the parameters between player and comp selection
function playRound(playerSelection, computerSelection) {
    //this is the if else section that will figure out who won based off choices
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === "paper") {
        return 'You rock! You win this round, scissors beats paper.'
    }
    else if (playerSelection === 'rock' && computerSelection === "scissors") {
        return 'You rock! You win this round, rock beats scissors.'
    }
    else if (playerSelection === 'paper' && computerSelection === "rock") {
        return 'You rock! You win this round, paper beats rock.'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Better luck next time.. rock beats scissors.'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Better luck next time.. paper beats rock.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Better luck next time.. scissors beats paper.'
    }
};

//this is displaying the message for the player to chose
let playerSelection = prompt('please type your selection("rock", "paper", or "scissors")');

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


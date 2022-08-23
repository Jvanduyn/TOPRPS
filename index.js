let playerScore = 0
let compScore = 0

//This is how we get the random selection between r,p, or s
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    //this is how we get a random selection between 0-2
    const random = Math.floor(Math.random() * 3)
    //selects a random choice
    let compChoice = choices[random]
    return compChoice;
}


//This is is defining the parameters between player and comp selection
const playRound = (playerSelection, computerSelection) => {
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
        playerScore++
        return 'You rock! You win this round, scissors beats paper.'
    }
    else if (playerSelection === 'rock' && computerSelection === "scissors") {
        playerScore++
        return 'You rock! You win this round, rock beats scissors.'
    }
    else if (playerSelection === 'paper' && computerSelection === "rock") {
        playerScore++
        return 'You rock! You win this round, paper beats rock.'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'Better luck next time.. rock beats scissors.'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'Better luck next time.. paper beats rock.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'Better luck next time.. scissors beats paper.'
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please type your selction, either "rock", "paper", or Scissors"').toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
    }


    if (playerScore > compScore) {
        return 'Congrats! You beat the computer.'
    } else if (playerScore < compScore) {
        return 'You lost! Better luck next time'
    } else {
        return 'You tied! What a close round.'
    }
}


console.log(game());

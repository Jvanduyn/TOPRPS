console.log("hello world")

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * 3)
    console.log(choices[random])
}

getComputerChoice()

const playRound = (playerSelection, computerSelection)

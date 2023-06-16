/* function playRound(playerSelection, computerSelection) {
    
    
} */

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    console.log(choice[random])
}
getComputerChoice()

function getPlayerChoice() {
   const player = prompt("choose between rock paper and scissors").toLocaleLowerCase();
   console.log(player)
}
getPlayerChoice()
   
/* const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */
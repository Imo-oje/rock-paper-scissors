function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("Draw")
    }else if (playerSelection === "paper" && computerSelection === "rock" ){
        console.log("you won")
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("you won")
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("you won")
    }else if (playerSelection === "rock" && computerSelection === "paper" ){
        console.log("computer won")
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("computer won")
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("computer won")
    }else if(playerSelection === null || " " ){
        alert("please choose between the valid options - rock', 'paper', 'scissors'")
    }else {
       console.log( "Sorry the game crashed. Try again!")
    }
};

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random]
}

function getPlayerChoice() {
    const player = prompt("choose between rock paper and scissors");
    if (player !== null) {
        return (player.toLowerCase());
    }else {
        console.log("player's result is null")
    }
 }
   
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log (`player: ${playerSelection}`)
console.log (`computer: ${computerSelection}`)
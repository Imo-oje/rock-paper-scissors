function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("Draw")
    }else if (playerSelection === "paper" && computerSelection === "rock" ){
        console.log("player wins")
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("player wins")
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("player wins")
    }else if (playerSelection === "rock" && computerSelection === "paper" ){
        console.log("computer wins")
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("computer wins")
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("computer wins")
    }else {
        console.log("incomplete game")
    }
    
    
}

playRound("scissors", "paper")

// paper beats rock
//rock beats scissors
//scissors beats paper
//

/* function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random]
} */

/* function getPlayerChoice() {
   const player = prompt("choose between rock paper and scissors").toLocaleLowerCase();
   console.log(player)
}
getPlayerChoice() */
   
/* const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`computer: ${computerSelection};`)
console.log(`player: ${playerSelection};`) */
//console.log(playRound(playerSelection, computerSelection));

/* computer choice */
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}
/* player choice */
function getPlayerChoice() {
  const player = prompt("choose between rock paper and scissors");
  if (player !== null) {
    return player.toLowerCase();
  } else {
    console.log("player's result is null");
  }
}

let playerScore = 0;
let computerScore = 0;
let count = 0;
while (count < 3) {
  function playRound(player, computer) {
    if (player === computer) {
      count += 1;
    } else if (player === "paper" && computer === "rock") {
      playerScore += 1;
      count += 1;
    } else if (player === "rock" && computer === "scissors") {
      playerScore += 1;
      count += 1;
    } else if (player === "scissors" && computer === "paper") {
      playerScore += 1;
      count += 1;
    } else if (player === "rock" && computer === "paper") {
      computerScore += 1;
      count += 1;
    } else if (player === "scissors" && computer === "rock") {
      computerScore += 1;
      count += 1;
    } else if (player === "paper" && computer === "scissors") {
      computerScore += 1;
      count += 1;
    } else if (player === null || " ") {
      alert(
        "please choose between the valid options - rock', 'paper', 'scissors'"
      );
    } else {
      console.log("Sorry the game crashed. Try again!");
    }
  }

  playRound(getPlayerChoice(), getComputerChoice());
}
console.log(playerScore);
console.log(computerScore);
if (computerScore > playerScore) {
  console.log("you loose");
} else if (computerScore < playerScore) {
  console.log("you won");
} else {
  console.log("it's a tie game!");
}

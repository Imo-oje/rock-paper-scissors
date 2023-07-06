/* computer choice */
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

const btn = document.querySelectorAll("button");
const playerBoard = document.querySelector(".player-selected");
const computerBoard = document.querySelector(".computer-selected");
const result = document.querySelector(".result");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

let playerS = 0;
let computerS = 0;

let count = 0;
function playRound(player, computer) {
  if (player === computer) {
    result.textContent = "draw";
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    result.textContent = "you win!";
    playerS += 1;
    playerScore.textContent = "player: " + playerS;
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "scissors" && computer === "rock") ||
    (player === "paper" && computer === "scissors")
  ) {
    result.textContent = "you loose!";
    computerS += 1;
    computerScore.textContent = "computer: " + computerS;
  } else if (player === null || " ") {
    alert(
      "please choose between the valid options - rock', 'paper', 'scissors'"
    );
  } else {
    console.log("Sorry the game crashed. Try again!");
  }
  playerBoard.textContent = player;
  computerBoard.textContent = computer;
}

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent.toLowerCase(), getComputerChoice());
  });
});

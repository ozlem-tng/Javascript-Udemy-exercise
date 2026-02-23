// Windows/Linux: Shift + Alt + F
const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  // This is for the "=>" symbol creation function
  const randomValue = Math.random();
  if (randomValue < 0.34) return ROCK;
  else if (randomValue < 0.67) return PAPER;
  else return SCISSORS;
};
const getWinner = (cComputer, cPlayer=DEFAULT_USER_CHOICE) => {
  return cComputer == cPlayer //easier with "=>" (function).
    ? RESULT_DRAW
    : (cComputer === ROCK && cPlayer === PAPER) ||
      (cComputer === PAPER && cPlayer === SCISSORS) ||
      (cComputer === SCISSORS && cPlayer === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  /*  if (cComputer == cPlayer) {
    return RESULT_DRAW;
  } else if (
    (cComputer === ROCK && cPlayer === PAPER) ||
    (cComputer === PAPER && cPlayer === SCISSORS) ||
    (cComputer === SCISSORS && cPlayer === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  }else {
    return RESULT_COMPUTER_WINS;
  } */
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice(); // Might be undefined
  const computerChoice = getComputerChoice(); 
  let winner;
  if (playerChoice) {
     winner = getWinner(computerChoice, playerChoice);
  }else 
  {
    winner = getWinner(computerChoice,playerChoice);
  }

  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE} , Computer picked ${computerChoice}: You `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw!";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won!";
  } else {
    message = message + "lost!";
  }
  alert(message);
  gameIsRunning = false;
});

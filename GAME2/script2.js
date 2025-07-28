let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "It's a Draw!";
  msg.style.backgroundColor = "#222";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
  } else {
    compScore++;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;
    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "rock")
    ) {
      userWin = true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});

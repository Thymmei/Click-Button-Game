let score = 0;
let timeLeft = 10;
let timer;

let gameButton = document.getElementById("gameButton");
let timerDisplay = document.getElementById("timer");
let scoreDisplay = document.getElementById("score");
let messageDisplay = document.getElementById("message");
let restartDisplay = document.getElementById("restart");

function startGame() {
 score = 0;
 timeLeft = 10;
 gameButton.disabled = false;
 messageDisplay.textContent = "";
 updateScore();
 startTimer();
 restart();
}

function startTimer() {
 timer = setInterval(function() {
  timeLeft--;
  timerDisplay.textContent = "Time left: " + timeLeft + "s";

  if (timeLeft <= 0) {
   clearInterval(timer);
   gameButton.disabled = true;
   gameButton.style.backgroundColor = "white";
   gameButton.style.color = "black";
   messageDisplay.textContent = "Time's up! Your score is " + score;
   restartDisplay.style.fontStyle = "oblique";
   restartDisplay.style.color = "white";
   restartDisplay.style.fontWeight = "bold";
   restartDisplay.textContent = "Reload the page to start again.";

  }
 }, 1000);
}

function updateScore() {
 scoreDisplay.textContent = "Score: " + score;
}

gameButton.addEventListener("click", function() {
 score++;
 updateScore();
});

startGame();
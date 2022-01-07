const timerCount = document.getElementById("large-font timer-count");
const secondsRemaining = document.getElementById("seconds-remaining");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const startButton = document.getElementById("start-button");

var count = 9;
var intervalId;

const startTimer = () => {
  if (count >= 0) {
    intervalId = setInterval(
      (countSeconds = () => {
        if (count > 1) {
          timerCount.innerHTML = count;
          count -= 1;
        } else if (count === 1) {
          timerCount.innerHTML = count;
          count -= 1;
          secondsRemaining.innerHTML = "second remaining";
        } else if (count === 0) {
          timerCount.innerHTML = count;
          secondsRemaining.innerHTML = "time's up";
          clearInterval(intervalId);
        }
      }),
      1000
    );
  }
};

const resetGame = () => {
  count = 9;
  timerCount.innerHTML = 10;
  win.innerHTML = 0;
  lose.innerHTML = 0;
  secondsRemaining.innerHTML = "seconds remaining";
  clearInterval(intervalId);
};

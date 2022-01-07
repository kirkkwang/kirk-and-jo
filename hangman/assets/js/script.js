{
  /* <p id="demo"></p>; */
}

// const startTimer = () => {
//   let now = new Date().getTime();
//   let tenSecondsFromNow = new Date().getTime() + 10000;

//   let seconds = tenSecondsFromNow - now;

//   let timer = Math.floor((seconds % (1000 * 60)) / 1000);

//   document.getElementById("timer").innerHTML = timer;
// };

let count = 9;
let intervalId;

const startTimer = () => {
  if (count >= 0) {
    intervalId = setInterval(
      (countSeconds = () => {
        if (count > 1) {
          document.getElementById("timer").innerHTML = count;
          count -= 1;
        } else if (count === 1) {
          document.getElementById("timer").innerHTML = count;
          count -= 1;
          document.getElementById("seconds-remaining").innerHTML =
            "second remaining";
        } else if (count === 0) {
          document.getElementById("timer").innerHTML = count;
          document.getElementById("seconds-remaining").innerHTML = "time's up";
          clearInterval(intervalId);
        }
      }),
      1000
    );
  }
};

// const tenSeconds = (num) => {
//   if (num >= 0) {
//     let seconds = num;
//     ten -= 1;
//     console.log(num);
//     document.getElementById("timer").innerHTML = seconds;
//     console.log(ten);
//   } else {
//     return "Time's Up!";
//   }
// };

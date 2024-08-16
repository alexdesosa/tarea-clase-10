document.querySelector("#start-btn").addEventListener("click", () => {
  document.querySelector("#timer").style.display = "block";
  document.querySelector("#start-btn").style.display = "none";
  startTimer();
});

function startTimer() {
  let seconds = 0;
  let minutes = 0;
  let timer = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    document.querySelector("#seconds").textContent =
      seconds < 10 ? `0${seconds}` : seconds;
    document.querySelector("#minutes").textContent =
      minutes < 10 ? `0${minutes}:` : minutes;
  }, 1000);
}

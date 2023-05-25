let intervalId;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime() - elapsedTime;
    intervalId = setInterval(updateTimer, 10);
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(intervalId);
  elapsedTime = 0;
  updateTimer();
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";

}

function updateTimer() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

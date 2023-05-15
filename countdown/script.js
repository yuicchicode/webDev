const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
  const targetDate = new Date("2023-12-31");
  
  setInterval(() => {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;
    
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); 
    
    
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = minutes;
    secondsEl.textContent = seconds;
    
    
    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      
    }
  }, 1000);
}


countdown();

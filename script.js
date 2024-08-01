const countdownTime = document.getElementById("countdown-time");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

const currentTime = new Date(); // get the current date and time
const TwoDaysThreeHoursTenMinutesFiveSecondsFromNow = new Date(currentTime.getTime() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 10 * 60 * 1000 + 5 * 1000); // add 2 day, 3 hours, 10 minutes, and 5 seconds to the current time
const countdownDate = TwoDaysThreeHoursTenMinutesFiveSecondsFromNow.getTime(); // set the countdown date and time

let interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.textContent = days.toString().padStart(2, "0");
  hoursSpan.textContent = hours.toString().padStart(2, "0");
  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    clearInterval(interval);
    countdownTime.textContent = "EXPIRED";
  }
}, 1000);
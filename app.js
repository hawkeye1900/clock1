// get second hand
// how many degrees does hand move every second? 360 / 60
// rotate hand by 6 degrees,
const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");
let secondDegrees = 90;
let minuteDegrees = 90;
let hourDegrees = 90;

let seconds = 0;

secondHand.style.transform = `rotate(${secondDegrees}deg)`;
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

function setSeconds() {
  secondDegrees += 6;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

function setMinutes() {
  minuteDegrees += 6;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

function setHours() {
  hourDegrees += 30;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setSeconds, 1000);
setInterval(setMinutes, 60000);
setInterval(setHours, 3600000);

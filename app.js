const secondHand = document.querySelector(".seconds");
const secondHand2 = document.querySelector(".seconds2");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

const initialDegrees = 90;

const DEGREES_PER_SECOND = 6; // 360 / 60;
const DEGREES_PER_MINUTE = 0.1; // 360 / 3600;
const DEGREES_PER_HOUR = 0.008333333; // 36 / 43200;
const SECONDS_PER_HOUR = 3600;
const OFFSET = 90;

function setTime() {
  const now = new Date();
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();

  let secondHandDegrees = DEGREES_PER_SECOND * secs + OFFSET;

  secondHand.style.display = secondHandDegrees === OFFSET ? "none" : "";
  secondHand2.style.display = secondHandDegrees === OFFSET ? "" : "none";

  // Second hand
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  secondHand2.style.transform = `rotate(${secondHandDegrees}deg)`;

  // Minute hand
  let minuteHandDegrees = DEGREES_PER_MINUTE * (secs + mins * 60) + OFFSET;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;

  // Hour hand
  let hoursHandDegrees =
    DEGREES_PER_HOUR * (mins * 60 + secs + hrs * SECONDS_PER_HOUR) + 90;
  hourHand.style.transform = `rotate(${hoursHandDegrees}deg)`;
}

setInterval(setTime, 1000);

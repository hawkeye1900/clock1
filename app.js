const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

const initialDegrees = 90;

function setTime() {
  const now = new Date();
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();

  const secondHandDegreesPerSecond = 360 / 60;
  const minuteHandDegreesPerSecond = 360 / 3600;
  const hourHandDegreesPerSecond = 360 / 43200;
  const secondsPerHour = 3600;

  let secondHandDegrees = secondHandDegreesPerSecond * secs + 90;
  console.log(secondHandDegrees);
  if (secondHandDegrees === 90) {
    secondHand.style.transform = "none";
  } else {
    secondHand.style.transform = "";
  }

  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;

  let minuteHandDegrees = minuteHandDegreesPerSecond * (secs + mins * 60) + 90;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;

  let hoursHandDegrees =
    hourHandDegreesPerSecond * (mins * 60 + secs + hrs * secondsPerHour) + 90;
  hourHand.style.transform = `rotate(${hoursHandDegrees}deg)`;
}

setInterval(setTime, 1000);

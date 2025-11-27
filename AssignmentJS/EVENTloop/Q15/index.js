let time = Number(prompt("Enter number of seconds:"));

let timer = setInterval(() => {
  console.log(time);
  time--;
  if (time < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

setTimeout(() => {
  let stop = prompt("Press 's' to stop:");
  if (stop === "s" || stop === "S") {
    clearInterval(timer);
    console.log("Countdown stopped by user.");
  }
}, 2000);

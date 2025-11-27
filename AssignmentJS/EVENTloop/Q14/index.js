console.log("Begin");

console.log("End");

Promise.resolve().then(() => {
  console.log("Promise Task");
});

setTimeout(() => {
  console.log("Timeout Task");
}, 0);
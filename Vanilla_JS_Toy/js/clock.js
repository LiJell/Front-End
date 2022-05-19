const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// argument 1: function that I want to run, argument 2: how often (ms)
getClock();
setInterval(getClock, 1000);

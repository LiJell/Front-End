const clock = document.querySelector("h2#clock");

//padStart(a, b) a-> want length of string b-> add string to fulfill length of string as much as 'a'
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// argument 1: function that I want to run, argument 2: how often (ms)
getClock();
setInterval(getClock, 1000);

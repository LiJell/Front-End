const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// argument 1: function that I want to run, argument 2: how often (ms)
// setInterval(sayHello, 5000);
setTimeout(sayHello, 5000);

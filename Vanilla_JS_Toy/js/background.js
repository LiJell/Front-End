const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

// tag adding at the end
document.body.appendChild(bgImg);
// adding at first
// document.body.prepend(bgImg);

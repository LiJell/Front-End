const quotes = [
  {
    quote:
      "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    author: "Ellen Ullman",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie",
  },
  {
    quote:
      "Rules of Optimization: Rule 1: Don't do it. Rule 2 (for experts only): Don't do it yet.",
    author: "Michael A. Jackson",
  },
  {
    quote:
      "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    author: "Andy Hunt",
  },
  {
    quote:
      "One of the best programming skills you can have is knowing when to walk away for a while.",
    author: "Oscar Godson",
  },
  {
    quote:
      "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.",
    author: "Steve McConnell",
  },
  {
    quote:
      "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
    author: "Tom Cargill",
  },
  {
    quote:
      "Good code is its own best documentation. As you're about to add a comment, ask yourself, “How can I improve the code so that this comment isn't needed?” Improve the code and then document it to make it even clearer.",
    author: "Steve McConnell",
  },
  {
    quote:
      "One of my most productive days was throwing away 1000 lines of code.",
    author: "Ken Thompson",
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

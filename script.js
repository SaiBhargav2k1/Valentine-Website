// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Quote Generator
  const quotes = [
    "You are my today and all of my tomorrows. ❤️",
    "I love you more than coffee, and that's saying a lot. ☕",
    "You are my sunshine on a rainy day. 🌦️",
    "Every love story is beautiful, but ours is my favorite. 💕",
    "I love you to the moon and back. 🌙",
    "You are the missing piece to my puzzle. 🧩",
    "I choose you. And I'll choose you over and over. 💖",
  ];

  const quoteText = document.getElementById('quote-text');
  const quoteButton = document.getElementById('quote-button');

  quoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
  });

  // Message Click Alert
  const message = document.querySelector('.message');
  message.addEventListener('click', () => {
    alert('I love you to the moon and back! 🌙❤️');
  });
});
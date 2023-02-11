'use strict';
let checkButton = document.querySelector('.check');
let gessNumberPositon = document.querySelector('.number');
let message = document.querySelector('.message');
let bodyForColor = document.querySelector('body');
let score = document.querySelector('p span');

let againButton = document.querySelector('.again');

let minNumber = 1;
let maxNumber = 50;
let randomNumber = Math.trunc(Math.random() * 50) + 1;
// Math.floor(Math.random() * (+maxNumber - +minNumber)) + +minNumber + 1;

let highScore = 0;
let valueFromInput = 20;

checkButton.addEventListener('click', e => {
  e.preventDefault();
  let inputValue = document.querySelector('.guess').value;
  let inputInt = parseInt(inputValue);

  if (!inputValue) {
    message.textContent = '⛔  No number!';
  }
  if (inputInt === randomNumber) {
    bodyForColor.style.backgroundColor = '#60b347';
    gessNumberPositon.style.width = '30rem';
    gessNumberPositon.textContent = inputInt;
    message.textContent = '🎉 Number is correct!';
    if (valueFromInput > highScore) {
      highScore = valueFromInput;
      document.querySelector('.highscore').textContent = valueFromInput;
    }
  } else if (inputInt < randomNumber) {
    if (valueFromInput > 0) {
      valueFromInput--;
    }

    score.textContent = valueFromInput;
    message.textContent = '📉 Number is too low';
  } else if (inputInt > randomNumber) {
    if (valueFromInput > 0) {
      valueFromInput--;
    }
    score.textContent = valueFromInput;
    message.textContent = '📈 Number is too high';
  }
  if (valueFromInput === 0) {
    message.textContent = 'You lost the Game😝';
    document.querySelector('.check').style.display = 'none';
  }
});

againButton.addEventListener('click', e => {
  e.preventDefault();
  valueFromInput = 20;
  score.textContent = valueFromInput;
  randomNumber =
    Math.floor(Math.random() * (+maxNumber - +minNumber)) + +minNumber;

  bodyForColor.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  gessNumberPositon.style.width = '15rem';
  gessNumberPositon.textContent = '?';
  document.querySelector('.check').style.display = 'block';
});

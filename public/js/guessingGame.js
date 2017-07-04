var age = 12

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
  var userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
  guesses.textContent += userGuess + ' ';

  if (userGuess === age) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 3) {
    lastResult.textContent = "Game Over!";
    lastResult.style.textTransform = 'uppercase';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.color = 'white';
    if(userGuess < age) {
      lowOrHi.textContent = 'Last guess was too low';
    } else if(userGuess > age) {
      lowOrHi.textContent = 'Last guess was too high';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
    resetButton.style.backgroundColor = '#FCE4EC';
    resetButton.style.width = '60%';
    resetButton.style.color = '#C71585';
    resetButton.style.borderRadius = '50px';
    resetButton.style.padding = '25px';
    resetButton.textContent = 'New Game';
  document.getElementById("game").appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

}
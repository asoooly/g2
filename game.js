// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Number of remaining guesses for the player
let remainingGuesses = 10;

// Function to handle the player's guess
function handleGuess() {
  // Read the input number from the player
  const userGuess = parseInt(document.getElementById('guess-input').value);

  // Check the validity of the guess
  if (isNaN(userGuess)) {
    setMessage('Please enter a valid number.');
    return;
  }

  // Check the entered number
  if (userGuess === targetNumber) {
    setMessage('Congratulations! You guessed the correct number.');
    disableInput();
  } else if (userGuess < targetNumber) {
    setMessage('The number you entered is smaller than the correct number. Try again.');
  } else {
    setMessage('The number you entered is larger than the correct number. Try again.');
  }

  // Update the number of remaining guesses
  remainingGuesses--;

  // Check for the end of the game
  if (remainingGuesses === 0) {
    setMessage('Out of guesses. The correct number was: ' + targetNumber);
    disableInput();
  } else {
    setRemainingGuesses(remainingGuesses);
  }
}

// Function to set the message status
function setMessage(message) {
  document.getElementById('message').textContent = message;
}

// Function to set the remaining guesses count
function setRemainingGuesses(remainingGuesses) {
  document.getElementById('remaining-guesses').textContent = 'Remaining Guesses: ' + remainingGuesses;
}

// Function to disable the input field after winning or running out of guesses
function disableInput() {
  document.getElementById('guess-input').disabled = true;
}

// Necessary statements to link events to the appropriate functions
document.getElementById('submit-button').addEventListener('click', handleGuess);
setRemainingGuesses(remainingGuesses);

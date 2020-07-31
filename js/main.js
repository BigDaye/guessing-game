/*------Constants------*/

/*------Variables------*/
let secretNum, guessList, isWinner, currentGuess;

/*------Cached Element References------*/
const messageEl = document.getElementById('message');
const guessEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');


/*------Event Listeners------*/

resetBtn.addEventListener('click', function() {
    init();
}) 

guessBtn.addEventListener('click', function() {
    if (guessList.length === 0) {
        guessEl.innerText = 'Previous Guesses:'
    }
    if (isWinner === false) {
        checkGuess(parseInt(guessInput.value))
    }
})



/*------Functions------*/

// Init function sets all state variable for a new game
init();

function init() {
    //Easy way to remove all appended children from element.
    guessEl.innerText = '';
    messageEl.innerText = 'Please enter a number between 1 and 100';
    guessInput.value = '';
    guessList = [];
    isWinner = false;
    secretNum = Math.floor(Math.random() * 100) + 1;
}
function checkGuess(guess){
    if ( guess < 1 || guess > 100) {
        messageEl.innerText = `Whoops! Please enter a number between 1 and 100!`;
    } else if (guess === secretNum) {
        //win scencario]
        confetti.start(3000)
        messageEl.className = 'winner';
        isWinner = true;
        if (guessList.length === 0) {
            messageEl.innerText = `Congrats! You found the number in ${guessList.length} guess!`
        } else {
            messageEl.innerText = `Congrats! You found the number in ${guessList.length} guesses!`
        }
        console.log(guess, 'is perfect')
    } else if (guess < secretNum) {
        //handle guess too low
        messageEl.innerText = `your guess of ${guess} is too low.`;
        messageEl.className = 'low';
        guessList.push(guess);
        console.log(guess, 'is too low');
        render(guess);
    } else {
        // guess too high
        messageEl.innerText = `your guess of ${guess} is too high.`;
        messageEl.className = 'high';
        guessList.push(guess);
        console.log(guess, 'is too high');
        render(guess);
    }
}

function render(guess) {
    //append chide div to guessEl div based on whether our guess is higher or lower than secretNum

    if (guess === secretNum) {
        let div = document.createElement('div');
        div.innerText = guess;
        div.className = 'winner';
        guessEl.appendChild(div);
    } else if (guess > secretNum) {
        //create new div, then append to the parent div
            let div = document.createElement('div');
            div.innerText = guess;
            div.className = 'high';
            guessEl.appendChild(div);
        //do things
        } else {
            let div = document.createElement('div');
            div.innerText = guess;
            div.className = 'low';
            guessEl.appendChild(div);
        }
        
    }
    








// 1. Create an HTML element for the game's title.
// 2. Create an HTML element to handle displaying messages to the user.
// 3. Create an input field for the user to enter a number.
// 4. Create an HTML element to handle displaying a list of previous guesses.
// 5. Create 'Guess' and 'Reset' buttons.
// 6. Define variables for secret number, guess list, current guess, if there is a winner (boolean).
// 7. Define cached element reference for the game message and previous guesses HTML elements, and both buttons.
// 8. Write an initialization function that resets the game's status and picks a winning number. Call the initialization function before any other functions.
// 9. Write an event listener for the 'Reset' button to run the initialization function and reset the game.
// 10. Add an event listener for the 'Submit' button that calls a function to check the current guess. Pass the current value of the input element into the function for comparison. This function should compare the guess to the secret number. Stub up conditional statements to handle what happens when the number is higher, lower, or equal to the secret number.
// 11. Fill in each of the conditional statements for the checkGuess function. Flip the isWinner variable to true if there's a correct guess to prevent additional clicks. Add a line to clear out the guess input value as well as error handling for inputting a number out of range. Push the guess into the previous guesses array. Call a function to render all guesses.
// 12. Write a render function to display the list of previous guesses on the page. Append an element to the cached guesses element, also adding a class name indicating whether it is higher or lower than the secret number.

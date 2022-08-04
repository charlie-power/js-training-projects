'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret number: ${secretNumber}`);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;

    if (!guess) {
        document.querySelector('.message').textContent = 'No number input';
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('body').style.backgroundColor = '#bada55';

        // compare highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else {
        document.querySelector('.message').textContent = 'No! You fool!';
        score--;
        document.querySelector('.score').textContent = score;
    }

});


document.querySelector('.again').addEventListener('click', function () {
    // Clear guess input
    document.querySelector('.guess').value = undefined;
    // reset secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`New secret number ${secretNumber}`);
    // reset body color
    document.querySelector('body').style.backgroundColor = '#000';
    // reset score
    score = 20;
    document.querySelector('.score').textContent = score;
    // reset start guessing message
    document.querySelector('.message').textContent = 'Start guessing...';
});
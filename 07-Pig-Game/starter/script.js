'use strict';

// Define Variables
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')

const activeTotal = document.querySelector('.player--active .score')
const activeCurrent = document.querySelector('.player--active .current-score')

const diceImage = document.querySelector('.dice')

// Define functions
const diceRoll = function () {
    return Math.trunc(Math.random() * 6) + 1
}

const addCurrentScore = function (score) {
    console.log(`Add ${score} to Current`)
    activeCurrent.textContent = Number(activeCurrent.textContent) + Number(score)
    console.log(`activeCurrent: ${activeCurrent}`)
}

function switchActivePlayer() {
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}


// Add listeners
btnRoll.addEventListener('click', function () {
    let diceResult = diceRoll();
    console.log(`Dice Roll: ${diceResult}`)
    diceImage.src = `dice-${diceResult}.png`
    if (diceResult == 1) {
        // Empty current score and switch players
    } else {
        addCurrentScore(diceResult)
    }
})

btnHold.addEventListener('click', function () {
    // add current to total
    // clear current
    // switch players
    switchActivePlayer()
})
// Reset data
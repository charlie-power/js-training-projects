'use strict';

// Define Variables
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')

let activeTotal = document.querySelector('.player--active .score')
let activeCurrent = document.querySelector('.player--active .current-score')

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

const addToTotal = function (score) {
    activeTotal.textContent = Number(activeTotal.textContent) + score
}

function clearCurrent() { }

function switchActivePlayer() {
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
    activeTotal = document.querySelector('.player--active .score')
    activeCurrent = document.querySelector('.player--active .current-score')
}


// Add listeners
btnRoll.addEventListener('click', function () {
    let diceResult = diceRoll();
    console.log(`Dice Roll: ${diceResult}`)
    diceImage.src = `dice-${diceResult}.png`
    if (diceResult == 1) {
        // Empty current score and switch players
        activeCurrent.textContent = 0
        switchActivePlayer();
    } else {
        addCurrentScore(diceResult)
    }
})

btnHold.addEventListener('click', function () {
    // add current to total
    addToTotal(Number(activeCurrent.textContent))
    // clear current
    activeCurrent.textContent = 0
    // switch players
    switchActivePlayer()
})


// Reset data
function resetGame() {
    // Set totals to 0\
    player1.querySelector('.score').textContent = 0
    player2.querySelector('.score').textContent = 0

    // Set currents to 0\
    player1.querySelector('.current-score').textContent = 0
    player2.querySelector('.current-score').textContent = 0

    if (!player1.classList.contains('player--active')) switchActivePlayer()

}
btnNew.addEventListener('click', resetGame)

// Initial reset
resetGame()
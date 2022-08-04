'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const openButton = document.querySelectorAll('.show-modal');


const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


for (let i = 0; i < openButton.length; i++) {
    // Loop through open modal buttons
    openButton[i].addEventListener('click', openModal)
}

closeButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && !modal.classList.contains('hidden')) closeModal();
})

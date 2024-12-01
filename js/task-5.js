'use strict';

const widget = document.querySelector('.widget');
const textColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', handleSubmit);

function handleSubmit() {
    // document.body.style.backgroundColor = getRandomHexColor();
    widget.style.backgroundColor = getRandomHexColor();
    textColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

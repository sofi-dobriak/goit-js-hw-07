'use strict';

const widget = document.querySelector('.widget');
const text = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', handleClick);

function handleClick() {
    // document.body.style.backgroundColor = getRandomHexColor();
    widget.style.backgroundColor = getRandomHexColor();
    text.textContent = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

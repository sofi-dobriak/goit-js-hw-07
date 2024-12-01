'use strict';

const controls = document.querySelector('.controls');
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    let boxSize = 30;

    const rowContainer = document.createElement('div');
    rowContainer.style.display = 'flex';
    rowContainer.style.flexDirection = 'row';
    rowContainer.style.gap = '8px';

    let boxedMarkup = '';

    for (let i = 0; i < amount; i++) {
        boxedMarkup += `<div
        style="width:${boxSize}px;
        height:${boxSize}px;
        background-color: ${getRandomHexColor()};"></div>`;

        boxSize += 10;
    }

    rowContainer.innerHTML = boxedMarkup;
    boxesContainer.prepend(rowContainer);
}

function handleCreate() {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    }
}

function handleDestroy() {
    boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', handleCreate);
destroyButton.addEventListener('click', handleDestroy);

boxesContainer.style.display = 'flex';
boxesContainer.style.flexDirection = 'column';
boxesContainer.style.gap = '10px';

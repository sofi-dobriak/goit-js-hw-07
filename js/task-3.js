'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleInput);

function handleInput() {
    let value = input.value.trim();

    if (value === '') {
        value = 'Anonymous';
    }

    output.textContent = value;
}

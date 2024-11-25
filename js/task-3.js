'use strict';

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    textOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
})

// Styles

textInput.style.outline = "none";
textInput.style.paddingTop = '8px';
textInput.style.paddingBottom = '8px';
textInput.style.paddingLeft = '16px';
textInput.style.paddingRight = '16px';
textInput.style.border = '1px solid #808080';
textInput.style.borderRadius = '4px';
textInput.style.fontSize = '14px';
textInput.style.color = '#2e2f42';

textInput.addEventListener('mouseenter', () => {
    textInput.style.borderColor = '#000';
});
textInput.addEventListener('mouseleave', () => {
    textInput.style.borderColor = '#808080';
});
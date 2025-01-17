'use strict';

/*Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.*/

const widget = document.querySelector('.widget');
const colorText = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', onButtonClick);

function onButtonClick() {
    const newColor = getRandomHexColor();
    widget.style.backgroundColor = newColor;
    colorText.textContent = newColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// function handleSubmit() {
//     let randomColor = getRandomHexColor();

//     document.body.style.backgroundColor = randomColor;
//     textColor.textContent = randomColor;
// }

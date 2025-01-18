'use scrtict';

/*Завдання 1: Керування світлофором
Опис: Створи інтерфейс для світлофора з трьома кнопками ("Включити червоне", "Включити жовте", "Включити зелене"). Кожна кнопка змінює кольори на відповідний (лише один активний).
Ціль: Застосувати події click для перемикання класів і стилів. */

const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

const redButton = document.querySelector('.btn-red');
const yellowButton = document.querySelector('.btn-yellow');
const greeButton = document.querySelector('.btn-green');

function resetColors() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

redButton.addEventListener('click', () => {
    resetColors();
    redLight.classList.add('active');
});

yellowButton.addEventListener('click', () => {
    resetColors();
    yellowLight.classList.add('active');
});

greeButton.addEventListener('click', () => {
    resetColors();
    greenLight.classList.add('active');
});

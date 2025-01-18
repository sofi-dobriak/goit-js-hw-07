'use strict';

/*Завдання 2: Калькулятор із стилями
Опис: Реалізуй простий калькулятор, де користувач вводить числа і вибирає операцію. Результат виводиться зі стилізацією: зеленим для додатного числа, червоним — для від'ємного.
Ціль: Практика роботи з формами, подією click і умовним застосуванням стилів. */

const firstNumber = document.querySelector('#num1');
const secondNumber = document.querySelector('#num2');
const operator = document.querySelector('#operation');
const submitButton = document.querySelector('.btn-calculate');
const resultBox = document.querySelector('#result');

submitButton.addEventListener('click', onButtonSubmit);

function onButtonSubmit(e) {
    e.preventDefault();

    const firstValue = +firstNumber.value;
    const secondValue = +secondNumber.value;
    let result = 0;

    switch (operator.value) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            if (secondValue === 0) {
                resultBox.innerHTML = `<p>На нуль ділити не можна!</p>`;
                return;
            }
            result = firstValue / secondValue;
            break;
    }

    const resultColor = result >= 0 ? 'green' : 'red';

    resultBox.innerHTML = resultTemplate(
        result,
        firstValue,
        secondValue,
        operator.value,
        resultColor
    );
}

function resultTemplate(result, firstValue, secondValue, operator, resultColor) {
    return `<p style="color: ${resultColor};">${firstValue} ${operator} ${secondValue} = ${result}</p>`;
}

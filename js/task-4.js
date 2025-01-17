'use strict';

/*відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset. */

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const data = {
        email,
        password,
    };

    console.log(data);

    form.reset();
}

// const registerForm = document.querySelector('.login-form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const form = event.target;
//     const login = form.elements.email.value.trim();
//     const password = form.elements.password.value.trim();

//     if (login === '' || password === '') {
//         alert('All form fields must be filled in');
//         return;
//     }

//     let loginUser = {
//         email: login,
//         password: password,
//     };

//     console.log(loginUser);
//     form.reset();
// }

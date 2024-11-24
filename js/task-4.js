'use strict';

const registerForm = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const formButton = document.querySelector('button');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (login === '' || password === '') {
        return alert('All form fields must be filled in');
    }

    const user = {
        login,
        password,
    };

    console.log(user)

    form.reset();
}

// Styles

registerForm.style.display = 'flex';
registerForm.style.flexDirection = 'column';
registerForm.style.gap = '15px';
registerForm.style.width = '360px';

labels.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.rowGap = '8px';

    label.style.fontSize = '16px';
});

inputs.forEach(input => {
    input.style.height = '40px';
    input.style.outline = 'none';
    input.style.border = '1px solid #808080';
    input.style.borderRadius = '4px';
    input.style.paddingLeft = '16px';
});

formButton.style.color = '#fff';
formButton.style.backgroundColor = '#4e75ff';
formButton.style.border = 'none';
formButton.style.borderRadius = '8px';
formButton.style.width = '86px';
formButton.style.height = '40px';
formButton.style.cursor = 'pointer';







'use strict';

const form = document.querySelector('.form-task');
const taskContainer = document.querySelector('.tasks-container');

form.addEventListener('submit', onFormSubmit);
taskContainer.addEventListener('change', onCheckBoxClick);

function onFormSubmit(e) {
    e.preventDefault();

    const title = e.target.elements.title.value.trim();
    const description = e.target.elements.description.value.trim();

    if (title === '' || description === '') {
        alert('Both fields must be filled!');
        return;
    }

    const data = {
        title,
        description,
    };

    console.log(data);

    const markup = taskTamplate(data);
    taskContainer.insertAdjacentHTML('afterbegin', markup);

    form.reset();
}

function taskTamplate(taskObj) {
    return `<div class="note-container">
            <input class="note-checkbox" type="checkbox" name="checkbox" id="checkbox">
            <div class="text-container">
                <p class="note-title">${taskObj.title}</p>
                <p class="note-text">${taskObj.description}</p>
            </div>
        </div>`;
}

function onCheckBoxClick(e) {
    if (e.target.classList.contains('note-checkbox')) {
        const noteText = e.target.closest('.note-container').querySelector('.text-container');

        if (e.target.checked) {
            noteText.style.color = 'gray';
            noteText.style.textDecoration = 'line-through';
        } else {
            noteText.style.color = 'black';
            noteText.style.textDecoration = 'none';
        }
    }
}

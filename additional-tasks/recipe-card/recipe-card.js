'use scrict';

const form = document.querySelector('.recipe-form');
const recipeContainer = document.querySelector('.recipe-container-item');
const inputs = document.querySelectorAll('.recipe-input');
const textArea = document.querySelector('.recipe-textarea');

form.addEventListener('submit', onFormSubmit);
inputs.forEach(input => input.addEventListener('input', onInputType));
textArea.addEventListener('input', onInputType);

function onInputType(e) {
    const minLen = +e.target.dataset.minLen;
    const inputValue = e.target.value.trim();

    if (!inputValue) {
        e.target.style.borderColor = 'black';
        e.target.style.backgroundColor = '#fafafa';
    } else if (inputValue.length < minLen) {
        e.target.style.borderColor = 'red';
        e.target.style.backgroundColor = '#ffe6e6';
    } else {
        e.target.style.borderColor = 'green';
        e.target.style.backgroundColor = '#e6ffe6';
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    const title = e.target.elements.title.value.trim();
    const ingredients = e.target.elements.ingredients.value.split(',').map(item => item.trim());
    const cookingStep = e.target.elements.cooking.value
        .split('\n')
        .filter(step => step.trim() !== '');

    if (!title || ingredients.length === 0 || cookingStep.length === 0) {
        alert('Please fill out all fields!');
        return;
    }

    const recipeData = {
        title,
        ingredients,
        cooking: cookingStep,
    };

    // Створення нового контейнера для рецепту
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe-item');

    // Додаємо стилі до контейнера рецепту
    recipeItem.style.border = '1px solid black';
    recipeItem.style.borderRadius = '6px';
    recipeItem.style.maxWidth = '420px';
    recipeItem.style.padding = '12px';
    recipeItem.style.marginBottom = '20px';

    // Генерація розмітки для рецепту
    const markup = recipeTemplate(recipeData);
    recipeItem.innerHTML = markup;

    // Додаємо новий рецепт до основного контейнера
    recipeContainer.prepend(recipeItem);

    form.reset();
}

function recipeTemplate({ title, ingredients, cooking }) {
    return ` <h2 class="recipe-title">${title}</h2>

            <h3 class="ingredients-title">List of ingredients:</h3>
            <ul class="ingredients-list">
                ${ingredients
                    .map(ingredient => `<li class="ingredient-item">${ingredient}</li>`)
                    .join('')}
            </ul>

            <h3 class="cooking-title">Process of cookin</h3>
            <ul class="cooking-list">
            ${cooking
                .map(
                    (step, index) => `
                <li class="cooking-item">
                    <p class="step-title">Step ${index + 1}:</p>
                    <p>${step}</p>
                </li>
            `
                )
                .join('')}
        </ul>`;
}

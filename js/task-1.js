'use strict';

const categoriesList = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItem.length}`);

const numberOfCategories = categoriesItem.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const numberOfLists = item.querySelectorAll('li').length;

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${numberOfLists}`);
});

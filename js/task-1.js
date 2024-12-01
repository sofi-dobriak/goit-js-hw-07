'use strict';

const categoriesList = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItem.length}`);

const itemDescription = categoriesItem.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const subItems = item.querySelectorAll('li').length;

    console.log(`Categories: ${title}`);
    console.log(`Elements: ${subItems}`);
});

'use strict';

/**З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).*/

const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const itemTitle = item.firstElementChild.textContent;
    const itemElements = item.lastElementChild.children.length;

    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${itemElements}`);
});

// const categoriesList = document.querySelector('#categories');
// const categoriesItem = document.querySelectorAll('.item');

// console.log(`Number of categories: ${categoriesItem.length}`);

// const itemDescription = categoriesItem.forEach(item => {
//     const title = item.querySelector('h2').textContent;
//     const subItems = item.querySelectorAll('li').length;

//     console.log(`Categories: ${title}`);
//     console.log(`Elements: ${subItems}`);
// });

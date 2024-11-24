"use strict"

const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll(".item");

console.log(`Numbers of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const cauntCategoryElem = item.querySelectorAll('li').length;

    const titles = item.querySelectorAll('h2');
    const subList = item.querySelectorAll('ul');
    const subItems = item.querySelector('ul').querySelectorAll('li');

    console.log(`Categorie: ${categoryTitle}`);
    console.log(`Elements: ${cauntCategoryElem}`);

    // Styles

    titles.forEach(title => {
        title.style.marginTop = "0px";
    })

    subList.forEach(subList => {
        subList.style.listStyleType = 'none';
        subList.style.paddingLeft = '0px';
    });

    subItems.forEach(subItem => {
        subItem.style.border = '1px solid #808080';
        subItem.style.borderRadius = '8px';
        subItem.style.width = '360px';
        subItem.style.height = '40px';
        subItem.style.paddingTop = '8px';
        subItem.style.paddingBottom = '8px';
        subItem.style.paddingLeft = '16px';
        subItem.style.paddingRight = '16px';
        subItem.style.marginBottom = '8px';
    });

    item.style.backgroundColor = '#f6f6fe';
    item.style.width = '392px';
    item.style.borderRadius = '8px';
    item.style.padding = '16px';
    item.style.marginBottom = '16px';

    
});

categoriesList.style.listStyleType = "none";




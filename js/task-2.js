'use strict';

const imagesArray = [
    {
        src: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        src: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        src: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        alt: 'Alpine Spring Meadows',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        alt: 'Nature Landscape',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        alt: 'Lighthouse Coast Sea',
    },
];

const imagesList = document.querySelector('.gallery');

imagesArray.forEach(imageData => {
    const newImage = document.createElement('img');

    newImage.src = imageData.src;
    newImage.alt = imageData.alt;

    const newListItem = document.createElement('li');
    newListItem.appendChild(newImage);

    imagesList.appendChild(newListItem);
});

// Styles

const images = document.querySelectorAll("img");

images.forEach(image => {
    image.style.width = "300px";
    image.style.height = "auto";
    image.style.margin = "10px";
})

imagesList.style.display = "flex";
imagesList.style.flexWrap = 'wrap';
imagesList.style.justifyContent = 'space-between';
imagesList.style.listStyleType = "none";



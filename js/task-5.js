function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const text = document.querySelector('.widget').querySelector("p");
const textColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', handleFunction);

function handleFunction() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}

// Styles

widget.style.width = "345px";
widget.style.height = "345px";
widget.style.border = '1px solid #4e75ff';
widget.style.borderRadius = '16px';
widget.style.display = 'flex';
widget.style.alightItems = 'center';
widget.style.justifyContent = 'center';
widget.style.flexDirection = 'column';

text.style.textAlign = "center"

changeColorButton.style.color = "#fff"
changeColorButton.style.backgroundColor = '#4e75ff';
changeColorButton.style.width = '148px';
changeColorButton.style.height = '40px';
changeColorButton.style.border = 'none';
changeColorButton.style.margin = '0 auto';
changeColorButton.style.borderRadius = '8px';

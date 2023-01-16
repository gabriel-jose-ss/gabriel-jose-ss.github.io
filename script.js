const btnAction = document.querySelector('#button-random-color');
const collorPallete = document.querySelector('#color-palette');
const input = document.querySelector('#board-size');
const buttonBoard = document.querySelector('#generate-board');
const pixelsBoard = document.querySelector('#pixel-board');

function generateColorAleatory() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generateTabel = () => {
  const tablePixel = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'pixels2';
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const cells = document.createElement('div');
      cells.className = 'pixel';
      lines.appendChild(cells);
    }
    tablePixel.appendChild(lines);
  }
};

generateTabel();
const salvegeColor = () => {
  const getItem = localStorage.getItem('colorPalette');
  const collorPallete2 = document.querySelector('#color-palette');
  collorPallete2.innerHTML = getItem;
};

const paintColor = () => {
  const colorBox = document.querySelectorAll('.color');
  for (let index = 0; index < colorBox.length; index += 1) {
    if (colorBox[index] === colorBox[0]) {
      colorBox[index].style.backgroundColor = 'black';
    } else {
      colorBox[index].style.backgroundColor = generateColorAleatory();
    }
  }
  localStorage.setItem('colorPalette', collorPallete.innerHTML);
};

btnAction.addEventListener('click', paintColor);

const selectedColor = () => {
  const colorBox = document.getElementsByClassName('color');
  for (let index = 0; index < colorBox.length; index += 1) {
    colorBox[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};

const saveArtLocal = () => {
  const pixel = document.querySelectorAll('.pixel');
  const array = [];
  for (let index = 0; index < pixel.length; index += 1) {
    array.push(pixel[index].style.backgroundColor);
    localStorage.setItem('pixelBoard', JSON.stringify(array));
  }
};

const colored = () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      pixel[index].style.backgroundColor = selected.style.backgroundColor;
      saveArtLocal();
    });
  }
};

const getArtLocal = () => {
  const getPixel = JSON.parse(localStorage.getItem('pixelBoard'));
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = getPixel[index];
  }
};

const clear = () => {
  const clearButton = document.querySelector('#clear-board');
  const pixel = document.querySelectorAll('.pixel');
  clearButton.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
};

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    paintColor();
  } else {
    salvegeColor();
  }

  if (localStorage.getItem('pixelBoard') === null) {
    colored();
  } else {
    getArtLocal();
  }

  selectedColor();
  colored();
  clear();
};

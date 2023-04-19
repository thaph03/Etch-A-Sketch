'use strict';
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const grid = document.querySelector('.grid');
const colorPicker = document.getElementById('colorPicker');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

//button affects function
const btnClickedAffect = function () {
  colorBtn.classList.add('active');
  colorBtn.addEventListener('click', () => {
    colorBtn.classList.add('active');
    rainbowBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
  });
  rainbowBtn.addEventListener('click', () => {
    rainbowBtn.classList.add('active');
    colorBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
  });
  eraserBtn.addEventListener('click', () => {
    eraserBtn.classList.add('active');
    colorBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');
  });
};

//function to make grids
const makeGrid = function (numSquares) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    //drag and change color

    if (colorBtn.classList.contains('active')) {
      square.addEventListener('mousemove', () => {
        square.style.backgroundColor = colorPicker.value;
      });
    } else {
      square.addEventListener('mousemove', () => {
        square.style.backgroundColor = 'blue';
      });
    }

    clearBtn.addEventListener('click', () => {
      square.style.backgroundColor = 'whitesmoke';
    });

    grid.appendChild(square);
  }
};

//adjust value along with the slider

const adjustSize = function () {
  makeGrid(sizeSlider.value);
  sizeSlider.addEventListener('input', () => {
    makeGrid(sizeSlider.value);
    sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
  });
};

const main = function () {
  btnClickedAffect();
  adjustSize();
};
main();

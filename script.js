'use strict';
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');

const eraserBtn = document.getElementById('eraserBtn');

const clearBtn = document.getElementById('clearBtn');

const btnClickedAffect = function () {
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
function generateSquares(numSquares) {
  const grid = document.querySelector('.grid');

  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }
}

generateSquares(2);

const main = function () {
  btnClickedAffect();
};
main();

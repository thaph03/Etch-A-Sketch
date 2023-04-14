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

const makeGrid = function (gridSize) {};

const main = function () {
  btnClickedAffect();
};
main();

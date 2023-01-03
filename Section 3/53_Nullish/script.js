'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
	elem.style.height = `${h ?? 200}px`; //работает только с null и undefined в отличии от ||
	elem.style.width = `${w ?? 400}px`;  //работает только с null и undefined в отличии от ||
}

changeParams(box, newHeight, newWidth);
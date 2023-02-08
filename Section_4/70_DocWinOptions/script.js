'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(width,height);

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display); //не получить псевдоэлементы но стили можнo;
//Computed стили из css, inline с js и пишуться в html самого тега;

console.log(document.documentElement.scrollTop);

// window.scrollBy(x,y)
// window.scrollTo(x,y)
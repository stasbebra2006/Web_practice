'use strict';

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	hearts = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
	wrapper = document.querySelector('.wrapper');


// console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for(let i = 0;i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue'
// } 

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был стас реал');

div.classList.add('black');
// document.querySelector('.wrapper').append(div);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]);

div.innerHTML = "<h1>Hello Stas<h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');



// hearts = wrapper.querySelector('.heart');
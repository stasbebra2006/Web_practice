'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// if(block) {
// 	console.log(block.textContent);
// }

console.log(block?.textContent);

console.log(1 + 3)


const userData = {
	name: 'Ivan',
	age: null,
	say: function() {
		console.log("ya eblan");
	}
};

userData.say();
userData.bruhbro?.();

// if(userData && userData.skills && userData.skills.js) {
// 	console.log(userData.skills.js);
// }

console.log(userData?.skills?.js);
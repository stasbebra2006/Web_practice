"use strict"



// let a = 5,
// 	b = a;

// b = b + 5;


// console.log(b);
// console.log(a);


// const obj = {
// 	a: 5,
// 	b: 1
// }

// const copy = obj; //Ссылка, а не копия
// copy.a = 10;

// console.log(copy);
// console.log(obj);


//Способы именно копии


function copy(mainOBj) {
	let objCopy = {};

	let key;
	for (key in mainOBj) {
		objCopy[key] = mainOBj[key];
	}


	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // с помощью функции созадли поверхночную копию, поэтому во вложеных структурах все равно значния передаются по ссылке

// console.log(newNumbers);
// console.log(numbers);





const add = {
	d: 17,
	e: 20
};

// console.log(Object.assign({numbers}, add));

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

//copyArrays

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ya eblan';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
	console.log(a)
	console.log(b)
	console.log(c)
}


const num = [2, 3, 7];

log(...num);


const array = ["a", "b"];

const newArray = [...array];


const q = {
	one: 1,
	two: 2
};


const newObj = { ...q };


//
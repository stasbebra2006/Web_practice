"use strict"

function createCounter() {
	let counter = 0;debugger

	const myFunction = function () {debugger
		counter = counter + 1;debugger
		return counter;
	}

	return myFunction;debugger
}



const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3)
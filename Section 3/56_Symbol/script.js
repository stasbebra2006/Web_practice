"use strict"

// // let id = Symbol("id");


// const obj = {
//     name: 'test',
//     [Symbol('id')]: 1,
//     // [id]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol("id");
// // obj[id] = 1;
// // console.log(obj[getId])

// // console.log(obj[id]); 

// // for (let value in obj) console.log(value);

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);


const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
}

//--------

myAwesomeDB.id = '1232';

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
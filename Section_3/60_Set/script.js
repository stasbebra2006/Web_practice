"use strict"

const arr = ['Alex', 'Anna', 'Alex', 'Oleg']

const set = new Set(arr);
console.log(set); //коллекция без повторений

set.add('порево с конями')
    .add('ladno bez poreva');
    
console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;
// for ( let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// })

console.log(set.values());
console.log(set.keys());
console.log(set.entries());

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));
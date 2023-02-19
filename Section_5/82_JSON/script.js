"use strict";

const persone = {
    name: 'stasbebra2006',
    tel: '+sasaaaaat',
    parents: {
        mom: 'Srat',
        dad: 'Bro'
    }
}; 

const clone = JSON.parse(JSON.stringify(persone));

console.log(JSON.stringify(persone));

clone.parents.mom = 'Ann';


console.log(persone);
console.log(clone);


'use strict'


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2020',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));



const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);


// console.log(typeof(Object.keys(user)[0]));


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});


// map.set(shops[0], 500)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);
 
console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;

// ----------------------
// const goods = [];

// for(let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }

// console.log(goods);
//-----------------------------





//--------------------------------
// for(let price of map.values()) {
//     console.log(price);
// }
//---------------------------------



//------------------------------------------
// for(let [shop,price] of map.entries()) {
//         console.log(price, shop);
//     }
//-------------------------------------------

//-------------------------------------------
// map.forEach((value, key, map) => {
//     console.log(key, value);
// })
//--------------------------------------------



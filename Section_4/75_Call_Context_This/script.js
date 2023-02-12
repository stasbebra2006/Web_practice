'use strict';

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b; 
    }
    console.log(sum());
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();



function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));


const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.background = 'red';
// });


btn.addEventListener('click', (e) => {
    e.target.style.background = 'red';
});



const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
    } 
        say();
    }
}

obj.sayNumber();

const double1 = a => a * 2;

console.log(double1(4));



//1) Обычная функция: this = windows, если стоит 'use strict', то будет undefinded;
//2) Контекст у методов обьекта сам обьект;
//3) this в коснтрукторах и классах - новый экземпляр объекта;
//4) Ручная привязка this: call, apply, bind;
//У стрелочной функции нет своего контекста візова, она его берет у своего родителя;



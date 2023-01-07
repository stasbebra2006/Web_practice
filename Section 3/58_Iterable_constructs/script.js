'use strict'

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2020',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

for(const key in user) {
    console.log(user[key]);
}

console.dir(user) //выводит в качесстве обьекта

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

for(const key of arr) {
    console.log(key);
}


const str = 'pornoPlatno';

for(const key in str) {
    console.log(str[key]);
}


//for in - при исполозовнии на масивах, обьектах, строках работает с каждой сущностью по порядку, которая является перечисляемой - enumerable
//не обязательно по порядку - не испольлззовать на масивах и строках arr[key]; - получает ключ

//for of - проходится по значениям обьектов - key - сразу предается значение
//обьекты в которых можно это использовать называются "итеррируемые", have special hidden symbol iterator


const salaries = {
    john: 500,
    ivan: 100,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function () {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current}
            } else {
                return {done: true};
            }

            // {done: true, value: 123}
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }
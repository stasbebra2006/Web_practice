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

// Object.defineProperty(user, 'birthday',{value: prompt('Date?'), enumerable: true, configurable: true});


console.log(Object.getOwnPropertyDescriptor(user, birthday));


Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for(let key in user) console.log(key)

Object.defineProperties(user, {
    name: {writable:false},
    surname: {writable:false}
})




// user.name = 'cock'; не работает
//writable: свойство в обьекте можно изменить(true, false)
//enumerable: свойство будет перечисляться в циклах(true, false)
//configurable: свойство можно удалить а атрибуты изменить(true, false)
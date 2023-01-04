'use strict';


const boxesQuery = document.querySelectorAll('.box'); // делает слепок который в последсвии не изменяется 
const boxesGet = document.getElementsByClassName('box'); //делает список, который изменяется динамически(живая коллекция get)
//--------------------------------------------------------------------------------------------------------------------------

boxesQuery.forEach(box => {
    if(box.matches('.this')) console.log('This one');
})


console.log(boxesQuery[0].closest('.wrapper'));










//--------------------------------------------------------------------------------------------------------------------------

boxesQuery[0].remove(); //эти методы взаемодействуют только с ДОМ-структурой и не затрагивают сам список
boxesGet[0].remove(); // эта структура постоянно отслеживает положение на странице и будет выводить конечную обстановку


for(let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    // boxesGet[boxesGet.length] = div; - такие коллекции не имеют подобных функций
}


console.log(boxesQuery);
console.log(boxesGet);
// console.log(document.body.children);
//(верстка, коллекция)


console.log(Array.from(boxesGet));
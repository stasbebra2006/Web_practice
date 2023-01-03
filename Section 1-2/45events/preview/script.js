"use strict"

const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('button');
const link = document.querySelector('a');
// btn.onclick = () => {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');     //callback функция всегда после и поэтому все хорошо
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // console.log(e.currentTarget);
//     i++;
//     if(i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
}


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});




// btn.removeEventListener('click', deleteElement);

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
})


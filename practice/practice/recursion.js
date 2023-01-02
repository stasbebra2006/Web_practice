"use strict"



// function  pow(x, n) {
//     let result = 1;
//     for(let i = 0; i < n; i++)
//     {
//         result *= x; 
//     }

//     return result;
// }


function pow(x, n) {// n глубина рекурсии
    if(n === 1) return x; else { // база рекурсии
        return x * pow(x, n-1); // шаг рекурсии
    }
}


const x = 5, n = 3;


console.log(pow(x,n));
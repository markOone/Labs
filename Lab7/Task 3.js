'use strict';

const array = [1, 2, 1, 1, 3, 4, 5, 5];

function unique(array){
    const uniqueSet = new Set(array);
    return [...uniqueSet];
}

console.log(unique(array))
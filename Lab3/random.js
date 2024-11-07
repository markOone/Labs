'use strict';

function random(max){
    let result = Math.random() * 50;
    result = Math.floor(result);
    return result;
}

console.log(random(50));
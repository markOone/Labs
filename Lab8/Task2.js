'use strict';

function store(value){
    return function(){
        return value;
    }
}

const read = store(5);
const value = read();
console.log(value);
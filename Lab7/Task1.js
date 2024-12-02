'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, element){
    for(let i = 0; i < array.length; i++){
        if(array[i] == element){
            array.splice(i, 1);
        }
    }
}

removeElement(array, 5);
console.log(array);

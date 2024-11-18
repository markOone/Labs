'use strict';

function array(){
    let arr = [];

    return{
        push(value){
            arr.push(value);
        },
        pop(){
            return arr.pop();
        },
        get(value){
            return arr[value];
        }
    }
}

const arr = array();

arr.push("first");

console.log(arr.get(0));//first
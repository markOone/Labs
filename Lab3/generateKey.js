'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let char = [];
    let resultArr = [];
    let result;

    for(let i = 0; i < characters.length; i++)
    {
        char.push(characters.substr(i, 1));
    }

    for(let i = 0; i < length; i++)
    {
        resultArr.push(char[Math.floor(Math.random() * (resultArr.length))]);
    }
    
    result = resultArr.join("");
    result.replace(",", " ");
    return result;
}

console.log(generateKey(16, characters));
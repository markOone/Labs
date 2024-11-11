'use strict';

function sum(...args)
{
    let result = 0;
    let i = 0;
    do{
        result += args[i++];
    }
    while(i < args.length)

    return result;
}

console.log(sum(1, 2, 3));
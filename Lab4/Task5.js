'use strict';

function sum(...args)
{
    return args.reduce((total, nextElement) => total + nextElement);
}

console.log(sum(1, 2, 3));
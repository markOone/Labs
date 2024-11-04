'use strict';

function rangeOdd(start, end)
{
    let array = [];

    for(let i = start; i <= end; i++)
    {
        if(i % 2 !== 0)
        {
            array.push(i);
        }
    }

    return array;
}

console.log(rangeOdd(15, 30));
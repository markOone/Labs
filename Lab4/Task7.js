'use strict';

const exampleObject = {
    petlura: {born: 1879, died: 1926},
    skorop: {born: 1873, died: 1945},
    hrush: {born: 1866, died: 1934},
    vynnych: {born: 1880, died: 1951},
};

function checkLength(object)
{
    let resultObject = {};
    for(const person in object)
    {
        const personData = object[person];
        resultObject[person] = { lived : Number(personData.died) - Number(personData.born) };
    }

    return resultObject;
}

console.table(checkLength(exampleObject));
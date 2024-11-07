'use strict';

function inspectObj(obj){
    const result = [];

    for(const key in obj)
    {
        if(typeof obj[key] === 'function')
        {
            const args = obj[key].length;
            result.push([key, args]);
        }
    }

    return result;
}

const exampleObj = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
};

const result = inspectObj(exampleObj);
console.table(result);
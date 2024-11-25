'use strict';

const pipeRight = (...fns) => {
    const errors = [];
  
    const composed = (x) => {
      try {
        return fns.reduceRight((acc, fn) => fn(acc), x);
      } catch (error) {
        errors.push(error);
        return undefined;
      }
    };
  
    composed.on = (event, callback) => {
      if (event === 'error' && typeof callback === 'function') {
        errors.forEach(callback);
      }
    };
  
    return composed;
  };

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
 
const f = pipeRight(inc, twice, cube);
const x = f(5);

console.log(x);
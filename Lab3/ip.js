'use strict';

function ipToNumber(ip = '127.0.0.1'){
    const bytes = ip.split('.').map(Number);

    return bytes.reduce(function(acc, byte, index){
        return acc + (byte << (8 * (3 - index)));
    }, 0);
}

console.log(ipToNumber('192.108.0.1'));
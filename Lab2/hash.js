'use strict';

const phoneBook =  {
    "Mark": "+380943837589",
    "Edward": "+380754937548"
};

function findPhoneByName(name){
    return phoneBook[name];
}

console.log(findPhoneByName("Mark"));
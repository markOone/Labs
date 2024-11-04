'use strict';

let array = [];

function Object(name, phone){
    this.name = name;
    this.phone = phone;
}

array = [
    new Object("Mark", "+380123321123"),
    new Object("Pawlo", "+380654123890"),
    new Object("Oleksa", "+380943432934")
]

function findPhoneByName(name){
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].name == name)
        {
            return array[i].phone;
        }
    }
}

console.log(findPhoneByName("Mark"));
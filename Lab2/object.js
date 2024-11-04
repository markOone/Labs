'use strict';

function fn()
{
    const object1 = {
        name: "Mark"
    };

    let object2 = {
        name: "Edward"
    };

    object1.name = "Mark2";
    object2.name = "Edward2";

    //object 1 = {name: "Mark3"}; - const cant be changed
    object2 = {name: "Edward3"};
}
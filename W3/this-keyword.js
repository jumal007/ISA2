/* let car = {
    make: 'bmw', 
    model: "745li",
    year: 2010,
    getPrice: function () {
        return 5000;
    }, 
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    },
}
car.printDescription(); */
/* 
function first(){
    return this;
}

console.log(first() === global); */

/* function second(){
    'use strict';
    return this;
}

console.log(second()===global);
console.log(second()===undefined );*/

/* let myObject = {value: 'Myobject'};
global.value = 'Global object';

function third (name){
    return this.value + name;
}

console.log(third());
console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob'])); */

function fifth(){
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 ={
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}
let customer2 ={
    firstName: 'ilja',
    lastName: 'freiberg',
    print: fifth
}
customer2.print();
customer1.print();
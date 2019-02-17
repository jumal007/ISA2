/*
function sayHello() {
    console.log('_____________');
    console.log('hello!');
    console.log('_____________');
}

sayHello();
let a = sayHello;
a();
*/

function sayHello(name) {
    console.log('_____________');
    console.log('hello '+ name + '!');
    console.log('_____________');
}

sayHello('ilja');

function calculateTax(amount)  {
    let result = amount * 0.0825;
    return result;
}

console.log('Your tax is ' + calculateTax(125,34));
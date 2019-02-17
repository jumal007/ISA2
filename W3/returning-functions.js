/* не делать так 
var myVar = 'i`m the global scope';
и тем более так
var nuFunct = function(){
    console.log('me too!');
}
*/
function one (){
    return 'one';
}
let value = one;
console.log(value());
value()

function two(){
    return function (){
        console.log('two');
    }
}
let myFunct = two();
myFunct(); 

function three() {
    return function () {
        return 'three';
    }
}
console.log(three()());
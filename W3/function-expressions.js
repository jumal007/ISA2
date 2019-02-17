/*
setTimeout(function () {
        console.log('i waited 4 seconds')
    }, 4000);
*/

let counter = 0; 
function timeout(){
    setTimeout(function (){
        console.log('hi ' +counter++);
        timeout()
    }, 2000)
}

//timeout();

(function() {
    console.log('Immediately Invoked Function Expression(IIFE)');
})();
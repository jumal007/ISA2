/* let name = 'bob';
console.log(`hi ${name}`);
let sentence = `Get the details on the "this" keyword, which causes a lot of confusion for JavaScript
 developers. Listen as Bob explains what this mysterious object is and how to bend it to your will.`;
 console.log(sentence); */

 function getReasonCount(){ return 1;}
 let interpolation = `Give me ${(getReasonCount() == 1) ? `one good reason`: `a few reasons`} to try this`;
 console.log(interpolation);
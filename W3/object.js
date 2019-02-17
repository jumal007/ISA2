let car = {
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
car.printDescription();
console.log(car.year);
//console.log(car['year']);
//DON`T DO IT
//console.log(car[1]);
var anotherCar = {};
anotherCar.whatever = 'Bob';
console.log(anotherCar.whatever);

var a = {
    myProperty: {b: 'hi'}
};
console.log(a.myProperty.b);

var c ={
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
}
console.log(c);

let carLot= [
    {year: 2017, make: 'Toyota', mode: '4Runner'},
    {year: 2015, make: 'BMW', mode: '528i'},
    {year: 1882, make: 'Buick', mode: 'Skylark'}
]
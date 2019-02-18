let originalcar = {
    make: 'bmw', 
    model: '745li',
    year: 2010
}
let newCar = Object.create(originalcar);
console.log(Object.getPrototypeOf(newCar));
let myPrototype = Object.getPrototypeOf(newCar);
originalcar.doors = '4';
originalcar.model = '545d';
console.log(newCar.doors);
function Car(make,model,year) {  
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '745li', 2010);
console.log(myCar);
function MyFunction(){
    console.log('I`m simple function');
}

let myFunction = new MyFunction();

console.log(typeof myFunction);
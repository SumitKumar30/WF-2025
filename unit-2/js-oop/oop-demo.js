// Prototype Inheritance Example

// ways to create objects in JavaScript

// 1. fucntion constructor
// 2. ES6 classes - sugar coating over function constructor
// 3. Object.create()


// Function Constructor --> you cannot use arrow function here

// 1. Function Constructor using default function syntax
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }


// 2. Function Constructor using function expressions syntax
const Person = function(name, age) {
    // console.log(this); // {}
    this.name = name;
    this.age = age;

    // adding method to the object
    // this.calAgeInDays = function() {
    //     return this.age * 365;
    // }
}

// create an object using 'new' keyword
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

console.log(alice);
console.log(bob);

// adding method to the prototype of Person
Person.prototype.calAgeInDays = function() {
    return this.age * 365;
}

console.log(alice.calAgeInDays());
console.log(bob.calAgeInDays());


console.log(alice.__proto__ === Person.prototype); // true
console.log(bob.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(alice)); // true
console.log(Person.prototype.isPrototypeOf(bob)); // true

console.log(alice instanceof Person); // true
console.log(bob instanceof Person); // true



// const arr = [2, 4, 6, 8]; // new Array() --> Array is a function constructor

// console.log(arr);

// ES6 Classes
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // normal class methods will be added to the prototype
    getCarInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }   
    age(currentYear) {
        return currentYear - this.year;
    }

    // static method - cannot be inherited
    static honk() {
        return 'Beep Beep!';
    }
}

const myCar = new Car('Toyota', 'Camry', 2015);
console.log(myCar);
console.log(myCar.getCarInfo());
console.log(myCar.age(2024));
console.log(Car.honk()); // static method called on the class itself


// Object.create()
const animalProto = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

// create a new object with animalProto as its prototype
const dog = Object.create(animalProto);
dog.name = 'Rex';
dog.speak(); // Rex makes a noise.

const cat = Object.create(animalProto, {
    name: { value: 'Whiskers' },
    speak: {
        value: function() {
            console.log(`${this.name} meows.`);
        }
    }
});
cat.speak(); // Whiskers meows.



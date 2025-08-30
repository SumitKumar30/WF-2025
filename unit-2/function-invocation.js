// Invoking functions - different ways to call functions in JavaScript
// 1. Regular function call
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5

// 2. Method call (function as an object property)
const calculator = {
    multiply: function(a, b) {
        return a * b;
    }
};

console.log(calculator.multiply(4, 5)); // 20

 var calculator2 = {  // An object literal
    operand1: 1,
    operand2: 1,
    add: function() {
        // Note the use of the this keyword to refer to this object.
        this.result = this.operand1 + this.operand2;
    }
 };
 calculator2.add();       // A method invocation to compute 1+1.
 calculator2.result    // => 2

// 3. Using call() method
function subtract(a, b) {
    return a - b;
}

console.log(subtract.call(null, 10, 4)); // 6

// 4. Using apply() method
console.log(subtract.apply(null, [10, 4])); // 6

// 5. Using bind() method
const double = add.bind(null, 2);

console.log(double(5)); // 7

// 6. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This function runs immediately upon definition!');
})();   

// 7. Using setTimeout to invoke a function after a delay
setTimeout(function() {
    console.log('This message is shown after 2 seconds');
}, 2000);   


// 8. Using setInterval to invoke a function repeatedly at specified intervals
let count = 0;
const intervalId = setInterval(function() {
    count++;
    console.log(`This message is shown every second. Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stop after 5 times
    }
}, 1000);

// 3. constructor invocation
function Person(name, age) {    
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', 30);
console.log(person1.name); // John

const person2 = new Person('Jane', 25);
console.log(person2.age); // 25

console.log(typeof Person); // function
console.log(typeof person1); // object
console.log(typeof person2); // object

// another example of constructor invocation
function Car(make, model) {
    this.make = make;
    this.model = model;
}   

const car1 = new Car('Toyota', 'Corolla');
console.log(car1.make); // Toyota   
const car2 = new Car('Honda', 'Civic');
console.log(car2.model); // Civic
console.log(typeof Car); // function
console.log(typeof car1); // object 
console.log(typeof car2); // object




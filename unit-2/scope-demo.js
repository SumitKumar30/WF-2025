// Scopes in javascript

// Global Scope
var globalVar = "I am a global variable";

function checkScope() {
    // Local Scope
    var localVar = "I am a local variable";

    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

checkScope();
console.log(globalVar); // Accessible
// console.log(localVar);  // Unaccessible, will throw an error

// Block Scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible
}

// console.log(blockVar); // Unaccessible, will throw an error

// Function Scope
function functionScope() {
    var funcVar = "I am a function-scoped variable";
    console.log(funcVar); // Accessible
}
functionScope();
// console.log(funcVar); // Unaccessible, will throw an error

// Demonstrating 'this' keyword in different contexts
console.log(this); // In global context, refers to the global object (window in browsers)

const obj = {
    name: "JavaScript Object",
    showThis: function() {
        console.log(this); // Refers to the obj
    }   
};
obj.showThis();

// Arrow function and 'this'
const arrowFunc = () => {
    console.log(this); // In arrow functions, 'this' refers to the enclosing context
};

arrowFunc();

obj.arrowMethod = arrowFunc;
obj.arrowMethod(); // Still refers to the enclosing context, not obj

// Nested Functions and Scope Chain
function outerFunction() {
    var outerVar = "I am from outer function";

    function innerFunction() {
        var innerVar = "I am from inner function";
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }

    innerFunction();
    // console.log(innerVar); // Unaccessible, will throw an error
}

outerFunction();
// console.log(outerVar); // Unaccessible, will throw an error

// Closures and Scope
function makeCounter() {
    let count = 0; // count is a private variable

    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const anotherCounter = makeCounter();
console.log(anotherCounter()); // 1, separate instance
console.log(anotherCounter()); // 2
console.log(counter()); // 4, original instance
console.log(anotherCounter()); // 3, separate instance
console.log(counter); // [Function (anonymous)]
console.log(typeof counter); // function
console.log(counter()); // 5
console.log(anotherCounter()); // 4

// Demonstrating var, let, and const
function varLetConst() {
    if (true) {
        var varVariable = "I am a var variable"; // Function scoped
        let letVariable = "I am a let variable"; // Block scoped
        const constVariable = "I am a const variable"; // Block scoped
        console.log(varVariable); // Accessible
        console.log(letVariable); // Accessible
        console.log(constVariable); // Accessible
    }
    console.log(varVariable); // Accessible
    // console.log(letVariable); // Unaccessible, will throw an error
    // console.log(constVariable); // Unaccessible, will throw an error
}

varLetConst();
// console.log(varVariable); // Unaccessible, will throw an error
// console.log(letVariable); // Unaccessible, will throw an error   
// console.log(constVariable); // Unaccessible, will throw an error

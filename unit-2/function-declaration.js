// Different ways to declare functions in JavaScript
// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function Expression
const farewell = function(name) {
    return `Goodbye, ${name}!`;
}

// 3. Arrow Function
const thankYou = (name) => {
    return `Thank you, ${name}!`;
}

// 4. Concise Arrow Function
const welcome = name => `Welcome, ${name}!`;

// Testing the functions
console.log(greet('Alice'));        // Hello, Alice!
console.log(farewell('Bob'));       // Goodbye, Bob!    
console.log(thankYou('Charlie'));   // Thank you, Charlie!
console.log(welcome('Diana'));      // Welcome, Diana!


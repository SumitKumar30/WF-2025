// Basic async code example
console.log("I've finished task A that is to mix all the ingredients of the cake");

setTimeout(() => {
  console.log("I've finished task B that is to bake the cake");
}, 2000);

console.log("I've finished task C that is to make the cold Coffee");

// output will be:
// I've finished task A that is to mix all the ingredients of the cake
// I've finished task C that is to make the cold Coffee
// I've finished task B that is to bake the cake

// =================================================================

// Async code example with nested functions
// Note: The order of output may vary due to the asynchronous nature of setTimeout
// Output will be:

var beta = function() {
   console.log("Entered beta!");
   setTimeout(function () {
       console.log("Inside beta!");
   }, 2000);
   console.log("Exited beta!");
}

var alpha = function () {
   console.log("Entered alpha!");
   setTimeout(function() {
       beta();
   }, 2000);
   console.log("Exited alpha!");
}

alpha();

// output will be:
// Entered alpha!
// Exited alpha!
// Entered beta!
// Exited beta!
// Inside beta!

// =================================================================

// SetTimeout syntax
// setTimeout(function, milliseconds);

// setTimeout example

setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);


// =================================================================
// SetInterval syntax
// setInterval(function, milliseconds); 

// setInterval example
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`This message is shown every 2 seconds. Count: ${count}`);  
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 executions
    }   
}, 2000);

// =================================================================
// Callback function => A callback is a function passed as an argument to another function.

// Callback function - simple example 
function sum(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

// callback function --> operation is a callback function passed to calculator as parameter

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculator(10, 5, sum));       // Output: 15
console.log(calculator(10, 5, multiply));  // Output: 50
console.log(calculator(10, 5, subtract)); // Output: 5
console.log(calculator(10, 5, divide));    // Output: 2


// passing callback function as an anonymous function

let add = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

add(function() {
    console.log("Finished this operation!");
});

const subtract = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

subtract(function() {
    console.log("Finished this operation!");
});

const multiply = (callback) => {
    let x = 2, y = 3;
    console.log("Product :", x * y);
    callback();
}

multiply(function() {
    console.log("Finished this operation!");
});

// output will be:
// Sum : 5
// Finished this operation!
// Difference : -1
// Finished this operation!
// Product : 6
// Finished this operation!


// Callback can be written as independent function and passed as parameter

let sum = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

const diff = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

const displayCompletion = () => {
    console.log("Finished this operation!");
}

sum(displayCompletion);
diff(displayCompletion);

// output will be:
// Sum : 5
// Finished this operation!
// Difference : -1
// Finished this operation!

// =================================================================
// Callback function with asynchronous code example 

let name2;

const getName = () => {
   // get data from database
   setTimeout(() => {
       name2 = "Samarth";
   }, 2000); 
}

const greet = () => {
   console.log(`Hello ${name2}`);
}

getName();
greet();

// output will be:
// Hello undefined

// To fix the above issue, we can use callback function

let name3;
const getName2 = (callback) => {
   // get data from database
   setTimeout(() => {
       name3 = "Samarth";
       callback();
   }, 2000); 
}

const greet2 = () => {
   console.log(`Hello ${name3}`);
}
getName2(greet2);

// output will be:
// Hello Samarth


// passing an argument to callback function
let name4;
const getName3 = (callback) => {
   // get data from database
    setTimeout(() => {
         name4 = "Samarth";
            callback(name4);
    }, 2000);
}
const greet3 = (name) => {
    console.log(`Hello ${name}`);
}
getName3(greet3);

// output will be:
// Hello Samarth

// =================================================================
    
// callback hell example
setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            setTimeout(() => {
                console.log("4");
                setTimeout(() => {
                    console.log("5");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// output will be:
// 1
// 2
// 3
// 4
// 5


// CALLBACK HELL
// function to fetch details of user in Student Management System
const fetchUserDetails = (username, password, callback) => {
    database.authenticateUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error);
        } else {
            database.getRoles(userInfo, (error, rolesInfo) => {
                if (error) {
                    callback(error);
                } else {
                    database.getPermissions(rolesInfo, (error, permissionsInfo) => {
                        if (error) {
                            callback(error);
                        } else {
                            callback(null, userInfo, rolesInfo, permissionsInfo);
                        }
                    });
                }
            });
        }
    });
}

const callback = (error, userInfo, rolesInfo, permissionsInfo) => {
    // some code here
}

fetchUserDetails("john_doe", "password123", callback);

// output will be:
// Error: Invalid username or password
// or
// User Info: { name: 'John Doe', email: ' ' }




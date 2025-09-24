// Async & Await

// The 'async' and 'await' keywords were introduced in ES8 (ES2017) and are internally based on promises but make the code even more readable than promises.

// when 'async' is prepended to a function, it returns a promise implicitly

// Example 1

async function hello() {
  return "Hello";
}
const p = hello();
console.log(p instanceof Promise); // true

// consuming promise
p.then(console.log);               // "Hello"


// Example 2

let foo = async () => Promise.resolve("Amit Srivastava");
foo().then(val => alert(val));

// output will be:
// Amit Srivastava (inside the alert box)


// The 'await' keyword makes the code wait until the promise is either resolved or rejected.
// 'await' makes asynchronous code look synchronous

// Example

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function run() {
  console.log("Start");
  await delay(2000); // pause for 2 seconds
  console.log("After 2 sec");
}
run();

// 'await' only works inside an async function.

// CASE A: When the promise is RESOLVED

// defining the promise object with the producer
let namePromise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});



// defining the async function which waits for the promise to be resolved / rejected
const getName = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

getName();

// output will be:
// Getting name from DB...
// Name received from DB = Srishti


// CASE A: When the promise is REJECTED

// defining the promise object with the producer
let namePromise2 = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Error getting name!"));
    }, 3000);
});


// defining the async function which waits for the promise to be resolved / rejected
const getName2 = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

getName2();

// Output will be:
// Getting name from DB...
// Error: Error getting name!
//     at setTimeout


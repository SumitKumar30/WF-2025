// Issue with callback hell
// 1. difficult to read and maintain
// 2. difficult to debug
// 3. difficult to handle errors
// 4. difficult to manage multiple asynchronous operations

// Examples of callback hell 

// Imagine fetching user data, then fetching posts of that user, then comments of the first post:

getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// output will be:
// [ { id: 1, postId: 1, content: 'Great post!' },
//   { id: 2, postId: 1, content: 'Very informative.' } ]

/*👉 Problem:

Code is nested like a pyramid.

Hard to add error handling — every level needs its own if (err).

Hard to reuse parts.

*/


// Promises in JS

// A promise is an object which makes the result produced by the producer code available to the consumer code, 
// thereby linking them together.

// syntax of promise object
let promiseObj = new Promise((resolve, reject) = {
  // write the producing code
});



// Example code of instantiating promise
let promiseObj2 = new Promise((resolve, reject) => {
  console.log("Producing code is executed automatically as soon as the promise object is created!");
});

/* Promise object has two properties (in its prototype):
  1. status: pending
  2. value: undefined

  These are internal properties which cannot be directly accessed.
*/

console.log(promiseObj2);


/*
  PRODUCER => Result ==> Success or Error 

  if success ==> resolve() will be called
    else
      in case of errpr ==> reject() will be called

  
  resolve(val) is called:

    status = resolved
    value = val

  reject(err) is called:

    status = rejected
    value = err

*/



// creating promise with producer
let promiseObj3 = new Promise((resolve, reject) => {
  console.log("Getting name from DB...");
  setTimeout(() => {
    resolve("Amit");
  }, 3000);
});

console.log(promiseObj3); // check the status and value properties


let promiseObj4 = new Promise((resolve, reject) => {
  console.log("Getting name from DB...");
  setTimeout(() => {
    reject(new Error("Error getting name from DB!"));
  }, 3000);
});

console.log(promiseObj4); // check the status and value properties

// expected output:

/*
Getting name from DB...
Promise {<rejected>: Error: Could not get the name from DB!
    at setTimeout}
    __proto__: Promise
    [[PromiseStatus]]: "rejected"
    [[PromiseValue]]: Error: Could not get the name from DB! at setTimeout
Uncaught (in promise) Error: Could not get the name from DB!
    at setTimeout
*/


// You can either resolve a promise or reject it

let promiseObj5 = new Promise((resolve, reject) => {
  console.log("Getting name from DB...");
  setTimeout(() => {
    resolve("Amit");
    reject(new Error("Error getting name from DB!"));
  }, 3000);
});

console.log(promiseObj5);     // first callback will be set => this case it'll be resolved


// Practice Question
/*
  Getting Email from Server - I
Description
You are required to get the email of the currently logged-in user from the server. 
In order to mock the functionality of getting it from the server, you can use the setTimeout() method and 
assume that the email will be returned as a response after 2 seconds.

Implement this using a promise and in the producing code, 
resolve the promise while sending in the received email as the argument to the resolve callback.

*/



// Consumers
/*
   there are two types of consumer code, which are as follows:

1.       then() method => accepts 2 arguments (resolve, reject) => resolve and reject are itself callback functions

2.      catch() method => accepts 1 argument (reject)

*/

// Syntax of .then() method

promiseObj.then(successCallback, errorCallback);

promiseObj.then((parametersToHoldArgumentsPassedWhenPromiseIsResolved) => {
  // code to be executed when the promise is resolved
}, (parametersToHoldArgumentsPassedWhenPromiseIsRejected) => {
  // code to be executed when the promise is rejected
});


promiseObj.then((val)=> {
  // code to be executed when the promise is resolved
}, (err) => {
  // code to be executed when the promise is rejected
});


// Example

// defining the promise object with the producer

// CASE A: When the promise is RESOLVED

let promiseObj6 = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);

});

// defining the consumer
promiseObj6.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});

// Output will be:

// Getting name from DB....
// Name received from DB = Amit Srivastava


// In a similar way, you can reject the promise as well

// CASE B: When the promise is REJECTED

// defining the promise object with the producer
let promiseObj7 = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Error getting name!"));
    }, 3000);

});

// defining the consumer
promiseObj7.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});


// Practice Question

/*
You are required to get the email of the currently logged-in user from the server.  
Initially, the message should be printed as 'Getting email from server...' to the console. 
In order to mock the functionality of getting it from the server, you can use the setTimeout() 
method and assume that the email will be returned as a response after 2 seconds.

Implement this using a promise and in the producing code, 
resolve the promise while sending in your email as the string argument.

Now, in the consumer code, you need to use a then() method and you need to print the email 
received as an argument to the console.

The output on the console should be:
Getting email from server...
Email = amit.srivastava@google.com

*/


// Syntax of .catch() method

promiseObj8.catch(errorCallback);

promiseObj8.catch((parametersToHoldArgumentsPassedWhenPromiseIsRejected) => {
  // code to be executed when the promise is rejected
});

promiseObj8.catch((err) => {
  // code to be executed when the promise is rejected
});

// Example
// promise obj with the producer
let promiseObj8 = new Promise((resolve, reject)=> {
  console.log("Getting name from DB....");
  setTimeout(() => {
    reject(new Error('Could not get the name from DB!'));
  }, 2000);
});

// consumer - catch() method
promiseObj8.catch((err) => {
  console.log(`Error occurred = ${err}`);
});


// Two ways to use the Consumer
/*
  .then(resolve, reject) only
            OR
  .then(resolve) => .catch(err)

*/

// What if you've two error handlers? 


// Practice Question
/*

You  are required to create a promise object which has the producer code that uploads an image to the server.
Notice that you do not have to actucally upload an image to the server, rather, you just need to mock the functionality. You can use the setTimeout() method
for this purpose and set the timer for, let's say, 4 seconds.

Also, define the consumer methods by using bothe the approaches that we have discussed - using then() method having two callbacks and using a then() method have a single callback and then having a catch().

*/
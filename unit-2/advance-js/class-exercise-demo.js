// Q1. Countdown Timer (setInterval + clearInterval)

let time = 10;
const id = setInterval(() => {
  console.log(`Remaining: ${time}s`);
  if (time === 0) {
    console.log("Time’s up!");
    clearInterval(id);
  }
  time--;
}, 1000);

// output will be:
// Remaining: 10s
// Remaining: 9s
// Remaining: 8s
// Remaining: 7s
// Remaining: 6s
// Remaining: 5s    
// Remaining: 4s
// Remaining: 3s
// Remaining: 2s
// Remaining: 1s
// Remaining: 0s
// Time’s up!

// =================================================================

// Q2. Food Ordering Simulation (setTimeout + callback)

function notifyCustomer(msg) {
  console.log(`Notifying customer: ${msg}`);
}

console.log("Order placed for Pizza");

setTimeout(() => {
  console.log("Pizza is being prepared...");
  setTimeout(() => {
    const msg = "Pizza is ready for delivery";
    console.log(msg);
    notifyCustomer("Your pizza is ready!");
  }, 3000); // total ~5s from start
}, 2000);

// output will be:
// Order placed for Pizza
// (after 2 seconds) Pizza is being prepared...
// (after 3 more seconds) Pizza is ready for delivery
// Notifying customer: Your pizza is ready!


// =================================================================

// Q3. Traffic Light (Sync vs Async)

// Synchronous version
console.log("Red");
console.log("Green");
console.log("Yellow");
console.log("Red");

// output will be:
// Red
// Green
// Yellow
// Red

// Asynchronous version
let colors = ["Red", "Green", "Yellow"];
let index = 0;
setInterval(() => {
  console.log(colors[index]);
  index = (index + 1) % colors.length;
}, 2000);

// output will be:
// Red
// (after 2 seconds) Green
// (after 2 more seconds) Yellow
// (after 2 more seconds) Red
// (and so on...)


// =================================================================


// Q4. Weather Fetch Simulation (callback + setTimeout)

function getWeather(city, callback) {
  console.log("Fetching weather data...");
  setTimeout(() => {
    const data = { city, tempC: 28, cond: "Sunny" };
    callback(data); // hand result to UI layer
  }, 2000);
}

getWeather("Delhi", (data) => {
  console.log(`Weather: ${data.tempC}°C, ${data.cond}`);
  console.log(`UI updated with weather: ${data.tempC}°C, ${data.cond}`);
});

// output will be:
// Fetching weather data...
// (after 2 seconds) Weather: 28°C, Sunny
// UI updated with weather: 28°C, Sunny

// =================================================================

// Q5. Validate username and password using callback

/*
TODO 1: 
A. Define a function with identifier getUsername
B. Inside this function, print the message "Getting username..." to the console
C. Write a setTimeout() function with a delay of 3 seconds to mock getting the username from the user
(you need to assign value 'srishti' to the username inside the setTimeout() function)
D. Print the username to the console, as shown in the Problem Statement
E. Call the callback function validateUsername() while passing in the username as the argument to it
*/




const getUsername = () => {
    console.log("Getting username...");
     setTimeout(() => {
        let name = "srishti";
        console.log("Username = ",name);
        validateUsername(name);
 }, 3000);
};

/*
TODO 2: 
A. Define a function with identifier validateUsername
B. Inside this function, print the message "Validating username..." to the console
C. Validate the username passed to this function as the argument
(A username is VALID when it is not undefined and null and an empty string)
D. If the username is valid, print the message "Valid Username!" on the console and call the callback function passed in the argument
E. If the username is not valid, print the message "Invalid Username! Please try again!"
*/





const validateUsername = (name) =>{
    console.log("Validating username...");
    if(name !== null || name !== undefined || name !== " " ){
        console.log("Valid Username!");
        callback(name);            
    }
    else{
        console.log("Invalid Username! Please try again!");
    }
}

/*
TODO 3: 
A. Define a function with identifier getPassword
B. Inside this function, print the message "Getting password..." to the console
C. Write a setTimeout() function with a delay of 3 seconds to mock getting the password from user
(you need to assign value 'upgrad' to the password inside the setTimeout() function)
D. Print the password to the console, as shown in the Problem Statement
E. Call the callback function validatePassword() while passing in the password as the argument to it
*/







const getPassword = () => {
    console.log("Getting password...");
    setTimeout(() => {
        let password = "upgrad";
        console.log("Password = ",password);
        validatePassword(password);
    }, 3000);
}

/*
TODO 4: 
A. Define a function with identifier validatePassword
B. Inside this function, print the message "Validating password..." to the console
C. Validate the password passed to this function as the argument
(A password is VALID when it is not undefined and null and an empty string)
D. If the password is valid, print the message "Valid Password!" on the console and call the callback function passed in the argument
E. If the password is not valid, print the message "Invalid Password! Please try again!"
*/







const validatePassword = (password) =>{
    console.log("Validating password...");
    if(password !== undefined && password !== null && password !== " "){
        console.log("Valid Password!");
        callback(password);
    }
    else{
        console.log("Invalid Password! Please try again!");
    }
}

/*
TODO 5: Define a function with identifier done which logs the message "BOTH VALID!" on the console
*/
const done = () => {
    console.log("BOTH VALID!");
}

/*
TODO 6: 
A. Define a function with identifier login
B. Inside the login() function, call the getUsername() function
C. Pass validateUsername() function with username argument as the callback function inside the getUsername() function
D. Pass getPassword() function as the callback function inside the validateUsername() function
E. Pass the validatePassword() function with password argument as the callback function inside the getPassword() function
F. Pass the done() function as the callback function inside the validatePassword() function
*/








const login = () => {
    getUsername( () => {
        validateUsername(name => {
            getPassword(() => {
                validatePassword(password => {
                    done();
                })
            })
        })
    });
}


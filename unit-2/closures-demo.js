function greet() {
	var greeting = "Hi";
	return function(name) {
		console.log(greeting + " " + name);
	}
}

var sayHello = greet();

sayHello("Sakshi"); // Hi Sakshi

console.log(sayHello); // [Function (anonymous)]

console.log(typeof sayHello); // function

console.log(sayHello()); // Hi Sakshi


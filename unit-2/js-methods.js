console.log("JavaScript call() apply() and bind() Methods");

// The call() Method
const airindia = {
    airline: "Air India",
    flightCode: "AI",
    bookings: [],
    book: function (flightNum, passengerName) {
        const booking = {
            flight: `${this.flightCode}${flightNum}`,
            name: passengerName
        };
        console.log(booking);
        this.bookings.push(booking);
    }
};


airindia.book(101, "John Doe");
airindia.book(202, "Jane Smith");

console.log(airindia.bookings);

const lufthansa = {
    airline: "Lufthansa",
    flightCode: "LH",
    bookings: []    
};


let books = airindia.book;

console.log(books);

// books(101, "Alice Johnson"); // Error: Cannot read property 'flightCode' of undefined

// Using call() to set 'this' explicitly
books.call(lufthansa, 303, "Bob Brown");


airindia.book.call(lufthansa, 404, "Charlie Davis");
console.log(lufthansa);


// The apply() Method
const swiss = {
    airline: "Swiss Air Lines",
    flightCode: "LX",
    bookings: []    
};

airindia.book.apply(swiss, [505, "Eva Green"]);
console.log(swiss);

const flightData = [606, "Frank White"];
airindia.book.apply(swiss, flightData);

// Modern way using spread operator
airindia.book.call(swiss, ...flightData);


// The bind() Method ==> creates a new function where 'this' is bound to the specified object
const bookLufthansa = airindia.book.bind(lufthansa);
bookLufthansa(707, "David Black");
console.log(lufthansa);

const bookSwiss = airindia.book.bind(swiss);
bookSwiss(707, "Grace Black");
console.log(swiss);
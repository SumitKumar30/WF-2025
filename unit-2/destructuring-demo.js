// Destructuring an array
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;

console.log(red);   // 255
console.log(green); // 200  
console.log(blue);  // 0

// Destructuring an object
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
const { name, age, city } = person;
console.log(name); // Alice
console.log(age);  // 30
console.log(city); // New York

// Nested destructuring
const nestedArray = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArray;
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3

console.log(four);  // 4
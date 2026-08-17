// Local Storage is a permanent storage of browser. (MAX 5MB)
// It runs on set of rules
// —> Everydata it takes only in string format.
// —> Accepting values as key-value pair in string format.

// To save data in local storage we use setItem() method.

// Takes two parameters key and value. Both should be in string format.
localStorage.setItem("name", "John Doe");
localStorage.setItem("age", "30");

// To get data from local storage we use getItem() method.
// Takes only key as parameter and returns value in string format.
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name); // Output: John Doe
console.log(age); // Output: 30

// Array of objects
let data = [
  {
    name: "Anshu",
    age: 20,
    city: "Ahmedabad"
  },
  {
    name: "John",
    age: 30,
    city: "New York"
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
  },
  {
    name: "Mike",
    age: 35,
    city: "Chicago"
  },
  {
    name: "Emily",
    age: 28,
    city: "San Francisco"
  }
];
// localStorage.setItem("data", data);
// This will not work because localStorage only accepts string format.

// JSON —> JavaScript Object Notation
// JSON is a formatter & It is inspired by JavaScript object literal syntax, but the JSON format is text only. It can be used with any programming language.

// For conversion —> JSON.stringify(data) —> Converts JS object to JSON string.
// For parsing —> JSON.parse(data) —> Converts JSON string to JS object.

localStorage.setItem("data", JSON.stringify(data)); // Now it will work because we are converting JS object to JSON string.
let textData = localStorage.getItem("data");  // Now it will return JSON string.
console.log(textData); // Output: JSON string

let parsedData = JSON.parse(textData); 
console.log(parsedData); // Output: Array of objects

// Removes the item with key "name" from local storage.
localStorage.removeItem("age");


// If there is no data in local storage then it will return null and null.forEach() will give error because null is not an array.
const dataFromLocalStorage = JSON.parse(localStorage.getItem("data")) || []; 
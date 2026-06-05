// Functions In JavaScript
// - Accessable, Resuable, Systematic Blocks of Code
// - Can be called anywhere in the program
// - Can be called multiple times in the program
// DRY - Don't Repeat Yourself

// function nameOfFunction(parameter1, parameter2, ...) {
//   // Code to be executed
// }
// nameOfFunction(argument1, argument2, ...); // Calling the function

function sum(a, b) {
  console.log(a + b);
}
sum(5, 10); // Output: 15

function greet(user, age) {
  console.log("Good Morning ...", user);
  if (age >= 18) {
    console.log("You are welcomed in the party.");
  } else {
    console.log("You are not allowed to party.");
  }
}
greet("Alice", 20);

// Types of Functions

// 1. Function Declaration --> Hoisting is possible
function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 5)); // Output: 20

// 2. Function Expression --> Hoisting is not possible
const divide = function (x, y) {
  return x / y;
};
console.log(divide(10, 2)); // Output: 5

// 3. Arrow Function (ES6) aka Fat Arrow Function
var c1 = (a) => {
  console.log("Hello Guys", a);
};

// One-liner Arrow Function (Implicit Return)
var c2 = (a) => console.log("Hello Guys", a);

// If there is only one parameter, we can omit the parentheses
var c3 = (a) => console.log("Hello Guys", a);

c1("Alice");
c2("Bob");
c3("Charlie");

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log("This is an IIFE");
})(); // Output: This is an IIFE

(() => console.log("I Am IIFE"))(); // Output: I Am IIFE


// Return Statement
function add(a, b) {
  return a + b;
}

const result = add(3, 7);
console.log(result); // Output: 10

// Then what is the use of return statement and the difference between console.log and return statement?
// console.log is used to print the output to the console, while return statement is used to return a value from a function.

// Return k baad kuch bhi likhoge wo execute nahi hoga, kyuki return statement function ko exit kar deta hai.


// Pure and Impure Functions

// Pure Function: A function that always produces the same output for the same input and has no side effects.
// Impure Function: A function that may produce different outputs for the same input or has side effects (e.g., modifying a global variable, performing I/O operations).

// Default Parameters
function greet(user = 'Guest') {
  console.log("Hello, " + user + "!");
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!


// Callback Functions
function footpath() {
  console.log('I am footpath');
}

function mainRoad(callback) {
  console.log('I am Mainroad');
  callback();
}
mainRoad(footpath);


// First Class Functions (FCF)
// Functions that can be treated as first-class citizens,
// Meaning ...
// - Store functions in variables
// - Pass functions as arguments to other functions
// - Return functions from other functions


// Higher-Order Functions (HOF)
// A function that takes another function as an argument or returns a function as a result is called a higher-order function.
// Example: map, filter, reduce, forEach, etc.


function parentFunction() {
  console.log('I am Parent...')
  function childFunction() {
    console.log('I am Child...')
    return 'Child Function';
  }
  return childFunction;
}
parentFunction()(); // Output: I am Parent... I am Child...
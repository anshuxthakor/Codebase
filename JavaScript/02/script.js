// Type Coercion in JavaScript

// Type coercion is the automatic or implicit conversion of values from one data type to another.

// - Implict Coercion: This happens when JavaScript automatically converts a value from one type to another.

// - Explicit Coercion: This happens when you manually convert a value from one type to another using functions or operators.

// Implicit Coercion Examples:
console.log("5" + 10); // '510' (string concatenation)
console.log("5" - 10); // -5 (numeric subtraction)
console.log(true + 1); // 2 (true is coerced to 1)
console.log(false + 1); // 1 (false is coerced to 0)

// Explicit Coercion Examples:
console.log(Number("5")); // 5 (string to number)
console.log(String(10)); // '10' (number to string)
console.log(Boolean(0)); // false (0 is falsy)
console.log(Boolean(1)); // true (1 is truthy)

// Binary Operators
// - Arithmetic Operators: +, -, *, /, %
// - Assignment Operators: =, +=, -=, *=, /=, %=
// - Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// - Logical Operators: &&, ||, !
// - Increment and Decrement Operators: ++, --
// - Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// - Ternary Operator: condition ? expressionIfTrue : expressionIfFalse

// Truthy and Falsy Values
// Falsy --> NaN, 0, "", null, undefined, false, document.all
// Truthy --> All values that are not falsy

// Conditional Statements
// - if statement
// - if...else statement
// - if...else if...else statement

// if (condition1) {
//   Execute this block of code if condition1 is true
// } else if (condition2) {
//   Execute this block of code if condition2 is true
// } else {
//   Execute this block of code if both condition1 and condition2 are false
// }


var math = Number(prompt("Enter marks in Math: "));
var physics = Number(prompt("Enter marks in Physics: "));
var chemistry = Number(prompt("Enter marks in Chemistry: "));

var marks = (math + physics + chemistry) / 3;
console.log('Final Marks : ',marks);

if (marks >= 85) {
  console.log('A++ ⭐');
} else if (marks >= 70) {
  console.log('A+');
} else if (marks >= 60) {
  console.log('B+');
} else if (marks >= 50) {
  console.log('C+');
} else if (marks >= 33) {
  console.log('D+');
} else {
  console.log('Fail');
}


// Switch Statement
// - switch statement is used to perform different actions based on different conditions.

// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   ...
//   default:
//     // code to be executed if expression doesn't match any case
// }

// Importance of break statement in switch case:
// The break is used to terminate the switch statement. If break is not used, the code will continue to execute the next case even if the case doesn't match the expression. This is called "fall-through" behavior.
console.log('This is Normal Text')
console.warn('This is Warning Text')
console.error('This is Error Text')
console.table(['Apple', 'Banana', 'Cherry'])

// Variables in JavaScript

// var a --> Declaration
// a = 10 --> Initialization
// var b = 20 --> Declaration & Initialization

var a = 20
console.log('Value of a : ', a)
var b = 3
console.log('Value of b : ', b)

console.log('Sum : ', a + b)
console.log('Difference : ', a - b)
console.log('Product : ', a * b)
console.log('Quotient : ', a / b)
console.log('Remainder : ', a % b)

// Data Types in JavaScript
// There are 2 types of Data Types in JavaScript
// 1. Primitive Data Types
// 2. Non-Primitive Data Types (Reference Data Types)

// Primitive Data Types --> Immutable (Cannot be changed)
// 1. String ('h', 'Hello World') --> Sequence of characters
// 2. Number (10, 3.14, -5)
// 3. Boolean (true, false)
// 4. Undefined (undefined) --> declared but not initialized
// 5. Null (null) --> explicitly assigned to indicate no value
// 6. BigInt (10n) --> can store upto 2^53 - 1(9007199254740991)
// 7. Symbol (Symbol()) --> unique and immutable data type used as an identifier for object properties

var s1 = Symbol("Hello")
var s2 = Symbol("Hello")

console.log(s1 === s2) // false, because each Symbol is unique, even if they have the same description

// Non-Primitive Data Types
// 1. Array
// 2. Object
// 3. Function


// typeof operator
typeof a // number

// alert('This is an alert message!') --> Displays an alert dialog with the specified message and an "OK" button. It does not return any value (undefined).

// prompt('Please enter your name: ') --> returns the input value as a STRING, or null if the user clicks "Cancel"

// confirm('Are you sure you want to delete this item?') --> returns true if the user clicks "OK" and false if the user clicks "Cancel"

var hehe = 'Anshu'
var xoxo = 5

console.log(hehe - xoxo); // --> NaN (Not a Number) because you cannot perform arithmetic operations between a string and a number.

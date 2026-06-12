// forEach() --> Iteration
// Executes a provided function once for each array element.
// forEach() does not return any value. Therefore 'undefined'
// Use it when you just want to loop through the array and DO something (log, update external variable, etc.)
// It does not modify the original array.
// It does not create a new array.

// Syntax: arr.forEach(function (element, index, array) {
//   element --> the current element being processed
//   index   --> (optional) the index of the current element
//   array   --> (optional) the original array itself
// });

var arr1 = [10, "hey", true, undefined, null];
console.log(arr1);
arr1.forEach(function (element, index) {
  console.log(index + ": " + element);
});

// How it works step by step:
// Iteration 1: index = 0, element = 10        --> logs "0: 10"
// Iteration 2: index = 1, element = "hey"     --> logs "1: hey"
// Iteration 3: index = 2, element = true      --> logs "2: true"
// Iteration 4: index = 3, element = undefined --> logs "3: undefined"
// Iteration 5: index = 4, element = null      --> logs "4: null"

var arr2 = [10, 20, 30, 40];
let sum = 0;
arr2.forEach(function (element) {
  sum += element; // updating an external variable on each iteration
});
console.log("Sum: " + sum); // 100

// map() --> Transformation
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
// It returns a new array. It does not modify the original array.
// The new array will always have the SAME LENGTH as the original array.
// Use it when you want to TRANSFORM each element and collect the results.

// Syntax: arr.map(function (element, index, array) {
//   element --> the current element being processed
//   index   --> (optional) the index of the current element
//   array   --> (optional) the original array itself
//   return transformedValue; --> this becomes the element in the new array
// });

var arr3 = [10, 20, 30, 40];
console.log(arr3);
var arr4 = arr3.map(function (elem) {
  return elem * elem; // each element is squared
});
console.log(arr4); // [100, 400, 900, 1600]

// How it works step by step:
// Iteration 1: elem = 10 --> returns 100  --> new array so far: [100]
// Iteration 2: elem = 20 --> returns 400  --> new array so far: [100, 400]
// Iteration 3: elem = 30 --> returns 900  --> new array so far: [100, 400, 900]
// Iteration 4: elem = 40 --> returns 1600 --> new array so far: [100, 400, 900, 1600]
// Final new array: [100, 400, 900, 1600]  (arr3 is still [10, 20, 30, 40])

// If we don't return anything, then the new array will be filled with 'undefined' of same length as the original array.
var arr5 = arr3.map(function (elem) {
  null; // no return statement --> implicitly returns undefined
});
console.log(arr5); // [undefined, undefined, undefined, undefined]

// filter() --> Filtration
// Creates a new array with all elements that PASS the test implemented by the provided function.
// It returns a new array. It does not modify the original array.
// The new array will have LESS THAN OR EQUAL elements compared to the original array.
// Use it when you want to keep only certain elements based on a condition.

// Syntax: arr.filter(function (element, index, array) {
//   element --> the current element being processed
//   index   --> (optional) the index of the current element
//   array   --> (optional) the original array itself
//   return true/false; --> true means keep the element, false means skip it
// });

// If nothing is returned, it is treated as 'false' --> the new array will be empty.

var arr6 = [5, -9, 2, -4, 33, 8];
var arr7 = arr6.filter(function (elem) {
  return elem > 0; // keep only positive numbers
});
console.log(arr7); // [5, 2, 33, 8]

// How it works step by step:
// Iteration 1: elem = 5  --> 5 > 0  is true  --> kept   --> new array so far: [5]
// Iteration 2: elem = -9 --> -9 > 0 is false --> skipped --> new array so far: [5]
// Iteration 3: elem = 2  --> 2 > 0  is true  --> kept   --> new array so far: [5, 2]
// Iteration 4: elem = -4 --> -4 > 0 is false --> skipped --> new array so far: [5, 2]
// Iteration 5: elem = 33 --> 33 > 0 is true  --> kept   --> new array so far: [5, 2, 33]
// Iteration 6: elem = 8  --> 8 > 0  is true  --> kept   --> new array so far: [5, 2, 33, 8]
// Final new array: [5, 2, 33, 8]

var arr8 = ["Alex", "Bella", "Cherry", "Daisy"];
var arr9 = arr8.filter(function (elem) {
  return elem.includes("a") || elem.includes("A"); // keep names that contain 'a' or 'A'
});
console.log(arr9); // ["Alex", "Bella", "Daisy"]

// How it works step by step:
// Iteration 1: elem = "Alex"   --> includes "A" is true  --> kept
// Iteration 2: elem = "Bella"  --> includes "a" is true  --> kept
// Iteration 3: elem = "Cherry" --> neither "a" nor "A"   --> skipped
// Iteration 4: elem = "Daisy"  --> includes "a" is true  --> kept
// Final new array: ["Alex", "Bella", "Daisy"]

// reduce() --> Reduction
// Reduces the whole array into a single value.
// That single value can be a number, string, object, or anything else.

// Syntax: arr.reduce(function (accumulator, currentValue) {
//   accumulator --> the "running result" that carries forward each iteration (previous result)
//   currentValue --> the current element being processed
//   return updatedAccumulator; --> whatever you return becomes the new accumulator for the next iteration
// }, initialValue); --> initialValue is the starting value of the accumulator

// The 'return' is critical -- without it, accumulator becomes 'undefined' in the next iteration.
// Always provide initialValue -- without it, reduce() uses the first element as accumulator
// and starts iterating from the second element, which can cause unexpected bugs.

var arr10 = [10, 20, 30, 40];

var initialValue = 1; // if initialValue == 0 then the result will always be 0
var mul = arr10.reduce(function (acc, val){
  return acc * val;
}, initialValue);
console.log(mul);

// How it works step by step (initialValue = 1):
// Iteration 1: acc = 1,    val = 10 --> returns 10
// Iteration 2: acc = 10,   val = 20 --> returns 200
// Iteration 3: acc = 200,  val = 30 --> returns 6000
// Iteration 4: acc = 6000, val = 40 --> returns 240000
// Final result: 240000

// Finding the maximum value in an array using reduce()
// Logic: compare each element with the accumulator, keep the larger one.
// The accumulator always holds the largest value seen so far.

var arr11 = [32, 98, 67, 350, 20];
var max = arr11.reduce(function (acc, val) {
  return val > acc ? val : acc;
}, 0); // initialValue = 0, accumulator starts at 0
console.log(max); // 350

// How it works step by step (initialValue = 0):
// Iteration 1: acc = 0,   val = 32  --> 32 > 0   is true  --> returns 32
// Iteration 2: acc = 32,  val = 98  --> 98 > 32  is true  --> returns 98
// Iteration 3: acc = 98,  val = 67  --> 67 > 98  is false --> returns 98  (acc stays 98)
// Iteration 4: acc = 98,  val = 350 --> 350 > 98 is true  --> returns 350
// Iteration 5: acc = 350, val = 20  --> 20 > 350 is false --> returns 350 (acc stays 350)
// Final result: 350

// NOTE: initialValue = 0 works here because all elements are positive.
// If the array had all negative numbers like [-5, -3, -8],
// the result would be 0 (wrong!) because 0 is never beaten.
// Safer approach: use arr11[0] as initialValue to handle all cases.


// find method --> returns the first occurrence of element
var arr12 = ['apple', 'banana', 'cherry', 'date'];
var found = arr12.find( e => e.startsWith('c') );
console.log(found); // "cherry"

// findIndex method --> returns the index of the first occurrence of element
var arr13 = ['apple', 'banana', 'cherry', 'date'];
var foundIndex = arr13.findIndex( e => e.startsWith('c') );
console.log(foundIndex); // 2 (index of "cherry")

// some --> does at least one match the condition?
var arr14 = [1, 3, 5, 7, 8];
var hasEven = arr14.some( e => e % 2 === 0 );
console.log(hasEven); // true (because of 8)

// every --> do all elements match the condition?
var arr15 = [2, 4, 5, 8];
var allEven = arr15.every( e => e % 2 === 0 );
console.log(allEven); // false (because of 5)

// Array Destructuring
// A clean way to extract values from arrays directly into variables.
// Instead of accessing each element by index one by one, you can unpack them in a single line.

let arr = [10, 20, 30];

// Old way --> manually picking each element by index
let a = arr[0]; // 10
let b = arr[1]; // 20

// New way --> destructuring unpacks all at once, left to right
let [x, y, z] = arr;
console.log(x, y, z); // 10 20 30

// Skipping elements
// Leave a blank (just a comma) to skip over an element you don't need.

let [first, , third] = [1, 2, 3];
//          ^ this empty slot skips 2
console.log(first, third); // 1 3

// Default values
// If the array doesn't have a value at that position, the default kicks in.
// If the array DOES have a value, the default is ignored.

let [p = 10, q = 20] = [5];
// p --> array has 5, so p = 5 (default 10 ignored)
// q --> array has nothing here, so q = 20 (default used)
console.log(p, q); // 5 20

// Swapping variables
// Without destructuring, swapping needs a temp variable.
// With destructuring, it's a one-liner.

let m = 1, n = 2;
[m, n] = [n, m]; // right side creates [2, 1], then unpacks into m and n
console.log(m, n); // 2 1


// Spread and Rest with Arrays
// Both use the same '...' syntax but do OPPOSITE things.
// Spread --> takes an array and EXPANDS it into individual elements.
// Rest   --> takes individual elements and COLLECTS them into an array.


// Spread --> Expanding

let nums = [1, 2, 3];

// Insert array elements inside another array
let more = [0, ...nums, 4];
console.log(more); // [0, 1, 2, 3, 4]
// ...nums expands to 1, 2, 3 --> so it becomes [0, 1, 2, 3, 4]

// Copy an array (shallow copy --> only one level deep)
let copy = [...nums];
console.log(copy); // [1, 2, 3]
// changes to 'copy' will NOT affect 'nums'

// Combine two arrays into one
let combined = [...[1, 2], ...[3, 4]];
console.log(combined); // [1, 2, 3, 4]
// both arrays are expanded and merged together

// Pass array elements as individual arguments to a function
console.log(Math.max(...[5, 3, 9, 1])); // 9
// Math.max() expects individual numbers, not an array
// ...spread unpacks the array --> Math.max(5, 3, 9, 1) --> 9


// Rest --> Collecting
// Used in function parameters to collect all passed arguments into a single array.
// Must always be the LAST parameter.

function sum(...nums) {
  // no matter how many arguments you pass, they all get collected into 'nums' array
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
// nums = [1, 2, 3, 4] --> reduce adds them up --> 10


// Simple Rule to tell them apart
// '...' on the RIGHT side of '=' or inside a function CALL --> Spread (expands)
// '...' on the LEFT side of '=' or inside a function DEFINITION --> Rest (collects)

// Spread (right side / function call):
let expanded = [...[1, 2, 3]];        // expands into individual elements
Math.max(...[5, 3, 9]);               // expands into arguments

// Rest (left side / function definition):
let [head, ...tail] = [1, 2, 3, 4];  // head = 1, tail collects the rest --> [2, 3, 4]
function demo(...args) {}             // args collects all passed arguments into an array
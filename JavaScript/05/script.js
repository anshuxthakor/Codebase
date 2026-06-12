// Arrays

console.log('----------------------------------------')
// Ways of creating an array
let a1 = []; // Using array literal syntax
let a2 = new Array(5); // Using the Array constructor - creates an array of length 5 with empty slots
let a3 = new Array(1, 2, 3); // Using the Array constructor with multiple arguments - creates an array with the specified elements
console.log(a1)
console.log(a2)
console.log(a3)
console.log('----------------------------------------')

var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
// Enclosed in square brackets, elements separated by commas
// Can contain any type of data, including other arrays
// In array there are indexes, starting from 0

// Accessing elements
console.log(arr1[0]); // Logs the first element (1)
console.log(arr1[2]); // Logs the third element (3)
console.log(arr1[6]); // Logs undefined (index out of bounds)

// Arrays are mutable, meaning you can change their elements
arr1[0] = 10; // Changes the first element to 10
console.log(arr1); // Logs [10, 2, 3, 4, 5]
console.log('----------------------------------------')

var arr2 = [null, true, 'JavaScript', [1, 2, 3], { name: 'Alice', age: 30 }, 23];
console.log(arr2);
console.log(arr2[0]); // Logs the first element (null)
console.log(arr2[3]); // Logs the fourth element ([1, 2, 3])
console.log(arr2[4]); // Logs the fifth element ({ name: 'Alice', age: 30 })

// Length of an array
console.log(arr1.length); // Logs the length of arr1 (5)
console.log(arr2.length); // Logs the length of arr2 (6)

// Last element of an array
console.log(arr1[arr1.length - 1]); // Logs the last element of arr1 (5)
console.log(arr2[arr2.length - 1]); // Logs the last element of arr2 (23)
console.log('----------------------------------------')

// Array is a type of object in JavaScript, so it has properties and methods
console.log(typeof arr1); // Logs 'object'

console.log('----------------------------------------')
// Common array methods
let array = [10, 20, 30, 40];

console.log('Original Array :');
console.log(array);
console.log('----------------------------------------')

console.log('Modified Array :');
console.log('----------------------------------------')

array.push(99); // Adds 50 to the end of the array
console.log(array); // Logs [10, 20, 30, 40, 99]
array.push(100); // Adds 100 to the end of the array
console.log(array); // Logs [10, 20, 30, 40, 99, 100]
console.log('----------------------------------------')

array.pop(); // Removes the last element from the array
console.log(array); // Logs [10, 20, 30, 40, 99]
array.pop(); // Removes the last element from the array
console.log(array); // Logs [10, 20, 30, 40]
console.log('----------------------------------------')

array.unshift(1); // Adds 1 to the beginning of the array
console.log(array); // Logs [1, 10, 20, 30, 40]
array.unshift(2); // Adds 2 to the beginning of the array
console.log(array); // Logs [2, 1, 10, 20, 30, 40]
console.log('----------------------------------------')

array.shift(); // Removes the first element from the array
console.log(array); // Logs [1, 10, 20, 30, 40]
array.shift(); // Removes the first element from the array
console.log(array); // Logs [10, 20, 30, 40]
console.log('----------------------------------------')

// Using multiple array methods together
let array2 = [15, 45, 78, 90, 78];
array2.shift() // [45, 78, 90, 78]
array2.shift() // [78, 90, 78]
array2.unshift(99) // [99, 78, 90, 78]
array2.pop() // [99, 78, 90]
array2.pop() // [99, 78]
array2.push(89) // [99, 78, 89]
array2.unshift(67) // [67, 99, 78, 89]
array2.push(89) // [67, 99, 78, 89, 89]
array2.unshift(1) // [1, 67, 99, 78, 89, 89]
console.log(array2); // Logs [1, 67, 99, 78, 89]
console.log(array2[3]); // Logs the fourth element of array2 (78)
console.log('----------------------------------------')

// Shift and Unshift are less efficient than Push and Pop because they require reindexing the entire array, which can be time-consuming for large arrays. Therefore, it's generally recommended to use Push and Pop for adding and removing elements from the end of the array, and to avoid using Shift and Unshift for large arrays.

// Means push and pop are faster than shift and unshift.

let array3 = [11, 22, 33, 44, 55]; 

// Removing elements using splice
// array3.splice(startIndex, deleteCount, item1, item2, ...);

array3.splice(1, 1); // Removes 1 element starting from index 1 (removes 22)
console.log(array3); // Logs [11, 33, 44, 55]

array3.splice(2,2); // Removes 2 elements starting from index 2 (removes 44 and 55)
console.log(array3); // Logs [11, 33]

array3.splice(1, 0, 22); // Adds 22 at index 1 without removing any elements
console.log(array3); // Logs [11, 22, 33]
array3.splice(3, 0, 44, 55); // Adds 44 and 55 at index 3 without removing any elements
console.log(array3); // Logs [11, 22, 33, 44, 55]

// Splice can be used to both add and remove elements from an array, making it a versatile method for manipulating arrays in JavaScript.

array3.splice(2, 1, 88,99,100) // Replaces 1 element at index 2 with new values (removes 33 and adds 88, 99, 100)
console.log(array3); // Logs [11, 22, 88, 99, 100, 44, 55]

array3.splice(0, 7, 110, 220, 330, 440, 550, 660, 770); // Replaces all elements with new values
console.log(array3); // Logs [110, 220, 330, 440, 550, 660, 770]
console.log('----------------------------------------')


// Question: What will be the output of the following code?

let array4 = ['Aman', 'Bijoy', 'Chandu', 'Dev', 'Ekansh', 'Farukh'];
array4.splice(3, 2, 'Nandu', 'Swaraj')
console.log(array4) // Logs ['Aman', 'Bijoy', 'Chandu', 'Nandu', 'Swaraj', 'Farukh']
console.log(array4[array4.length - 1]) // Logs the last element of array4 (Farukh)
console.log('----------------------------------------')

let array5 = [10, 20, 30, 40];
array5[10] = 100; // Adds 100 at index 10, creating empty slots in between
console.log(array5);
console.log(array5[5]); // Logs undefined (index 5 is an empty slot)
console.log(array5.length); // Logs the length of array5 (11)
console.log('----------------------------------------')

let array6 = [1,2,3,[4,5,6],7,8]; // An array containing a nested array(Nested Array)
console.log(array6[3]); // Logs the nested array [4, 5, 6]
console.log(array6[3][1]); // Logs the second element of the nested array (5)
console.log('----------------------------------------')

// Multidimensional arrays (arrays of arrays)
let array7 = [
  [10, 20, 30, 40],
  [11, 22, 33, 44],
  [99, 88, 77, 66]
]
console.log(array7); // Logs the 2D array (array of arrays)
console.log(array7[1]); // Logs the second inner array [11, 22, 33, 44]
console.log(array7[1][2]); // Logs the third element of the second inner array (33)

console.log(array7[2][2] + array7[0][1] + array7.length); // 77 + 20 + 3 = 100

array7.reverse(); // Reverses the order of the inner arrays
console.log(array7)
array7.reverse(); // Reverses the order of the inner arrays back to original
// Advance...
// Also reverse the inner arrays elements
array7.reverse(); // Reverses the order of the inner arrays
array7.forEach(innerArray => innerArray.reverse()); // Reverses the order of elements in each inner array
console.log(array7) // Logs the 2D array with both inner arrays and their elements reversed

// Foreach and reverse are the mutating methods, they change the original array.
// If you want new array without changing the original array, you can use map and slice methods.
console.log('----------------------------------------')

// Sorting an array

let array8 = [2,3,1,6,9,4,7,5,8];
array8.sort(); // Sorts the array in ascending order (by default, it sorts elements as strings)
console.log(array8); // Logs [1, 2, 3, 4, 5, 6, 7, 8, 9]

// But when there are 2 digit numbers, it sorts them as strings, which can lead to unexpected results
let array9 = [10, 2, 1, 20, 11];
array9.sort();
console.log(array9); // Logs [1, 10, 11, 2, 20] - sorted as strings
array9.sort((a, b) => a - b); // Sorts the array in ascending order using a compare function
console.log(array9); // Logs [1, 2, 10, 11, 20]
console.log('----------------------------------------')

let array10 = [55, 88, 22, 99, 11];
array10.push(77); // [55, 88, 22, 99, 11, 77]
array10.unshift(66); // [66, 55, 88, 22, 99, 11, 77]
array10.unshift(33); // [33, 66, 55, 88, 22, 99, 11, 77]
array10.push(88); // [33, 66, 55, 88, 22, 99, 11, 77, 88]
array10.shift(); // [66, 55, 88, 22, 99, 11, 77, 88]
array10.reverse(); // [88, 77, 11, 99, 22, 88, 55, 66]
array10.sort((a, b) => a - b); // [11, 22, 55, 66, 77, 88, 88, 99]
array10.reverse(); // [99, 88, 88, 77, 66, 55, 22, 11]
console.log(array10[1]); // Logs 88
console.log('----------------------------------------')

console.log('for..of Loop')
let array11 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for..of loop to iterate over the array
for (value of array11) {
  console.log(value); // Logs each value in the array (10, 20, 30, ..., 100)
}
console.log('----------------------------------------')

let array12 = []
for (let i = 0; i <= 100; i=i+2){
  array12.push(i)
}
console.log(array12);

// Non-Mutating methods (do not change the original array)

var arrey1 = [1, 2, 3, 4, 5];
var arrey2 = [6, 7, 8];

console.log(arrey1); // Logs [1, 2, 3, 4, 5] - original array is unchanged
console.log(arrey1.slice(1, 4)); // Removes 4 elements starting from index 1, but since we are not assigning the result to a new variable, the original array remains unchanged

var brr = arrey1.concat(arrey2); // Logs [1, 2, 3, 4, 5, 6, 7, 8] - returns a new array without changing the original array
console.log(brr);

console.log(arrey2.includes(9)); // Logs false - checks if 9 is present

console.log(arrey1.indexOf(4)); // Logs 3 - returns the index of the first occurrence of 4
console.log(arrey2.indexOf(9)); // Logs -1 - Since 9 is not present, it returns -1

console.log(arrey1.join('-')); // Logs '1-2-3-4-5' - joins the elements of the array into a string with '-' as a separator

var str = 'Anshu Thakor';
console.log(str.split(' ')); // Logs ['Anshu', 'Thakor'] - splits the string into an array of substrings based on the separator (space in this case)

// Split --> String to Array
// Join --> Array to String

// Spread Operator
// Creates a new array by spreading the elements of the original array, allowing you to create a copy of the array or combine it with other arrays without modifying the original array.

// [arr[0], arr[1], arr[2], arr[3], ...., arr[arr.length - 1]] --> [...arr]

let arey = [1, 2, 3, 4, 5];
let newArey1 = [...arey];  
let newArey2 = ['Anshu', ...arey, 'Thakor'];
console.log(newArey1);
console.log(newArey2);

// [...arey] --> [1, 2, 3, 4, 5]
// [-1, 0, ...arey] --> [-1, 0, 1, 2, 3, 4, 5]
// [...arey, 6, 7] --> [1, 2, 3, 4, 5, 6, 7]
// [...arey, ...newArey] --> [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
// ['Anshu', ...arey, 'Thakor'] --> ['Anshu', 1, 2, 3, 4, 5, 'Thakor']
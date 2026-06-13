// Objects are reference data types that can store multiple values in a single variable.

// Arrays stores --> Ordered Data
// Objects stores --> Named Data (Key-Value Pairs)

// To access the values of an object, we can use either dot notation or bracket notation.
// Dot Notation   objectName.key
// Bracket Notation   objectName["key"]

var user = {
  username: "Virat Kohli",
  age: 35,
  city: "Delhi",
  team: "India",
  isMarried: true,
  spouse: {
    name: "Anushka Sharma",
    age: 34,
    city: "Mumbai",
    skills: ['Modeling', 'Acting']
  }
};
console.log(user)
console.log(user.username);
console.log(user['city']);

user.city = "Bangalore"; // Update the value of city
user.skills = ["Batting", "Dancing"]; // Add a new key-value pair
console.log(user);

delete user.isMarried; // Delete the key-value pair with key "isMarried"
console.log(user);

// To get all the object keys --> Object.keys(objectName)
// To get all the object values --> Object.values(objectName)
// To get all the key-value pairs in an object --> Object.entries(objectName)
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.spouse.name);
console.log(user.spouse.skills[1]);



// Storing a function inside an object is called a method. 
var robo = {
  name: 'Chiti',
  ram: '20mb',
  age: 1,
  isWorking: false,
  skills: ['Fight', 'Walk', 'Run', 'Fly', 'Dance'],
  creator: {
    name: 'Vashikaran',
    age: 40,
    isIntelligent: true
  },
  sayHi: function() {
    console.log("Hi, I am " + this.name + ' Robo!');
  }
}
robo.sayHi(); 

// Passing parameters to a method
var actor = {
  user: 'Anushka',
  greet: function(person) {
    console.log(person + ", " + this.user + " says Hello!");
  }
}

actor.greet('Virat'); // Virat, Anushka says Hello!



// Relationship between Arrays and Objects

// Array is a special type of object in JavaScript.

// Array --> Object, Sequential, (push, pop, ...) works here
// Object --> Object, Named, (push, pop, ...) doesn't work here

const user1 = {
  username: "Virat Kohli",
  age: 35,
  city: "Delhi",
}

user1.city = "Bangalore"; // Update the value of city
user1.skills = ["Batting", "Dancing"]; // Add a new key-value pair
console.log(user1)

// We used const here then why we are able to update the value, add a new property ? because const don't allow us to reassign the variable but we can change the properties of the object.

// meaning we cannot make the object a string or anything else while using const but we can change the properties of the object.

// so to prevent these we have two methods -->

// Object.seal() 
Object.seal(user1); // It prevents us from adding new properties but we can update the existing properties.
user1.city = "Mumbai";
user1.country = "India"; // This will not work because we have sealed the object.\
console.log(user1);

// Object.freeze()
Object.freeze(user1); // It prevents us from adding new properties and also updating the existing properties.
user1.city = "Chennai"; // This will not work because we have frozen the object.
user1.country = "India"; // This will not work because we have frozen the object.
console.log(user1);

// Object.isFrozen() --> To check if the object is frozen or not.
console.log(Object.isFrozen(user1)); // true

// And we know that array is a special type of object
// therefore we can also use Object.seal() and Object.freeze() on arrays as well.

var arey = [1, 2, 3, 4, 5];
console.log(arey);
delete arey[4]; // this will remove the value at index 4 but the index will still be there and it will be empty.
Object.seal(arey);
arey[0] = 10; // This will work because we can update the existing properties.
// arey.push(6) --> // This will not work because we have sealed the array.
console.log(arey);

// Object.freeze(arey);
arey[0] = 20; // This will not work because we have frozen the array.

// Destructuring In JavaScript

// Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays.

// With Arrays
var array = [11, 22, 33, 44];

// Basic Destructuring --> Assigning values to variables based on the position
var [a, b] = array; // a = 11, b = 22 remaining values will be ignored
console.log(a, b);

// Skipping Values --> Using Empty Space and Comma
var [x, , y] = array; // x = 11, y = 33, the value at index 1 will be ignored 
console.log(x, y);

// Rest Operator --> ...rest (Remaining Elements)
// Rest operator can only be used at the end of the destructuring assignment

var [p, q, ...rest] = array; // p = 11, q = 22, rest = [33, 44] 
console.log(p, q);
console.log(rest);

// ... on left side ---> rest operator
// ... on right side ---> spread operator


// With Objects
var obj = {
  name: "Anshu",
  age: 20,
  batch: "Cohort 3.0"
}

// Basic Destructuring --> Assigning values to variables based on the key name
var {name, age} = obj; // name = "Anshu", age = 20
console.log(name, age);

// In arrays we can use any variable name for destructuring but in objects we have to use the same variable name as the key name in the object.

// To avoid this we can use aliasing --> variableName: newVariableName
var {name: username, age: userage} = obj;
console.log(username, userage);

// Rest Operator --> ...rest (Remaining Properties)
var { name, ...restObj } = obj;
console.log(restObj); // restObj will contain the remaining properties


// Spread Operator --> ...spread (Copying an Object)
var newArray = [...array, 55]; // This will create a SHALLOW COPY of the array and add a new value 55 at the end of the array

newArray[0] = 100; // This will not change the original array 
console.log(array); // Original array remains unchanged
console.log(newArray); // New array with the updated value


var newObj = { ...obj, city: "Delhi" }; // This will create a SHALLOW COPY of the object and add a new property city
newObj.name = "Anushka"; // This will not change the original object
console.log(obj); // Original object remains unchanged
console.log(newObj); // New object with the updated value and new property

// Now what is a SHALLOW COPY ?

// A Shallow copy only duplicates the top-level properties, while a deep copy recursively duplicates every level, creating a completely independent objects.

// A shallow copy is a copy of an object or array that shares the same reference to the nested objects or arrays.
// Therefore, if we change the nested objects or arrays in the new object or array, it will also change in the original object or array because they are referencing the same nested objects or arrays.

// Therefore we create a deep copy to avoid this issue.

var originalObj = {
  name: "Harsh",
  age: 20,
  marks: 65,
  college: {
    name: "LNCT",
    student: 20000
  },
  skills: ['JavaScript', 'React', 'Node.js']
}

// JSON.stringify() --> It converts a JavaScript object into a JSON string.
// JSON.parse() --> It converts a JSON string back into its original form.

var str = JSON.stringify(originalObj); // Convert the object to a JSON string
var deepCopiedObj = JSON.parse(str); // Convert the JSON string back to an object

deepCopiedObj.name = "Anshu Thakor";
deepCopiedObj.marks = 97;
deepCopiedObj.college.name = "IIT";
deepCopiedObj.skills.push('Python');

console.log(originalObj);
console.log(deepCopiedObj);

var originalArray = [1, {name: 'Anshu', age: 20}, 3, [4, 5]];

var oarr = [...originalArray]; // SHALLOW COPY of the original array

// Things are nested here therefore it will also change the original array
oarr[0] = 10;
oarr[1].name = "Harsh"; 
oarr[3].push(6); 

console.log(oarr)
console.log(originalArray);

// DEEP COPY of the original array using JSON methods
var strArr = JSON.stringify(originalArray);
var deepCopiedArray = JSON.parse(strArr);

deepCopiedArray[0] = 100;
deepCopiedArray[1].name = "Harsh";
deepCopiedArray[3].push(7);

console.log(deepCopiedArray);
console.log(originalArray);


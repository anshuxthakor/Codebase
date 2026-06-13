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
var obj = {
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
obj.sayHi(); 

// Passing parameters to a method
var obj1 = {
  user: 'Anushka',
  greet: function(person) {
    console.log(person + ", " + this.user + " says Hello!");
  }
}

obj1.greet('Virat'); // Virat, Anushka says Hello!



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


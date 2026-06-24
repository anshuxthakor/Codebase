// Objects Deeper and this keyword

console.log(this); // window object

function abc() {
  console.log(this);
}
abc(); // window object

'use strict';
function xyz() {
  console.log(this);
}
xyz(); // undefined

var obj = {
  firstName: 'John',
  lastName: 'Doe',
  getIntro: function () {
    console.log(this);
  }
};
obj.getIntro(); // object

// If we use arrow function --> Has no lexical context
var obj2 = {
  firstName: 'John',
  lastName: 'Doe',
  getIntro: () => {
    console.log(this);
  }
};
obj2.getIntro(); // window object

// If we use arrow function inside a method then this will refer to the parent object
var obj3 = {
  firstName: 'John', 
  lastName: 'Doe',
  getIntro: function () {
    const arrowFunc = () => {
      console.log(this);
    }
    arrowFunc();
  }
};
obj3.getIntro(); // object


// Function Sharing (Explicit Binding)

// call
var student1 = {
  firstName: 'John',
  lastName: 'Doe',
  getIntro: function () {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

var student2 = {
  firstName: 'Jane',
  lastName: 'Smith'
}

student1.getIntro(); // John Doe
student1.getIntro.call(student2); // Jane Smith

// if we want to pass arguments to the function then we can use call method
var student3 = {
  firstName: 'Alice',
  lastName: 'Johnson',
  getPlace: function (city, country) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country);
  }
}

student3.getPlace.call(student2, 'New York', 'USA'); // Jane Smith from New York, USA

// if we want to pass arguments as an array then we can use apply method
student3.getPlace.apply(student2, ['Los Angeles', 'USA']);

// bind method --> returns a new function with the specified this value and arguments
var student4 = {
  firstName: 'Bob',
  lastName: 'Brown'
};

var getIntroBound = student1.getIntro.bind(student4);
getIntroBound(); // Bob Brown

// Prototypical Chaining Or Inheritance

var college = {
  name: 'IIT Bombay',
  rating: 'A+',
  students: 5000,
  saySlogan: function () {
    console.log('We are the best college in India');
  }
};

var branch = {
  name: 'CSE',
  rating: 'A++',
  students: 500,
  subjects: ['TOC', 'SD', 'CD']
};

var user = {
  name: 'Anshu Thakor',
  age: 20,
  marks: 98
};

user.__proto__ = branch;
branch.__proto__ = college;

console.log(user);

// There is a method for checking the prototype of an object

// Array --> Array --> Object --> null
// Object --> Object --> null
// Function --> Function --> Object --> null

console.log(Array.prototype)
console.log(Object.prototype)
console.log(Function.prototype)

// These works with only Array, Object and Function.

// If we want to use .prototype we can create a constructor function.

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
console.log(Person.prototype); // Person {}

var person1 = new Person('John', 'Doe', 25);
var person2 = new Person('Jane', 'Smith', 30);

console.log(person1);
console.log(person2);
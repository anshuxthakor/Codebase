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
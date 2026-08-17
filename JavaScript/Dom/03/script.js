// Attributes & Properties
// Attribute — Predefined keywords in HTML (id, src, placeholder, etc.) {Static}
// Properties — id = 'test' // this test here is a property.

// — getAttribute(), setAttribute(), removeAttribute(), hasAttribute()

const h3 = document.querySelector('h3');

console.log(h3.getAttribute('id')); // "test"
console.log(h3.getAttribute('class')); // "c1 c2 c3"

h3.setAttribute('title', 'This is a title'); // Adds a new attribute
h3.setAttribute('class', 'c1 c2 c3 c4'); // Updates the class attribute

console.log(h3.getAttribute('title')); // "This is a title"
console.log(h3.getAttribute('class')); // "c1 c2 c3 c4"

h3.removeAttribute('title'); // Removes the title attribute
console.log(h3.hasAttribute('title')); // false

// We can have custom attributes in HTML
// <div data-id="123" data-name="John"></div> like this. These are called data attributes. We can access them using dataset property.

const dataDiv = document.querySelector("#data-div");
// In HTML write attributes with hyphens
// Use camelCase to access data attributes using dataset property
console.log(dataDiv.dataset.name); // "John"
console.log(dataDiv.dataset.userId); // "123"


// input.value vs input.getAttribute('value')
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log("This input.value —> ", input.value);
  console.log("This input.getAttribute('value') —> ", input.getAttribute('value'));
});


// Creating, Inserting, and Removing Elements
const main = document.querySelector('main');

const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
newDiv.style.border = '2px solid white';
newDiv.style.padding = '15px';
newDiv.style.borderRadius = '20px';
main.appendChild(newDiv); // Appends Only one element at a time

const newSpan = document.createElement('span');
newSpan.innerHTML = '<i style="color: #58ea82;">This is a new span</i>';

const newPara = document.createElement('p');
newPara.innerHTML = '<b style="color: #00cff4;">Lorem ipsum dolor sit.</b>';

newDiv.append(newSpan, newPara); // Appending multiple elements at once
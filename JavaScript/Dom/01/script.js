// Dom — Document Object Model
// It is used to manipulate the HTML
// Dom — Converts HTML into JavaScript objects


// Browser --> Html(String) --> Parse(Html Parser) --> Converts String into DOM Tree
// Styling --> CSS(String) --> Parse(CSS Parser) --> Converts String into CSSOM Tree

// DOM TREE + CSSOM TREE = RENDER TREE

// Note: This is called Html to Browser Pipeline.

// console.log(window.document) --> Log the document object in the console
// console.dir(window.document) --> Gives the whole directory

console.dir(document); // window.document is same as document here.

// Selecting Elements in DOM
// 1. getElementById() --> Selects the element by its ID
// 2. getElementsByClassName() --> Selects the elements by their class name
// 3. getElementsByTagName() --> Selects the elements by their tag name
// 4. querySelector() --> Selects the first element that matches the CSS selector
// 5. querySelectorAll() --> Selects all the elements that match the CSS selector

const h1 = document.querySelector("h1"); // Selects the first h1 tag in the DOM
console.log(h1); // Logs the h1 tag in the console

const h1All = document.querySelectorAll("h1"); // Selects all the h1 tags in the DOM
console.log(h1All); // Logs all the h1 tags in the console

const h1byTagName = document.getElementsByTagName("h1"); // Selects all the h1 tags in the DOM
console.log(h1byTagName); // Logs all the h1 tags in the console

// Then what is the difference between querySelectorAll and getElementsByTagName?
// querySelectorAll --> static NodeList, while getElementsByTagName --> live HTMLCollection.
// This means that if the DOM changes after the initial selection, the NodeList will not update, but the HTMLCollection will reflect the changes in the DOM.

const divbyId = document.getElementById("container"); // Selects the div with the ID "container"
console.log(divbyId); // Logs the div with the ID "container" in the console

const divbyClassName = document.getElementsByClassName("text"); // Selects all the elements with the class name "text"
console.log(divbyClassName); // Logs all the elements with the class name "text" in the console


// We have all these methods to select elements in the DOM, but which one should we use?
// It is recommended to use querySelector and querySelectorAll as they are more versatile and can select elements using any CSS selector.

const h1byQuerySelector = document.querySelector("h1"); 
const idbyQuerySelector = document.querySelector("#container"); 
const classbyQuerySelector = document.querySelector(".text"); 

console.log(h1byQuerySelector);
console.log(idbyQuerySelector); 
console.log(classbyQuerySelector); 


// Changing the HTML
h1byQuerySelector.textContent = "Document Object Model";

classbyQuerySelector.innerText = "Document Object Model is used to manipulate the HTML. It converts HTML into JavaScript objects. It is a tree structure that represents the HTML document. It is used to access and manipulate the elements in the HTML document.";

// idbyQuerySelector.innerHTML = "<p>This is a new paragraph.</p>"

//  --> This will replace the entire content of the div with the ID "container" with a new paragraph. It is not recommended to use innerHTML as it can lead to security vulnerabilities if the content is not properly sanitized. It is better to use textContent or innerText to change the text content of an element.

// Styling the HTML
h1byQuerySelector.style.color = "blue";
h1byQuerySelector.style.fontSize = "50px";
h1byQuerySelector.style.textAlign = "center";

classbyQuerySelector.style.color = "green";
classbyQuerySelector.style.fontSize = "20px";
classbyQuerySelector.style.textAlign = "justify";

idbyQuerySelector.style.border = "1px solid black";
idbyQuerySelector.style.padding = "10px";
idbyQuerySelector.style.margin = "10px";
idbyQuerySelector.style.borderRadius = "10px";
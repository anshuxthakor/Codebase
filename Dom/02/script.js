// NodeList & HTMLCollection
const body = document.body;

console.log(body.childNodes);
// .childNodes returns a NodeList
// Nodelist points to the DOM Tree and Everything inside the tree is a node, including text nodes and comment nodes.

console.log(body.children);
// .children returns an HTMLCollection
// HTMLCollection only points HTML elements.

// Manipulating the HTML < textContent, innerText, innerHTML >
const head = document.querySelector("h1");
head.textContent = "Hey me update hogaya hu via DOM";
console.log(head.textContent);

// Then what is the difference between textContent and innerText?
const demo = document.querySelector("#demo");
console.log(demo.textContent); // Hello Hidden World
console.log(demo.innerText); // Hello World

head.innerHTML = "<h1 style='color: rgb(0, 255, 145);'>Dominic Torretto</h1>";

// When we apply CSS from DOM
// .style.propertyName = "value";  --> This is the syntax and if there is a hyphen in the property name then we have to use camelCase instead of hyphen.

body.style.padding = "3rem";
body.style.textAlign = "center";

head.style.fontSize = "2rem";
head.style.paddingBottom = "1rem";

demo.style.color = "blue";
demo.style.fontSize = "1.7rem";
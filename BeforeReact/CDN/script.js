// ReactJs —> Frontend JavaScript library for building SPA (Single Page Applications)
// ReactJs creates a virtual DOM which is a lightweight copy of the actual DOM.
console.log(React);
console.log(ReactDOM);

// RealDOM
const h1 = document.createElement("h1");
h1.classList.add("dom-h1");
h1.textContent = "REAL DOM H1";
document.body.appendChild(h1);
console.log(h1); // This is the actual DOM

// ReactDOM 
const react_h1 = React.createElement(
  "h1",
  null,
  React.createElement("span", null, "REACT'S H1"),
);
console.log(react_h1); // This is the virtual DOM


// We cannot append the react_h1 to the actual DOM directly, we need to use ReactDOM
const realDomElem = document.querySelector("#root");
const rootOfReact = ReactDOM.createRoot(realDomElem);
rootOfReact.render(react_h1); // This will render the virtual DOM to the actual DOM


// Now our script.js file is ESM File
// where in index.html we have to use type="module" in script tag
// and the myVariable is exported from export.js file and imported in script.js file

import { myVariable, square } from "./export.js";
console.log(myVariable); // This will log "Hello, World!" to the console
console.log(square(5)); // This will log 25 to the console
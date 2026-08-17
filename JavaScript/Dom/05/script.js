// Events —> Anything jo window pe ho raha hai
// MouseEvents, PointerEvents, KeyboardEvents, InputEvents, SubmitEvents, etc...

const elements = document.querySelectorAll('body, main, div');
elements.forEach(el => {
  const label = document.createElement('span');
  label.textContent = el.tagName.toLowerCase();
  label.classList.add('tag-label');
  el.appendChild(label);
});


// Event Propogation or Event Traversal

// Event Capturing Flow
// window —> doctype → html → body → main → div → button(target)

// Event Bubbling Flow
// button(target) → div → main → body → html → doctype → window

// The browser first goes through the capturing phase, then the target phase, and finally the bubbling phase. This is how events propagate through the DOM tree. but by default, the browser only listens for events in the bubbling phase. If you want to listen for events in the capturing phase, you need to set the third argument of addEventListener to true or use an options object with capture: true.

const body = document.body;
const main = document.querySelector('main');
const div = document.querySelector('div');
const btn = document.querySelector('button');

// Capturing phase (goes top → target)
body.addEventListener('click', () => console.log('BODY - capturing'), true);
main.addEventListener('click', () => console.log('MAIN - capturing'), { capture: true });
div.addEventListener('click', () => console.log('DIV - capturing'), true);

btn.addEventListener('click', () => {
  console.log('———————————————————————————');
  console.log('BUTTON - clicked (target)');           // Target phase
  console.log('———————————————————————————');
});

// Bubbling phase (goes target → up)
div.addEventListener('click', () => console.log('DIV - bubbling'));
main.addEventListener('click', () => console.log('MAIN - bubbling'));
body.addEventListener('click', () => console.log('BODY - bubbling'));
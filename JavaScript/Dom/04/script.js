// prepend, before, after, replaceWith

const main = document.querySelector('main');

const red = document.createElement('div');
const green = document.createElement('div');
const blue = document.createElement('div');

red.textContent = 'Red';
green.textContent = 'Green';
blue.textContent = 'Blue';

red.classList.add('box');
green.classList.add('box');
blue.classList.add('box');

red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';


main.append(green, blue);
main.prepend(red); // prepend adds red to the beginning of main

blue.before(red); // adds red before blue
green.before(red); // adds red before green

blue.after(red); // adds red after blue
blue.after(green); // adds green after blue

blue.replaceWith(red); // replaces blue with red the blue is gone now
/* --------------- Arrow Function --------------- */
const greetings = (name) => {
  return `hello ${name}`;
}
greetings = name => `hello ${name}`; // Implicit return

// How this works in arrow functions
const link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})
link.addEventListener('click', function() {
  // this === link
})

// use an array as function argument 
const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sum = sum(...numbers)
  
/* --------------- Default parameters --------------- */
const sayHello = (name = 'Annoy') => {
  return `Hello ${name}`
}
// With destructuring you can provide default values
const colorize = ({ color = 'yellow' }) => {
  console.log(color);
}
// If no object is passed when calling our colorize function,
// similarly we can assign an empty object by default:
const spin = ({ color = 'yellow' } = {}) => {
  console.log(color);
}

/* --------------- Generators (Start with JavaScript 1.7) --------------- */

// A generator can contain many yield keywords, thus halting itself multiple times, 
// and it's identified by the *function keyword
function *calculator(input) {
  var doubleThat = 2 * (yield (input / 2))
  var another = yield (doubleThat)
  return (input * doubleThat * another)
}
const calc = calculator(10);
calc.next(); // first iteration  { done: false, value: 5 } : 10 / 2
calc.next(7); // second iteration { done: false, value: 14 } : 2 * 7
calc.next(100); // { done: true, value: 14000 } : 10 * 14 * 100
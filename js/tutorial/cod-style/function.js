// Use named function expressions instead of function declarations. eslint: func-style
// Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack. (Discussion)

// bad
function foo() {
  // ...
}
// bad
const foo = function () {
  // ...
};
// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};


// Wrap immediately invoked function expressions in parentheses. eslint: wrap-iife
// Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());


// Never use arguments, opt to use rest syntax ... instead. eslint: prefer-rest-params
// Why? ... is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments.
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}
// good
function concatenateAll(...args) {
  return args.join('');
}


// Use default parameter syntax rather than mutating function arguments.
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
}
// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
}
// good
function handleThings(opts = {}) {
  // ...
}


// Always put default parameters last.
// bad
function handleThings(opts = {}, name) {
  // ...
}
// good
function handleThings(name, opts = {}) {
  // ...
}

// Never use the Function constructor to create a new function. eslint: no-new-func
// Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.
// bad
var add = new Function('a', 'b', 'return a + b');
// still bad
var subtract = Function('a', 'b', 'return a - b');


// Spacing in a function signature. eslint: space-before-function-paren space-before-blocks
// Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.
// bad
const f = function(){};
const g = function (){};
const h = function() {};
// good
const x = function () {};
const y = function a() {};

// Never mutate parameters. eslint: no-param-reassign
// Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.
// bad
function f1(obj) {
  obj.key = 1;
}
// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
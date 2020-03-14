// Use the literal syntax for array creation. eslint: no-array-constructor
// bad
const items = new Array();
// good
const items = [];

// Use Array#push instead of direct assignment to add items to an array.
const someStack = [];
// bad
someStack[someStack.length] = 'abracadabra';
// good
someStack.push('abracadabra');

// Use array spreads ... to copy arrays.
// bad
const len = items.length;
const itemsCopy = [];
let i;
for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}
// good
const itemsCopy = [...items];

// To convert an iterable object to an array, use spreads ... instead of Array.from.
const foo = document.querySelectorAll('.foo');
// good
const nodes = Array.from(foo);
// best
const nodes = [...foo];

// Use Array.from for converting an array-like object to an array.
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// bad
const arr = Array.prototype.slice.call(arrLike);
// good
const arr = Array.from(arrLike);


// Use line breaks after open and before close array brackets if an array has multiple lines
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];
const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];
const numberInArray = [
  1, 2,
];
// good
const arr = [[0, 1], [2, 3], [4, 5]];
const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
const numberInArray = [
  1,
  2,
];

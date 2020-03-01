/* --------------- Do...While --------------- */
let i = 0;
do {
    i = i + 1;
} while (i < 5);
console.log(i); // 5

/* --------------- For Statement --------------- */
for (let i = 0; i < 9; i++) {
    console.log(i);
}
// Optional for expressions : All three expressions in the head of the for loop are optional.
var i = 0;
for (; i < 9; i++) {
    console.log(i);
}
for (let i = 0;; i++) {
    if (i > 3) break;
}
for (;;) {
    if (i > 3) break;
    i++;
}
// Using for without a statement
function showOffsetPos(sId) {
    var nLeft = 0, nTop = 0;
    for (
        var oItNode = document.getElementById(sId); /* initialization */
        oItNode; /* condition */
        nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */
    ); /* semicolon */
    console.log('Offset position of \'' + sId + '\' element:\n left: ' + nLeft + 'px;\n top: ' + nTop + 'px;');
}

/* --------------- For...In Statement --------------- */
var obj = {a: 1, b: 2, c: 3};
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`); // "obj.a = 1"
}

/* --------------- For...Of Statement --------------- */
// Iterating over an Array
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value); // 10
}
// Iterating over a String
const iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value);
}
// Iterating over a Map
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const entry of iterable) {
  console.log(entry);  // ['a', 1]
}
for (const [key, value] of iterable) {
  console.log(value);  // 1
}
// Iterating over the arguments object
(function() {
  for (const argument of arguments) {
    console.log(argument); // 1
  }
})(1, 2, 3);
// Closing iterators
function* foo(){ 
    yield 1; 
    yield 2; 
    yield 3; 
}; 
for (const o of foo()) { 
    console.log(o); // {value:1, done: false}
    break; // closes iterator, execution continues outside of the loop
}
console.log('done');
// Iterating over generators
function* fibonacci() { // a generator function
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
}  
for (const n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
      break;
    }
}

/* --------------- Difference between for...of and for...in --------------- */
// The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
// The for...of statement iterates over values that the iterable object defines to be iterated over.
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};
const iterable = [3, 5, 7];
iterable.foo = 'hello';
for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}
for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}
for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}
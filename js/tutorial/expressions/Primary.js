/* --------------- yield* --------------- */
// The yield* expression is used to delegate to another generator or iterable object.
function* test(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  // a: x=5, y=NaN, z=undefined
  // b: x=5, y=24, z=13
  return (x + y + z);
}
var a = test(5);
a.next() // {value:6, done:false}
a.next() // {value:NaN, done:false}
a.next() // {value:NaN, done:true}
var b = test(5);
b.next() // {value:6, done:false}
b.next(12) // {value:8, done:false}
b.next(13) // {value:42, done:true}

// Delegating to another generator
function* g1() {
    yield 2;
    yield 3;
} 
function* g2() {
    yield 1;
    yield* g1();
    yield 4;
}  
const iterator = g2(); 
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

// Other Iterable objects
function* g3() {
    yield* [1, 2];
    yield* '34';
    yield* Array.from(arguments);
}  
const iterator = g3(5, 6);
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "3", done: false}
console.log(iterator.next()); // {value: "4", done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: undefined, done: true}


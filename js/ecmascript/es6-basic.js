/* --------------- let and const (Block Scoping) --------------- */

// Using let: Modern JavaScript developers might choose to only use let
//            and completely discard the use of var
var num = 0; // num is globally scoped
for (let i = 0; i < 5; i++) { // i is block scoped
  num += i;
}
console.log(num); // 0 + 1 + 2 + 3 + 4 = 10
console.log(i); // undefined

// Using const: Once a const is initialized, its value can never be changed again, 
//               and it can't be reassigned to a different value
const a = 'test'


/* --------------- Template Literal (`) --------------- */

// Multiline strings
const string = `First
                Second`

// Interpolation
const name = 'jianping';
console.log(`Hello ${name}, ${1 + 2 + 3}`);


//New String methods

/* --------------- Destructuring assignments --------------- */

// Extract multiple values: object destructuring 
const person = { firstName: 'Jianping', lastName: 'Gan', age: 40 }
const {firstName: name, age} = person; //  

// The syntax also works on arrays
const nums = [1,2,3,4,5];
const [first, second] = nums;
const [first, second, , , fifth] = nums;


/* --------------- Rest / Spread operators --------------- */

// String to Array
const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']

// Merge array
const a = [1, 2, 3];
const b = [...a, 4, 5, 6]; // [1,2,3,4,5,6]
const c = [...a]; // create a copy of an array using

// Merge two objects
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = { ...obj1, ...obj2 }  // ES5: obj3 = Object.assign(obj1, obj2)

// The rest element is useful when working with array destructuring
const numbers = [1, 2, 3, 4, 5];
[first, second, ...others] = numbers;

// use an array as function argument 
const f = (foo, bar) => {}
const a = [1, 2]
f(...a);


/* --------------- Enhanced Object Literals --------------- */

// Simpler syntax to include variables
const something = 'y'
const x = {
  something
}

// Prototype & super(): A prototype can be specified with
const anObject = { y: 'y', test: () => 'zoo' }
const x = {
  __proto__: anObject,
  test() {
    return super.test() + 'x'
  }
}
x.test() //zoox

// Dynamic properties
const x = {
  ['a' + '_' + 'b']: 'z'
}
x.a_b //z

/* --------------- For-of loop --------------- */

//iterate over the value
for (const v of ['a', 'b', 'c']) {
  console.log(v);
}

//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(index) //index
  console.log(value) //value
}


/* --------------- Module Exports and Imports --------------- */
// export default module
var testModule = { a: 1, b: 2 };
export default testModule; // ES5: module.exports = testModule;
export default str => str.toUpperCase(); // anonymous function

// import a default module
import anyName from './testModule'; // ES5: var testModule = require(./testModule);

// Other import/export options
const a = 1
const b = 2
export { a, b };
import { a, b as two } from 'module';

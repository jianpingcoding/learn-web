// Block Scoping (let)
var num = 0; // num is globally scoped
for (let i = 0; i < 5; i++) { // i is block scoped
  num += i;
}
console.log(num); // 0 + 1 + 2 + 3 + 4 = 10
console.log(i); // undefined

// Template Literal (`)
const a = 1;
const b = 'b';
const c = `value of a is ${a} and value of b is ${b}`;

// Arrow Function
const greetings = (name) => {
  return `hello ${name}`;
}
greetings = name => `hello ${name}`;

// Merge two objects: rest/spread operators
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = { ...obj1, ...obj2 }  // ES5: obj3 = Object.assign(obj1, obj2)

// Extract multiple values: object destructuring 
const obj4 = { a: 1, b: 2}
const { a, b } = obj4 // ES5: var a = obj1.a

// Define a object : object destructuring
var a = 1
var b = 2
var obj5 = { a, b } // ES5: var obj5 = { a: a, b: b }

// Promise
const isGreater = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}
isGreater(1, 2)
    .then(result => {
        console.log('greater')
    })
    .catch(result => {
        console.log('smaller')
    })

// Module Exports and Imports
var testModule = { a: 1, b: 2 };
export default testModule; // ES5: module.exports = testModule;
import testModule from './testModule'; // ES5: var testModule = require(./testModule);
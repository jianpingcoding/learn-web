/* --------------- New Features --------------- */

// Strict mode (JavaScript 1.8.5)
'use strict';

// get prop() { ... } The get syntax binds an object property to a function that will be called when that property is looked up. (JavaScript 1.8.5)
// get [expression]() { ... } : Starting with ECMAScript 2015
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest);

// The set syntax binds an object property to a function to be called (JavaScript 1.8.5)
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}
language.current = 'EN';
language.current = 'FA';
console.log(language.log);

// Global objects made read only: The NaN, Infinity, and undefined (JavaScript 1.8.5)
// NaN
Number.NaN === NaN; // false
isNaN(NaN);         // true
// Infinity
const maxNumber = Math.pow(10, 1000); // max positive number
if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
}
console.log(1 / maxNumber); // 0
// undefined
function test(t) {
  if (t === undefined) {
     return 'Undefined value!';
  }
  return t;
}

/* --------------- Syntactic Changes --------------- */

// Reserved words as property keys
var obj1 = { 
  new: 'abc' 
};
console.log("Reserved words as property keys: ", obj1.new); // abc

// Legal trailing commas
var person2 = { 
  firstName: 'A', 
}

// Multiline string literals
var str = "Hello \
         World";
console.log("Multiline string literals: ", str);         

/* --------------- New Function method --------------- */         

// Function.apply(): calls a function with a given this value, and arguments provided as an array. (JavaScript 1.8.5)
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max); // 7
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

// Function.prototype.bind(): Creates a new function that, when called, itself calls this function in the context provided. (JavaScript 1.8.5)
function list() {
  return Array.prototype.slice.call(arguments);
} 
var list1 = list(1, 2, 3); // [1,2,3]        
const leadingThirtysevenList = list.bind(null, 37);
const list2 = leadingThirtysevenList();  // [37]
const list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

/* --------------- New String method --------------- */   

// String.prototype.trim(): Trims whitespace from the beginning and end of the string.(JavaScript 1.8.1)
// String.prototype.trimLeft(), String.prototype.trimRight()
const greeting = '   Hello world!   ';
console.log(greeting); // "   Hello world!   ";
console.log(greeting.trim()); // "Hello world!";

// Access characters via the bracket operator [...]
console.log('cat'[1]); // "a"


/* --------------- New Date methods --------------- */   

// Date.now(): Returns the numeric value corresponding to the current time—the 
// number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
const start = Date.now();
setTimeout(() => {
  const millis = Date.now() - start;
  console.log(`seconds elapsed = ${Math.floor(millis/1000)}`); // seconds elapsed = 2
}, 2000);

// Date.prototype.toISOString(): Converts a date to a string following the ISO 8601 Extended Format. (JavaScript 1.8.5)
const event = new Date('07 March 2020 07:19 UTC');
console.log(event.toString()); // Sat Mar 07 2020 15:19:00 GMT+0800 (Singapore Standard Time)
console.log(event.toISOString()); // 2020-03-07T07:19:00.000Z


/* --------------- JSON (JavaScript 1.8.1) --------------- */   
// JSON.parse()
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count); // 42
console.log(obj.result); // true

// JSON.stringify()
console.log(JSON.stringify({ x: 5, y: 6 })); // "{"x":5,"y":6}"
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)])); // "[3,"false",false]"
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })); // "{"x":[10,null,null,null]}"
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))); // ""2006-01-02T15:04:05.000Z""

// Some built-in objects have special toJSON() methods:
// Boolean.prototype.toJSON()

// Number.prototype.toJSON() 

// String.prototype.toJSON()

// Date.prototype.toJSON(): Returns a JSON format string for a Date object. (JavaScript 1.8.5)
const event = new Date('August 19, 1975 23:15:30 UTC');
const jsonDate = event.toJSON();
console.log(jsonDate); // 1975-08-19T23:15:30.000Z


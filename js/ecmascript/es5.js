/* --------------- New Features --------------- */

// Strict mode
'use strict';

// Accessors
var obj = { get foo() { return 'abc' } };
obj.foo  // abc


/* --------------- Syntactic Changes --------------- */

// Reserved words as property keys
var obj = { new: 'abc' };
obj.new

// Legal trailing commas
var person = { firstName: 'A', }

// Multiline string literals
var str = "Hello \
         World";

/* --------------- New Function method --------------- */         

// Function.prototype.bind()
function list() {
  return Array.prototype.slice.call(arguments);
} 
var list1 = list(1, 2, 3); // [1,2,3]        
const leadingThirtysevenList = list.bind(null, 37);
const list2 = leadingThirtysevenList();  // [37]
const list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

/* --------------- New String method --------------- */   

// String.prototype.trim(): Trims whitespace from the beginning and end of the string.
const greeting = '   Hello world!   ';
console.log(greeting); // "   Hello world!   ";
console.log(greeting.trim()); // "Hello world!";

// Access characters via the bracket operator [...]
console.log('cat'[1]); // "a"
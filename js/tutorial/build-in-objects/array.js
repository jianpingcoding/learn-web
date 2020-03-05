/* --------------- Common operations--------------- */

// Create an Array
let fruits = ['Apple', 'Banana'];

// Access an Array item
let first = fruits[fruits.length - 1];

// Loop over an Array
fruits.forEach(function(item, index, array){
  console.log(item, index);  // Apple 0
}); 

// Add to the end of an Array
fruits.push('Orange'); // ["Apple", "Banana", "Orange"]

// Remove from the end of an Array
fruits.pop(); // ["Apple", "Banana"]

// Remove from the front of an Array
fruits.shift(); // ["Banana"]

// Add to the front of an Array
fruits.unshift('Strawberry'); // ["Strawberry", "Banana", "Mango"]

// Find the index of an item in the Array
let pos = fruits.indexOf('Banana'); // 1

// Remove an item by index position
fruits.splice(pos, 1); // ["Strawberry", "Mango"]

// Copy an Array
let copy = fruits.slice();


/* --------------- Iteration methods --------------- */

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value); // Array [0, "a"]
console.log(iterator1.next().value); // Array [1, "b"]



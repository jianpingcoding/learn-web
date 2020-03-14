// Array.isArray(): Checks if a variable is an array. (JavaScript 1.8.5)
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false

// Array.prototype.forEach(): Calls a callbackFn for each element in the array. (JavaScript 1.6)
var letters = ['a', 'b', 'c'];
letters.forEach(function(letter) { console.log(element) });

// Array.prototype.filter(): Returns a new array containing all elements of
// the calling array for which the provided filtering callbackFn returns true. (JavaScript 1.6)
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function(word) {
  return word.length > 6;
});
console.log(result); //["exuberant", "destruction", "present"]

// Array.prototype.map(): Returns a new array containing the results of 
// calling callbackFn on every element in this array. (JavaScript 1.6)
var array2= [1, 4, 9, 16];
var map2 = array2.map(function(x) { return x * 2 });
console.log(map1); // [2, 8, 18, 32]

// Array.prototype.reduce() : Apply a callbackFn against an accumulator  (JavaScript 1.8)
// and each value of the array (from left-to-right) as to reduce it to a single value.
// reduceRight()
var array3 = [1, 2, 3, 4];
var reducer = function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
} 
console.log(array3.reduce(reducer)); // 10
console.log(array3.reduce(reducer, 5)); // 15, 5 + 1 + 2 + 3 + 4

// Array.prototype.every(): Returns true if every element in this array satisfies the testing callbackFn. (JavaScript 1.6)
var isBelowThreshold = function (currentValue) {
 return currentValue < 40; 
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true

// Array.prototype.some(): Returns true if at least one element 
// in this array satisfies the provided testing callbackFn. (JavaScript 1.6)
var array4 = [1, 2, 3, 4, 5];
const even = function (element) { return element % 2 === 0 };
console.log(array4.some(even)); // true

// Array.prototype.indexOf(): Returns the first (least) index of 
// an element within the array equal to searchElement, or -1 if none is found. (JavaScript 1.6)
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison', 2)); // 4, start from index 2

// Array.prototype.lastIndexOf(): Returns the last (greatest) index of 
// an element within the array equal to searchElement, or -1 if none is found. (JavaScript 1.6)
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); //3

// toString(): returns a string representing the specified array and its elements.
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString()); // "1,2,a,1a"


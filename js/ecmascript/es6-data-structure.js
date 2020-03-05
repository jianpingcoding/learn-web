/* --------------- Set --------------- */

// Initialize a Set
const s = new Set();
s = new Set([1, 2, 3, 4]); // 

// Add items to a Set
s.add('one')
s.add('two')

// Check if an item is in the set
s.has('one') //true
s.has('three') //false

// Delete an item from a Set by key
s.delete('one');


// Determine the number of items in a Set
s.size;

// Delete all items from a Set
s.clear();

// Iterate the items in a Set
for (const k of s.keys()) {
  console.log(k)
}
for (const k of s.values()) {
  console.log(k)
}

// The entries() method returns an iterator
const i = s.entries()
console.log(i.next()) // { value, done = false }

// Convert the Set keys into an array
const a = [...s.keys()];
a = [...s.values()];

/* --------------- WeakSet --------------- */
// In a Set, items are never garbage collected. 
// A WeakSet instead lets all its items be freely garbage collected. 
// Every key of a WeakSet is an object. 
// When the reference to this object is lost, the value can be garbage collected.
// you cannot iterate, clear all items, check its size over the WeakSet
cont ws = new WeakSet(...s);
ws.add('KIWI');
ws.has('KIWI');
ws.delete('KIWI');

/* --------------- Map --------------- */

// Initialize a Map
const m = new Map();
m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]]);

// Add items to a Map
m.set('color', 'red');
m.set('age', 2);

// Get an item from a map by key
const color = m.get('color');
const age = m.get('age');

// Delete an item from a map by key
m.delete('color');

// Delete all items from a map
m.clear();

// Check if a map contains an item by key
const hasColor = m.has('color');

// Find the number of items in a map
const size = m.size;

// Iterate over map keys / values
for (const k of m.keys()) {
  console.log(k)
}
for (const v of m.values()) {
  console.log(v)
}
for (const [k, v] of m.entries()) {
  console.log(k, v)
}
for (const [k, v] of m) {
  console.log(k, v)
}

// Convert the map keys / values into an array
const a = [...m.keys()];
const a = [...m.values()];

/* --------------- WeakMap --------------- */
// In a map object, items are never garbage collected. 
// A WeakMap instead lets all its items be freely garbage collected.
// you cannot iterate over the keys or values, clear all items, check its size.
m.get('color');
m.set("color", 'green');
m.has('color');
m.delete('color');

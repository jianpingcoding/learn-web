/* --------------- String padding --------------- */
// The purpose of string padding is to add characters to a string, so it reaches a specific length.

// padStart()
'test'.padStart(6);       // '  test'
'test'.padStart(6, 'ab'); // 'abtest'

// padEnd()
'test'.padEnd(6);       // 'test  '
'test'.padEnd(6, 'ab'); // 'testab'


/* --------------- Object --------------- */

// Object.values()
const person = { name: 'Fred', age: 87 }
Object.values(person) // ['Fred', 87]

const people = ['Fred', 'Tony']
Object.values(people) // ['Fred', 'Tony']

// Object.entries()
const person = { name: 'Fred', age: 87 }
Object.entries(person) // [['name', 'Fred'], ['age', 87]]

const people = ['Fred', 'Tony']
Object.entries(people) // [['0', 'Fred'], ['1', 'Tony']]

// Object.getOwnPropertyDescriptors()
// A descriptor is a set of attributes of a property: value, writable, get, set, configurable, enumerable
// Object.assign() not correctly copied to a new object (setter)
const person1 = {
  set name(newName) {
    console.log(newName)
  }
}
// This won’t work:
const person2 = {};
Object.assign(person2, person1);
// But this will work:
const person3 = {};
Object.defineProperties(person3, Object.getOwnPropertyDescriptors(person1));

/* --------------- Trailing commas --------------- */

// This feature allows to have trailing commas in function declarations, and in functions calls
const doSomething = (var1, var2,) => {
  //...
}
doSomething('test2', 'test2',);


/* --------------- Async functions --------------- */

// Async functions are a combination of promises and generators
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
const doSomething = async () => {
  console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After')  // Before, After, I did something //after 3s

// Prepending the async keyword to any function means that the function will return a promise.
const aFunction = async () => {
  return 'test'
}
aFunction().then(alert) // This will alert 'test'
// it’s the same as:
const aFunction = async () => {
  return Promise.resolve('test');
}
aFunction().then(alert) // This will alert 'test'

// The code is much simpler to read
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await user.json() // parse JSON
  return userData
}
getFirstUserData();


/* --------------- Shared Memory and Atomics --------------- */
// WebWorkers are used to create multithreaded programs in the browser.
// They offer a messaging protocol via events.
// you can create a shared memory array between web workers and their creator, using a SharedArrayBuffer.
const sab = new SharedArrayBuffer(1024); // 1KiB shared memory
const arr = new Uint8Array(sb);
arr[0] = 100;
new Uint8Array(sb); // [100]

var sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 100000); // 100000 primes
var ia = new Int32Array(sab);  // ia.length == 100000
var primes = new PrimeGenerator();
for ( let i=0 ; i < ia.length ; i++ )
   ia[i] = primes.next();
Atomics.store(ia, 37, 123456);
Atomics.load(ia, 37) == 163;
Atomics.add(ia, 112, 1);

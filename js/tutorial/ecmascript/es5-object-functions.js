/* --------------- Getting and setting prototypes --------------- */
// Object.create(): Creates a new object with the specified prototype object and properties. (JavaScript 1.8.5)
var prototypeObject = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}
var person = Object.create(prototypeObject, {
  'firstName': {
    value: "Jianping", 
    writable: true, 
    enumerable: true
  },
  'lastName': {
    value: "Gan",
    writable: true,
    enumerable: true
  }
});
console.log(person.fullName());
  
// Object.getPrototypeOf(): returns the prototype (JavaScript 1.8.1)
// In ES5, it will throw a TypeError exception if the obj parameter isn't an object. 
// In ES2015, the parameter will be coerced to an Object.
var proto = {};
var obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true
console.log(Object.getPrototypeOf('hello')); // [String: '']


/* --------------- Managing property attributes via property descriptors --------------- */

// Object.defineProperty(): Adds the named property described by a given descriptor to an object. (JavaScript 1.8.5)
const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});
  
// Object.defineProperties(): Adds the named properties described by the given descriptors to an object. (JavaScript 1.8.5)
const object2 = {};
Object.defineProperties(object2, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
  
// Object.getOwnPropertyDescriptor():Returns a property descriptor for a named property on an object. (JavaScript 1.8.5)
console.log(Object.getOwnPropertyDescriptor(object1, 'property1')); // { value: 42, writable: false, enumerable: false, configurable: false }
  
  
/* --------------- Listing properties --------------- */

// Object.keys(): Returns an array of all enumerable properties on an object. (JavaScript 1.8.5)
const object3 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.keys(object3)); // ["a", "b", "c"]
Object.keys('foo');  // In ES5 TypeError: "foo" is not an object 
Object.keys('foo');  // In ES2015+ : ["0", "1", "2"]                   

// Object.getOwnPropertyNames(): Returns an array of all enumerable and non-enumerable properties on an object. (JavaScript 1.8.5)
console.log(Object.getOwnPropertyNames(object3)); // ["a", "b", "c"]


/* --------------- Protecting objects --------------- */
// Object.preventExtensions(): Prevents any extensions of an object. (JavaScript 1.8.5)
const object4 = {};
Object.preventExtensions(object4);
try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e); // Expected output: TypeError: Cannot define property property1, object is not extensible
}

// Object.isExtensible(): Determines if extending of an object is allowed. (JavaScript 1.8.5)
console.log(Object.isExtensible(object4));  // false

// Object.seal(): Prevents other code from deleting properties of an object. (JavaScript 1.8.5)
Object.seal(object1);
delete object1.property1; // cannot delete when sealed  
console.log(object1.property1); // 42

// Object.isSealed() : Determines if an object is sealed. (JavaScript 1.8.5)
console.log(Object.isSealed(object1.property1));

// Object.freeze(): Freezes an object. Other code cannot delete or change its properties. (JavaScript 1.8.5)
Object.freeze(object1);

// Object.isFrozen(): Determines if an object was frozen. (JavaScript 1.8.5)
console.log(Object.isFrozen(object1.property1));



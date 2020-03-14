/* --------------- A class definition --------------- */
class Person {
  
  // When the object is initialized, the constructor method is called, with any parameters passed.  
  constructor(name) {
    this._name = name
  }

  // Getters and setters
  set name(value) {
    this._name = value
  }
  get name() {
    return this._name
  }

  hello() {
    return `Hello, I am ${this.name}.`;
  }

  // Static methods
  static genericHello() {
    return 'Hello'
  }
}

/* --------------- Class inheritance --------------- */
class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}

// Object
const person = new Person('jianping');
person.hello();

Person.genericHello(); // static method

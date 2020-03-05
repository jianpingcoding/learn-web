/* --------------- New String methods --------------- */

// repeat()
'Ho'.repeat(3) //'HoHoHo'

// codePointAt()
"𠮷".charCodeAt(0).toString(16) //d842
"𠮷".charCodeAt(1).toString(16) //dfb7
"\ud842\udfb7" //"𠮷"


/* --------------- New Object methods --------------- */

// Object.is() : determines if two values are the same value
Object.is(a, b);

// Object.assign(): copies all the enumerable own properties, values are cloned, and objects references are copied.
const original = {
 name: 'Fiesta',
 car: {
   color: 'blue'
 }
}
const copied = Object.assign({}, original)
original.name = 'Focus'
original.car.color = 'yellow'
copied.name //Fiesta
copied.car.color //yellow

// Object.setPrototypeOf(): Set the prototype of an object
const animal = {
  isAnimal: true
}
const mammal = {
  isMammal: true
}
mammal.__proto__ = animal
mammal.isAnimal //true
const dog = Object.create(animal)
dog.isAnimal  //true
console.log(dog.isMammal)  //undefined
Object.setPrototypeOf(dog, mammal)
dog.isAnimal //true
dog.isMammal //true
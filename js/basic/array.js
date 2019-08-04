
// When you access a complex type you work on a reference to its value.
const number1s = [1, 2];
const number2s = number1s;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
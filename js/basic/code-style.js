// ------------------------------- References  -----------------------
// bad
var a = 1;
var b = 2;
// good
const a = 1;
const b = 2;

// bad
var count = 1;
if (true) {
  count += 1;
}
// good, use the let.
let count = 1;
if (true) {
  count += 1;
}


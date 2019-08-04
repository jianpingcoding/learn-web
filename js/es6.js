const foo = 1;
let bar = foo;
bar = 9;
console.log(foo, bar); // 1, 9

let Add = (a, b = 10) => {
    return a + b; 
}
Add(20); // 20 + 10 = 30
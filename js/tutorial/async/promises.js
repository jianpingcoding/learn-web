// DEFINE function in Promise way
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}
// USAGE
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);
// or
promise.then(script => alert('Another handler...'));

// isGreater
const isGreater = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(true)
    } else {
      reject(false)
    }
  });
}
isGreater(1, 2)
  .then(result => {
    console.log('greater');
  })
  .catch(result => {
    console.log('smaller');
  });

// printString  
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(
        () => {
          console.log(string)
          resolve()
        },
        1 * 1000
    )
  });
}
function printAll() {
  printString("A")
    .then(() => {
      return printString("B")
    })
    .then(() => {
      return printString("C")
    });
}
printAll();

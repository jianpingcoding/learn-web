function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    },
    1 * 1000);
  });
}
async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C"); 
}
printAll();
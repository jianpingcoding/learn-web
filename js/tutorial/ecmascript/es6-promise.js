// Creating a promise
const isGreater = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(true)
    } else {
      reject(false)
    }
  });
}

// Consuming a promise, Handling errors
isGreater(1, 2)
  .then(result => {
    console.log('greater')
  })
  .catch(result => {
    console.log('smaller')
  })

// Cascading errors
new Promise((resolve, reject) => {
  throw new Error('Error')
})
  .catch(err => {
    throw new Error('Error')
  })
  .catch(err => {
    console.error(err)
  })

// Chaining promises
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}
const json = response => response.json();
fetch('/todos.json')
  .then(status)
  .then(json)
  .then(data => {
      console.log('Request succeeded with JSON response', data)
  })
  .catch(error => {
      console.log('Request failed', error)
  });

/* --------------- Orchestrating promises --------------- */

// Promise.all() : execute something when they are all resolved
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')
Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })
// The ES2015 destructuring assignment syntax allows you to also do
Promise.all([f1, f2]).then(([res1, res2]) => {
  console.log('Results', res1, res2)
});

// Promise.race() : it runs the attached callback just once with the result of the first promise resolved.
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
});
Promise.race([promiseOne, promiseTwo]).then(result => {
  console.log(result) // 'two'
});
/* --------------- Rest properties --------------- */

const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}
first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }

// Spread properties allow us to create a new object by combining the properties of the object passed after the spread operator
const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }

/* --------------- Asynchronous iteration --------------- */

for await (const line of readLines(filePath)) {
  console.log(line)
}


/* --------------- Promise.prototype.finally() --------------- */
fetch('file.json')
  .then(data => data.json())
  .catch(error => console.error(error))
  .finally(() => console.log('finished'))

/* --------------- Regular Expression improvements --------------- */  

// ?= to match a string that's followed by a specific substring
/Roger(?= Waters)/.test('Roger is my dog') //false

// ?! performs the inverse operation, matching if a string is not followed by a specific substring
/Roger(?! Waters)/.test('Roger is my dog') //true

// ?<=
/(?<=Roger) Waters/.test('Roger is my dog') //true

// negated using ?<!
/(?<!Roger) Waters/.test('Pink Waters is my dog') //true

// Unicode property escapes \p{…} and \P{…}
/^\p{ASCII}+$/u.test('abc')  // true
/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF') // true
/^\p{Lowercase}$/u.test('h') // true
/^\p{Emoji}+$/u.test('H') // false
/^\p{Script=Greek}+$/u.test('ελληνικά') // true
/^\p{Script=Latin}+$/u.test('hey') // true

// Named capturing groups
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const result = re.exec('2015-01-02') // result.groups.year === '2015'

// The s flag, short for single line, causes the . to match new line characters as well. 
/hi.welcome/.test('hi\nwelcome') // false
/hi.welcome/s.test('hi\nwelcome') // true
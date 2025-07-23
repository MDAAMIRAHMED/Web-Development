const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const someNumber = 123.456
console.log(someNumber.toPrecision(5))

const anotherNumber = 20000*23*12
console.log(anotherNumber.toLocaleString('en-IN'))
console.log(anotherNumber.toExponential())

// +++++++++++++++++++++++++++++++ Math ++++++++++++++++++++
// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.2))
// console.log(Math.min(2,1,3,4))
// console.log(Math.max(2,1,3,4))

// console.log(Math.random()*10 + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)

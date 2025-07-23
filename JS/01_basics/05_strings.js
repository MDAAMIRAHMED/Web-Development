const name = "Aamir"
const repo = 50

// console.log(name + repo + " value") // not very effective

// string interpolation using backticks

console.log(`my name is ${name} and my repo count is ${repo}`);

const gameName = new String("Ludo-game-player")

console.log(gameName);

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.__proto__)

// console.log(gameName.charAt(1));
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(4,-2) // -ve to 0 and >len then len and does swap
console.log(newString);

const anotherString = gameName.slice(-4, 2) // does not swap and -ve indexing
console.log(anotherString);

console.log(gameName.replace('Lu', 'Du'))
console.log(gameName.includes('do'))
console.log(gameName.includes('mu'))

console.log(gameName.split('-', 2));




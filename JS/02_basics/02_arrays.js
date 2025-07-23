let marvel_heros = ['ironman', 'spiderman', 'hulk']
let dc_heros = ['superman', 'batman', 'flash']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

let allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const anotherArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 1]]]
const flatArray = anotherArray.flat(Infinity)
// console.log(flatArray);

console.log(Array.isArray("John"));
console.log(Array.from("John"))
console.log(Array.from({name: "John"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

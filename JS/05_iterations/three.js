// For of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);    
// }

const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(greet);    
// }

// Map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

const myObj = {
    game1: "NFS",
    game2: "Spiderman"
}

// not working
// for (const [key, value] of myObj) {
//     console.log(`${key} :- ${value}`);
// }

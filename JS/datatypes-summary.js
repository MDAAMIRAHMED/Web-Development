// Primitive

// 7 Types: Number, String, Boolean, BigInt, null, undefined, Symbol

const age = 14
const name = "John"
const isLoggedIn = true
const bigNumber = 123344215523566666322222n
const outsideTemp = null
let state;
let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId);

console.table([typeof(age), typeof(name), typeof(isLoggedIn), typeof(bigNumber), typeof(outsideTemp), typeof(state), typeof(id)])

// Reference (Non Primitive)

// Arrays, Objects, Functions

let heroes = ["Ironman", "Spiderman", "Captain America"]
let myObj = {
    name: "aamir",
    age: 22
}

let myFunction = function(){
    console.log("hello")
}

console.table([typeof heroes, typeof myObj, typeof myFunction])
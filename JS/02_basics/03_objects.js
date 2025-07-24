// singleton
// Object.create()

// Object Literals
const mySym = Symbol("key1");

let JsUser = {
    name: "Aamir",
    "full name": "Md Aamir Ahmed",
    [mySym]: "mykey1", // for symbol
    age: 20,
    location: "Jaipur",
    isLoggedIn: false,
    email: "aamir@gmail.com",
    lastLoggedIn: ["monday", "tuesday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]); // symbol
// console.log(typeof JsUser[mySym]);

// JsUser.email = "aamir@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "aamir@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hi there");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`)
}
console.log(JsUser.greeting) // [Function (anonymous)]
console.log(JsUser.greeting()) // [hi there/n undefined]

console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());


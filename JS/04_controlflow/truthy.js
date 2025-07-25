const userEmail = []

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Didn't got email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("user email is empty");
// }

// const myObj = {}

// if (Object.keys(myObj).length === 0){
//     console.log("Obj is empty");
// }

// Nullish coalescing operator (??): null undefined

let val1;

val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);

// terniary operator 
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
console.log("execute")
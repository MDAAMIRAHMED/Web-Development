// isLoggedIn = true

// if (isLoggedIn){
//     console.log("executed")
// }

// >, <, >=, <=, ==, !=, ===, !==

temperature = 41

// if (temperature === 40){
//     console.log("Less than 39");
// } else {
//     console.log("equal to 40")
// }

// scope

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`${power} is given whose score is >100`);   
// }

// console.log(`${power}`)

const balance = 1000;

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");  
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard && 2==3){
    console.log("you can buy this course");   
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In")
}
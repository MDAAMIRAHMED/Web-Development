let greetings: string = "Hello Aamir";

let num = 6;

console.log(greetings.toLowerCase()); // suggest string methods

console.log(num.valueOf()); // suggest number methods

// number

let userId: number = 33.44;

userId.toFixed(1);

// boolean

let isLoggedIn: boolean = true;
isLoggedIn.valueOf();

// type inference
let anotherNum = 6; // automatically it is a number
anotherNum.toFixed(1); // still suggest number methods

// but we should in this scenario

// let hero; // any
let hero: string;

function myHero() {
    // return true; // throws error
    return "thor";
}

hero = myHero();

export {};
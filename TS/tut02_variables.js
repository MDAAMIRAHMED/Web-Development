"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Aamir";
var num = 6;
console.log(greetings.toLowerCase()); // suggest string methods
console.log(num.valueOf()); // suggest number methods
// number
var userId = 33.44;
userId.toFixed(1);
// boolean
var isLoggedIn = true;
isLoggedIn.valueOf();
// type inference
var anotherNum = 6; // automatically it is a number
anotherNum.toFixed(1); // still suggest number methods
// but we should in this scenario
// let hero; // any
var hero;
function myHero() {
    // return true; // throws error
    return "thor";
}
hero = myHero();

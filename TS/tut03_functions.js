"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "Hello";
}
addTwo(5);
// addTwo("aamir"); // throws error
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(5) // throws error
getUpper("hitesh");
function signUpUser(name, email, isPaid) { }
// signUpUser(1,2,3) // shows mistakes one at a time
signUpUser("aamir", "aa@gg.com", false);
// let loginUser = (name: string, email: string, isPaid: boolean) => {} // throws error before default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("aamir", "aa@gg.cm");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "hulk", "spiderman"];
// const heros = [1, 2, 3]; // type inference
heros.map(function (hero) {
    //   return 2;
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
